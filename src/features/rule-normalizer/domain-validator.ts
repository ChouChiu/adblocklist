// Common multi-part TLD suffixes to correctly identify registrar-assigned second/third-level domains
const MULTI_PART_TLDS = new Set([
  "com.cn",
  "net.cn",
  "org.cn",
  "gov.cn",
  "edu.cn",
  "com.tw",
  "org.tw",
  "idv.tw",
  "edu.tw",
  "gov.tw",
  "com.hk",
  "org.hk",
  "edu.hk",
  "gov.hk",
  "co.uk",
  "org.uk",
  "me.uk",
  "ac.uk",
  "gov.uk",
  "net.uk",
  "co.jp",
  "ne.jp",
  "or.jp",
  "go.jp",
  "ac.jp",
  "co.kr",
  "ne.kr",
  "re.kr",
  "go.kr",
  "com.au",
  "net.au",
  "org.au",
  "edu.au",
  "gov.au",
  "co.nz",
  "net.nz",
  "org.nz",
  "com.sg",
  "edu.sg",
  "gov.sg",
  "com.my",
  "org.my",
  "edu.my",
  "co.in",
  "net.in",
  "org.in",
  "gov.in",
  "com.br",
  "org.br",
  "net.br",
  "co.za",
  "net.za",
  "org.za",
  "com.mx",
  "org.mx",
  "com.tr",
  "org.tr",
  "com.ru",
  "net.ru",
  "org.ru",
  "co.il",
  "org.il",
  "net.il",
  "gov.il",
  "com.ar",
  "org.ar",
  "net.ar",
  "gov.ar",
  "com.co",
  "org.co",
  "edu.co",
  "gov.co",
  "com.pe",
  "org.pe",
  "edu.pe",
  "gov.pe",
  "com.ua",
  "org.ua",
  "net.ua",
  "edu.ua",
  "gov.ua",
  "com.ph",
  "org.ph",
  "net.ph",
  "edu.ph",
  "gov.ph",
]);

const LOCAL_DOMAINS = new Set([
  "localhost",
  "localhost.localdomain",
  "local",
  "broadcasthost",
  "ip6-localhost",
  "ip6-loopback",
  "ip6-localnet",
  "ip6-mcastprefix",
  "ip6-allnodes",
  "ip6-allrouters",
  "ip6-allhosts",
  "0.0.0.0",
]);

const IPV4_REGEX = /^(\d{1,3}\.){3}\d{1,3}$/;
const DOMAIN_LABEL_REGEX = /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/;

/**
 * Validates and normalizes candidate domain; returns lowercase FQDN (Punycode if IDN) or null if invalid.
 */
export function cleanDomain(input: string): string | null {
  if (!input || input.length < 3 || input.length > 253) return null;

  let domain = input.trim().toLowerCase();

  // Strip protocol
  if (domain.startsWith("http://")) domain = domain.substring(7);
  else if (domain.startsWith("https://")) domain = domain.substring(8);

  // Strip path, query, hash
  const slashIdx = domain.indexOf("/");
  if (slashIdx !== -1) domain = domain.substring(0, slashIdx);

  const qIdx = domain.indexOf("?");
  if (qIdx !== -1) domain = domain.substring(0, qIdx);

  const hashIdx = domain.indexOf("#");
  if (hashIdx !== -1) domain = domain.substring(0, hashIdx);

  // Strip port
  const colonIdx = domain.indexOf(":");
  if (colonIdx !== -1 && !domain.includes("]")) {
    domain = domain.substring(0, colonIdx);
  }

  // Strip leading and trailing dots
  domain = domain.replace(/^\.+|\.+$/g, "");

  if (domain.length < 3 || domain.length > 253) return null;

  // Handle Internationalized Domain Names (IDN) by converting to Punycode
  if (/[^a-z0-9.-]/.test(domain)) {
    try {
      domain = new URL(`http://${domain}`).hostname;
    } catch {
      return null;
    }
  }

  // Reject local hostnames, IPv4, and IPv6
  if (LOCAL_DOMAINS.has(domain)) return null;
  if (IPV4_REGEX.test(domain) || domain.includes(":")) return null;

  // Reject multi-part TLD suffixes themselves (e.g., com.cn, co.uk cannot be blocked as standalone domains)
  if (MULTI_PART_TLDS.has(domain)) return null;

  const labels = domain.split(".");
  if (labels.length < 2) return null;

  for (const label of labels) {
    if (!label || label.length > 63 || !DOMAIN_LABEL_REGEX.test(label)) {
      return null;
    }
  }

  const tld = labels[labels.length - 1];
  if (tld.length < 2 || /^\d+$/.test(tld)) return null;

  return domain;
}

/**
 * Normalizes domain for block rules by stripping redundant `www.` prefix when safe.
 * In ABP / AdGuard DNS syntax, `||domain.com^` already automatically blocks `domain.com` and `www.domain.com`.
 */
export function normalizeApex(domain: string): string {
  if (domain.startsWith("www.")) {
    const withoutWww = domain.substring(4);
    if (withoutWww.includes(".") && !MULTI_PART_TLDS.has(withoutWww)) {
      return withoutWww;
    }
  }
  return domain;
}

/** Extracts registrable first-level domain (FLD) for subdomain pruning. */
export function extractFld(domain: string): string {
  const parts = domain.split(".");
  if (parts.length <= 2) {
    return domain;
  }

  const lastTwo = `${parts[parts.length - 2]}.${parts[parts.length - 1]}`;
  if (MULTI_PART_TLDS.has(lastTwo)) {
    return parts.length >= 3 ? `${parts[parts.length - 3]}.${lastTwo}` : domain;
  }

  return `${parts[parts.length - 2]}.${parts[parts.length - 1]}`;
}

export const DomainValidator = {
  cleanDomain,
  normalizeApex,
  extractFld,
  MULTI_PART_TLDS,
};
