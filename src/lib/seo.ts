export const SITE_URL = "https://albaloshi.tech";

const BASE_NAME = "Al Baloshi Nawaz";
const ALT_NAME = "Nasir Nawaz";

export const DEFAULT_TITLE = `${BASE_NAME} | Certified Bubble.io Developer`;
export const ALT_DEFAULT_TITLE = `${ALT_NAME} | Certified Bubble.io Developer`;
export const DEFAULT_DESCRIPTION =
  "Certified Bubble.io developer and Google IT Support Specialist building business-ready SaaS platforms, MVPs, and automation systems as a solo partner.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;
export const DEFAULT_OG_IMAGE_ALT = "AlBaloshiTech logo with tagline";
export const ALT_OG_IMAGE_ALT = "Nasir Nawaz logo with tagline";
export const SITE_NAME = BASE_NAME;
export const ALT_SITE_NAME = ALT_NAME;
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
