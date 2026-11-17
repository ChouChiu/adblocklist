/** Checks whether any ancestor domain of `domain` satisfies `predicate`. */
export function hasMatchingParent(domain: string, predicate: (parent: string) => boolean): boolean {
  let dotIdx = domain.indexOf(".");
  while (dotIdx !== -1) {
    if (predicate(domain.substring(dotIdx + 1))) {
      return true;
    }
    dotIdx = domain.indexOf(".", dotIdx + 1);
  }
  return false;
}
