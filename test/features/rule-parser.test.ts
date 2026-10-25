import { describe, expect, it } from "bun:test";
import { parseAbp } from "../../src/features/rule-parser/abp-parser";
import { parseDomains } from "../../src/features/rule-parser/domains-parser";
import { parseHosts } from "../../src/features/rule-parser/hosts-parser";
import { parseRules } from "../../src/features/rule-parser/parser-router";

describe("RuleParsers", () => {
  describe("AbpParser", () => {
    it("should parse standard ABP DNS rules and ignore cosmetic rules", () => {
      const content = `
[Adblock Plus 2.0]
! Title: Sample
# Another comment
||ad.example.com^
||tracker.example.org$third-party
@@||auth.example.net^
example.com##.banner
bilibili.com#@#.ad-box
      `;
      const rules = parseAbp(content, "TestABP");

      // Cosmetic rules should be ignored completely in DNS filtering
      expect(rules.length).toBe(3);
      expect(rules.some((r) => r.domain === "example.com")).toBe(false);
      expect(rules.some((r) => r.domain === "bilibili.com")).toBe(false);

      const adRule = rules.find((r) => r.domain === "ad.example.com");
      expect(adRule).toBeDefined();
      expect(adRule?.isWhitelist).toBe(false);
      expect(adRule?.syntax).toBe("||ad.example.com^");

      const allowRule = rules.find((r) => r.domain === "auth.example.net");
      expect(allowRule).toBeDefined();
      expect(allowRule?.isWhitelist).toBe(true);
      expect(allowRule?.syntax).toBe("@@||auth.example.net^");
    });

    it("should ignore rules with $badfilter modifier to prevent mistaken blocking", () => {
      const content = `
||safe-site.com^$badfilter
||tracker.com^
      `;
      const rules = parseAbp(content, "TestBadfilter");
      expect(rules.length).toBe(1);
      expect(rules[0].domain).toBe("tracker.com");
      expect(rules.some((r) => r.domain === "safe-site.com")).toBe(false);
    });

    it("should discard URL path rules to avoid false whitelisting and over-blocking", () => {
      const content = `
||adsite.com/track/banner.png^
@@||doubleclick.net/ddm/trackclk/$domain=hongkongcard.com
||valid-dns.org^
      `;
      const rules = parseAbp(content, "TestPaths");
      expect(rules.length).toBe(1);
      expect(rules[0].domain).toBe("valid-dns.org");
      expect(rules.some((r) => r.domain === "adsite.com")).toBe(false);
      expect(rules.some((r) => r.domain === "doubleclick.net")).toBe(false);
    });

    it("should normalize www prefix to apex domain for block rules", () => {
      const content = `
||www.advertiser.com^
||regular-site.com^
      `;
      const rules = parseAbp(content, "TestWww");
      expect(rules.length).toBe(2);
      expect(rules.some((r) => r.domain === "advertiser.com")).toBe(true);
      expect(rules.some((r) => r.domain === "www.advertiser.com")).toBe(false);
    });
  });

  describe("HostsParser", () => {
    it("should parse hosts entries with multiple hosts per line and ignore comments", () => {
      const content = `
# Hosts sample
127.0.0.1 localhost
::1 localhost
0.0.0.0 0.0.0.0
0.0.0.0 ad.server.com tracking.net
127.0.0.1 bad.org ; semicolon comment
0.0.0.0 www.badhost.com
      `;
      const rules = parseHosts(content, "TestHosts");

      expect(rules.length).toBe(4);
      expect(rules.some((r) => r.domain === "ad.server.com")).toBe(true);
      expect(rules.some((r) => r.domain === "tracking.net")).toBe(true);
      expect(rules.some((r) => r.domain === "bad.org")).toBe(true);
      expect(rules.some((r) => r.domain === "badhost.com")).toBe(true);
    });
  });

  describe("DomainsParser", () => {
    it("should parse plain domain list with inline comments and fold www prefix", () => {
      const content = `
# Domains list
ad.domain.com
badsite.org # inline comment
track.cn ; semicolon inline
www.ads-apex.com
      `;
      const rules = parseDomains(content, "TestDomains");

      expect(rules.length).toBe(4);
      expect(rules[0].syntax).toBe("||ad.domain.com^");
      expect(rules[1].domain).toBe("badsite.org");
      expect(rules[2].domain).toBe("track.cn");
      expect(rules[3].domain).toBe("ads-apex.com");
    });
  });

  describe("ParserRouter", () => {
    it("should route based on format and force allow on allow source type", () => {
      const content = "||goodservice.com^\n0.0.0.0 badsite.com";
      const blockRules = parseRules(content, "adblock", "Source1", "block");
      expect(blockRules[0].isWhitelist).toBe(false);

      const allowRules = parseRules(content, "adblock", "Source2", "allow");
      expect(allowRules[0].isWhitelist).toBe(true);
      expect(allowRules[0].syntax).toBe("@@||goodservice.com^");
    });
  });
});
