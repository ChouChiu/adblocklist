# adblocklist

> 最后更新: 2026-10-30 10:44:49 | 规则总数: 516,211 | 规则源状态: 36/36 正常

定时从多个上游规则源同步规则，完成解析、规范化、去重与子域名剪枝，生成 AdGuard / Adblock Plus 兼容的规则订阅。

## 订阅地址

生成文件分为 3 种规模版本与 3 种覆盖范围，共 9 个文件：

| 版本 | 区域 | 文件名 | 规则数 | 白名单 | 适用场景 | 订阅链接 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,972 | 92 | 国内精简，适合低配路由器与日常免维护 | [Raw](https://raw.githubusercontent.com/chouchiu/adblocklist/main/output/lite-china.txt) / [本地](output/lite-china.txt) |
| lite | overseas | `lite-overseas.txt` | 61,547 | 92 | 海外精简，适合轻量海淘与海外网页 | [Raw](https://raw.githubusercontent.com/chouchiu/adblocklist/main/output/lite-overseas.txt) / [本地](output/lite-overseas.txt) |
| lite | all | `lite-all.txt` | 61,595 | 92 | 全域精简，零误杀，适合路由器与电视盒子 | [Raw](https://raw.githubusercontent.com/chouchiu/adblocklist/main/output/lite-all.txt) / [本地](output/lite-all.txt) |
| standard | china | `standard-china.txt` | 340,473 | 116 | 国内标准，强力过滤国内 App 与网页广告 | [Raw](https://raw.githubusercontent.com/chouchiu/adblocklist/main/output/standard-china.txt) / [本地](output/standard-china.txt) |
| standard | overseas | `standard-overseas.txt` | 361,194 | 115 | 海外标准，强力过滤海外广告与跟踪网络 | [Raw](https://raw.githubusercontent.com/chouchiu/adblocklist/main/output/standard-overseas.txt) / [本地](output/standard-overseas.txt) |
| standard | all | `standard-all.txt` | 362,393 | 116 | 全域标准，平衡拦截率与稳定性，推荐主力使用 | [Raw](https://raw.githubusercontent.com/chouchiu/adblocklist/main/output/standard-all.txt) / [本地](output/standard-all.txt) |
| full | china | `full-china.txt` | 475,086 | 116 | 国内全量，针对国内生态的深度拦截 | [Raw](https://raw.githubusercontent.com/chouchiu/adblocklist/main/output/full-china.txt) / [本地](output/full-china.txt) |
| full | overseas | `full-overseas.txt` | 508,582 | 115 | 海外全量，针对海外生态的深度拦截 | [Raw](https://raw.githubusercontent.com/chouchiu/adblocklist/main/output/full-overseas.txt) / [本地](output/full-overseas.txt) |
| full | all | `full-all.txt` | 516,211 | 116 | 全域全量，高强度去广告与深层隐私阻断 | [Raw](https://raw.githubusercontent.com/chouchiu/adblocklist/main/output/full-all.txt) / [本地](output/full-all.txt) |

### 版本说明
- lite（精简版）：只收录 OISD Small、AWAvenue、Peter Lowe 等极低误杀的核心源，适合路由器、智能电视。
- standard（标准版）：在精简版基础上增加 HaGeZi Multi PRO、AdGuard DNS、StevenBlack、DoH 防绕过、反诈骗、弹窗过滤及多平台原生遥测拦截，推荐主力使用。
- full（完整版）：包含全部启用源（含 HaGeZi TIF 威胁情报、OISD Big、anti-AD 等大体积源），通过内置白名单压制误杀，适合追求高强度防御与安全拦截的场景。

---

## 规则源

当前在 `config/sources.yaml` 中配置的上游来源列表：

| 规则源 | 格式 | 区域 | 层级 | 状态 | 优先级 | 采纳数 | 上游地址 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 正常 | 100 | 1,914 | [访问](https://awavenue.top/) |
| OISD (Small) | adblock | all | lite | 正常 | 95 | 59,849 | [访问](https://oisd.nl/) |
| Peter Lowe's List | adblock | overseas | lite | 正常 | 95 | 3,565 | [访问](https://pgl.yoyo.org/adservers/) |
| HaGeZi's Multi PRO | adblock | all | standard | 正常 | 92 | 213,813 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 正常 | 90 | 16,324 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 正常 | 90 | 17,528 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Pop-up Ads | adblock | all | standard | 正常 | 88 | 50,997 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 正常 | 85 | 1,536 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Badware File Hoster | adblock | all | standard | 正常 | 85 | 1,074 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 正常 | 85 | 343 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 正常 | 85 | 125 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 正常 | 85 | 201 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 正常 | 85 | 231 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 正常 | 85 | 325 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 正常 | 85 | 369 | [访问](https://github.com/hagezi/dns-blocklists) |
| AdGuard DNS Filter | adblock | all | standard | 正常 | 90 | 184,639 | [访问](https://github.com/AdguardTeam/HostlistsRegistry) |
| StevenBlack Unified Hosts | hosts | overseas | standard | 正常 | 85 | 76,089 | [访问](https://github.com/StevenBlack/hosts) |
| AdAway Default Blocklist | hosts | all | standard | 正常 | 85 | 6,520 | [访问](https://adaway.org/) |
| SmartTV Blocklist (AGH) | adblock | all | standard | 正常 | 85 | 150 | [访问](https://github.com/Perflyst/PiHoleBlocklist) |
| Game Console Adblock List | adblock | overseas | standard | 正常 | 85 | 17 | [访问](https://github.com/DandelionSprout/adfilt) |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 正常 | 85 | 489 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 正常 | 85 | 244 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 正常 | 85 | 110 | [访问](https://github.com/hagezi/dns-blocklists) |
| CJX's Annoyance List | adblock | china | standard | 正常 | 80 | 164 | [访问](https://github.com/cjx82630/cjxlist) |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 正常 | 80 | 29 | [访问](https://github.com/xinggsf/Adblock-Plus-Rule) |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 正常 | 80 | 163 | [访问](https://github.com/xinggsf/Adblock-Plus-Rule) |
| EasyList China | adblock | china | standard | 正常 | 80 | 5,932 | [访问](https://easylist.to/) |
| EasyPrivacy | adblock | all | standard | 正常 | 80 | 44,654 | [访问](https://easylist.to/) |
| Dan Pollock's hosts | hosts | overseas | standard | 正常 | 75 | 12,965 | [访问](https://someonewhocares.org/hosts/) |
| 1024_hosts | hosts | china | standard | 正常 | 75 | 3,224 | [访问](https://github.com/Goooler/1024_hosts) |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 正常 | 85 | 550 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 正常 | 85 | 57 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 正常 | 90 | 10 | [访问](https://github.com/hagezi/dns-blocklists) |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 正常 | 95 | 193,042 | [访问](https://github.com/hagezi/dns-blocklists) |
| OISD (Big) | adblock | overseas | full | 正常 | 75 | 234,617 | [访问](https://oisd.nl/) |
| anti-AD | domains | china | full | 正常 | 70 | 108,095 | [访问](https://anti-ad.net/) |

---

## 防误杀机制

1. 排除基础云服务（`config/exclude.txt`）：剔除公共 CDN（Cloudflare, Akamai, 阿里/腾讯云 CDN）、手机推送与系统更新、人机验证域名。
2. 白名单放行（`config/allowlist.txt`）：合并 AdGuard 官方中文白名单与 QQ 音乐、小爱音箱、电商、支付等常见误杀场景放行规则。
3. 优先级保障：所有白名单规则（`@@||...`）规范化后置顶输出。

---

## 本地运行

要求环境：[Bun](https://bun.sh/) 1.4+

```bash
# 1. 安装依赖
bun install

# 2. 运行完整合并流程（拉取、清洗、去重、生成 9 个规则文件并更新 README）
bun run start

# 3. 离线快速验证（使用本地测试数据）
bun run start --no-remote --dry-run

# 4. 代码检查与测试
bun run lint
bun run test
```

---

## 误杀反馈与临时放行

若发现正常网站或应用功能受损：
1. 临时放行：可在客户端自定义规则中添加 `@@||example.com^$important`。
2. 提交反馈：请在 GitHub Issues 提供受影响域名、应用名称及所使用的规则版本。

## 许可证

本项目脚本基于 MIT 协议开源，各上游规则版权归原作者所有。
