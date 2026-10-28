# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-28 10:25:17 - 2026-10-28 10:25:26 (耗时: 9.21s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,293,908
- 规范化有效规则: 1,254,496
- 误判排除规则: 2,257
- 白名单规则总数: 109
- 剪枝与去重数量: 735,036

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 86 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1847 | 59,620 | 59,508 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 976 | 3,587 | 3,563 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 75 | 209,859 | 209,522 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 78 | 16,285 | 16,208 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 33 | 17,636 | 17,622 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 60 | 48,291 | 48,274 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 82 | 1,555 | 1,541 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 80 | 1,104 | 1,088 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 76 | 359 | 338 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 79 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 97 | 214 | 200 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 85 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 77 | 397 | 325 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 75 | 382 | 368 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 118 | 184,828 | 183,913 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 57 | 82,766 | 75,026 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 429 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 130 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 75 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 75 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 74 | 258 | 244 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 94 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 75 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 92 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 21 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 238 | 17,844 | 5,916 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 237 | 54,345 | 44,648 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 415 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 197 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 75 | 451 | 437 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 75 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 24 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 413 | 212,791 | 212,746 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 2458 | 234,494 | 234,209 | - |
| anti-AD | domains | china | full | 成功 | 509 | 112,828 | 112,632 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,631 | 92 | 59,539 | 1.28 MB |
| lite | overseas | `lite-overseas.txt` | 61,205 | 92 | 61,113 | 1.31 MB |
| lite | all | `lite-all.txt` | 61,253 | 92 | 61,161 | 1.31 MB |
| standard | china | `standard-china.txt` | 337,198 | 116 | 337,082 | 7.38 MB |
| standard | overseas | `standard-overseas.txt` | 358,243 | 115 | 358,128 | 7.82 MB |
| standard | all | `standard-all.txt` | 359,484 | 116 | 359,368 | 7.84 MB |
| full | china | `full-china.txt` | 476,703 | 116 | 476,587 | 10.19 MB |
| full | overseas | `full-overseas.txt` | 508,038 | 115 | 507,923 | 11.05 MB |
| full | all | `full-all.txt` | 519,460 | 116 | 519,344 | 11.26 MB |
