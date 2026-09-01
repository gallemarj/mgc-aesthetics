const GITHUB_AUTHORIZE = "https://github.com/login/oauth/authorize";
const GITHUB_TOKEN = "https://github.com/login/oauth/access_token";

const json = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

const html = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
  body,
});

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

exports.handler = async (event) => {
  const host = event.headers.host || "mgcaesthetics.com";
  const siteUrl = `https://${host}`;
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return html(
      500,
      "<h1>OAuth is not configured</h1><p>Add OAUTH_GITHUB_CLIENT_ID and OAUTH_GITHUB_CLIENT_SECRET to your Netlify environment variables.</p>"
    );
  }

  const path = (event.path || "").replace(/\/+$/, "");
  const isCallback = path.endsWith("/callback");

  if (isCallback) {
    const params = event.queryStringParameters || {};
    if (!params.code) {
      return json(400, { error: "Missing code parameter" });
    }
    const body = new URLSearchParams();
    body.set("client_id", clientId);
    body.set("client_secret", clientSecret);
    body.set("code", params.code);

    const res = await fetch(GITHUB_TOKEN, {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
    });
    const data = await res.json();

    if (!data.access_token) {
      return html(500, "<h1>Authorization failed. Please try again.</h1>");
    }

    return html(200, callbackPage(siteUrl, data.access_token));
  }

  const redirectUri = `${siteUrl}/.netlify/functions/oauth/callback`;
  const authorizeUrl =
    `${GITHUB_AUTHORIZE}?` +
    `client_id=${encodeURIComponent(clientId)}` +
    `&scope=repo%20user` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&state=${randomState()}`;

  return {
    statusCode: 302,
    headers: { Location: authorizeUrl, "Cache-Control": "no-store" },
    body: "",
  };
};
