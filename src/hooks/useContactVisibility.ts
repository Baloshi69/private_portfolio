import { useEffect, useState } from "react";

export const CONTACT_RESTRICTED_DOMAIN = "nasirnawaz.com";

const isRestrictedHost = (host?: string) => {
  if (!host) return false;
  const normalized = host.toLowerCase();
  return normalized === CONTACT_RESTRICTED_DOMAIN || normalized.endsWith(`.${CONTACT_RESTRICTED_DOMAIN}`);
};

export const useIsNasirDomain = () => {
  const [isNasirDomain, setIsNasirDomain] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return isRestrictedHost(window.location.hostname);
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setIsNasirDomain(isRestrictedHost(window.location.hostname));
  }, []);

  return isNasirDomain;
};

export const useContactVisibility = () => {
  const isNasirDomain = useIsNasirDomain();
  return !isNasirDomain;
};

export const isContactAllowed = () => {
  if (typeof window === "undefined") {
    return true;
  }
  return !isRestrictedHost(window.location.hostname);
};
