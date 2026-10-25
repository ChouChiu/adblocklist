import { describe, expect, it } from "bun:test";
import { cleanDomain, extractFld } from "../../src/features/rule-normalizer";

describe("DomainValidator", () => {
  it("should clean valid standard domains", () => {
    expect(cleanDomain("example.com")).toBe("example.com");
    expect(cleanDomain("sub.example.com")).toBe("sub.example.com");
    expect(cleanDomain("EXAMPLE.COM")).toBe("example.com");
    expect(cleanDomain("  example.com  ")).toBe("example.com");
  });

  it("should strip protocols, paths, query strings, ports, and trailing/leading dots", () => {
    expect(cleanDomain("https://example.com/path")).toBe("example.com");
    expect(cleanDomain("http://example.com:8080/path?query=1#hash")).toBe("example.com");
    expect(cleanDomain("example.com.")).toBe("example.com");
    expect(cleanDomain(".example.com")).toBe("example.com");
    expect(cleanDomain("...example.com...")).toBe("example.com");
  });

  it("should reject IPs, localhost, and loopbacks", () => {
    expect(cleanDomain("127.0.0.1")).toBeNull();
    expect(cleanDomain("0.0.0.0")).toBeNull();
    expect(cleanDomain("192.168.1.1")).toBeNull();
    expect(cleanDomain("localhost")).toBeNull();
    expect(cleanDomain("broadcasthost")).toBeNull();
    expect(cleanDomain("::1")).toBeNull();
    expect(cleanDomain("[::1]")).toBeNull();
  });

  it("should reject malformed domains, invalid chars, and numeric TLDs", () => {
    expect(cleanDomain("invalid_char.com")).toBeNull();
    expect(cleanDomain("singlelabel")).toBeNull();
    expect(cleanDomain("")).toBeNull();
    expect(cleanDomain("a..b.com")).toBeNull();
    expect(cleanDomain("domain.123")).toBeNull();
    expect(cleanDomain("-lead-hyphen.com")).toBeNull();
    expect(cleanDomain("trail-hyphen-.com")).toBeNull();
  });

  it("should reject multi-part TLD suffixes as standalone domains", () => {
    expect(cleanDomain("com.cn")).toBeNull();
    expect(cleanDomain("co.uk")).toBeNull();
    expect(cleanDomain("org.tw")).toBeNull();
    expect(cleanDomain("net.au")).toBeNull();
  });

  it("should normalize IDN / Unicode domains to Punycode", () => {
    expect(cleanDomain("广告.中国")).toBe("xn--4rr70v.xn--fiqs8s");
    expect(cleanDomain("http://测试.com/path")).toBe("xn--0zwm56d.com");
  });

  it("should extract FLD for standard and multi-part TLDs", () => {
    expect(extractFld("ad.example.com")).toBe("example.com");
    expect(extractFld("deep.sub.example.com")).toBe("example.com");
    expect(extractFld("example.com")).toBe("example.com");
    expect(extractFld("ad.example.com.cn")).toBe("example.com.cn");
    expect(extractFld("track.sub.example.co.uk")).toBe("example.co.uk");
  });
});
