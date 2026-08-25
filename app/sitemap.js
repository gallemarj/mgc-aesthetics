export default function sitemap() {
  const base = "https://mgcaesthetics.com";
  const lastModified = new Date();

  return [
    { url: base, lastModified },
    { url: `${base}/services`, lastModified },
    { url: `${base}/booking`, lastModified },
    { url: `${base}/contact`, lastModified },
    { url: `${base}/reviews`, lastModified },
    { url: `${base}/faq`, lastModified },
    { url: `${base}/clients`, lastModified },
  ];
}
