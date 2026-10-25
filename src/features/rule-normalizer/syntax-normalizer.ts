/** Formats clean domain into standard Adblock Plus / AdGuard rule syntax. */
export function toAdblockRule(domain: string, isWhitelist = false): string {
  return isWhitelist ? `@@||${domain}^` : `||${domain}^`;
}

export const SyntaxNormalizer = {
  toStandardRule: toAdblockRule,
};
