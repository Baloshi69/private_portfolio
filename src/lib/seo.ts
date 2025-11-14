export const SITE_URL = "https://albaloshi.tech";

export const DEFAULT_TITLE = "Al Baloshi Nawaz | Certified Bubble.io Developer";
export const DEFAULT_DESCRIPTION =
  "Certified Bubble.io developer and Google IT Support Specialist building business-ready SaaS platforms, MVPs, and automation systems as a solo partner.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;
export const SITE_NAME = "Al Baloshi Nawaz";
export const TWITTER_HANDLE = "@BaloShi69";

export const buildCanonicalUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
};

export const toAbsoluteUrl = (path: string | undefined) => {
  if (!path) {
    return DEFAULT_OG_IMAGE;
  }

  if (/^https?:\/\//i.test(path)) {
    return encodeURI(path);
  }

  return encodeURI(buildCanonicalUrl(path));
};
