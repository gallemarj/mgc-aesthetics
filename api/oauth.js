const GITHUB_AUTHORIZE = "https://github.com/login/oauth/authorize";
const GITHUB_TOKEN = "https://github.com/login/oauth/access_token";

const randomState = () =>
  Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

const callbackPage = (siteUrl, token) => `<!doctype html>
<html lang="en">
<head><meta charset="utf-8" /><title>Signed in</title></head>
<body>
<script>
  (function () {
    var data = { token: ${JSON.stringify(token)}, provider: "github" };
    if (window.opener) {
      window.opener.postMessage(data, ${JSON.stringify(siteUrl)});
      window.close();
    } else {
      document.write("Login complete. You can close this window and go back to the Content Manager.");
    }
  })();
</script>
</body>
</html>`;

export default async function handler(req, res) {
  const host = req.headers.host || "mgcaesthetics.com";
  const siteUrl = `https://${host}`;
  const targetSite = process.env.OAUTH_SITE_URL || siteUrl;
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    res
      .status(500)
      .send(
        "<h1>OAuth is not configured</h1><p>Add OAUTH_GITHUB_CLIENT_ID and OAUTH_GITHUB_CLIENT_SECRET to your Vercel environment variables.</p>"
      );
    return;
  }

  const query = req.query || {};

  if (query.code) {
    const body = new URLSearchParams();
    body.set("client_id", clientId);
    body.set("client_secret", clientSecret);
    body.set("code", query.code);

    const response = await fetch(GITHUB_TOKEN, {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
    });
    const data = await response.json();

    if (!data.access_token) {
      res.status(500).send("<h1>Authorization failed. Please try again.</h1>");
      return;
    }

    res.status(200).send(callbackPage(targetSite, data.access_token));
    return;
  }

  const redirectUri = `${siteUrl}/api/oauth`;
  const authorizeUrl =
    `${GITHUB_AUTHORIZE}?` +
    `client_id=${encodeURIComponent(clientId)}` +
    `&scope=repo%20user` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&state=${randomState()}`;

  res.status(302).setHeader("Location", authorizeUrl).end();
}
