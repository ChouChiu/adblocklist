# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-27 09:40:20 - 2026-10-27 09:40:30 (耗时: 9.73s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,289,923
- 规范化有效规则: 1,250,503
- 误判排除规则: 2,258
- 白名单规则总数: 109
- 剪枝与去重数量: 731,852

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 53 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1088 | 59,452 | 59,340 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 2893 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 126 | 208,656 | 208,319 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 38 | 16,275 | 16,198 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 44 | 17,614 | 17,600 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 58 | 47,753 | 47,736 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 48 | 1,555 | 1,541 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 25 | 1,105 | 1,089 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 58 | 359 | 338 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 81 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 50 | 214 | 200 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 25 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 25 | 397 | 325 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 60 | 382 | 368 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 194 | 184,446 | 183,531 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 67 | 81,308 | 73,555 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 299 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 54 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 23 | 85 | 14 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 53 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 125 | 258 | 244 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 57 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 34 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 75 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 69 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 275 | 17,833 | 5,908 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 274 | 54,344 | 44,648 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 401 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 39 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 24 | 451 | 437 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 25 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 66 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 104 | 212,651 | 212,606 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1549 | 234,450 | 234,164 | - |
| anti-AD | domains | china | full | 成功 | 391 | 112,828 | 112,632 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,463 | 92 | 59,371 | 1.28 MB |
| lite | overseas | `lite-overseas.txt` | 61,036 | 92 | 60,944 | 1.31 MB |
| lite | all | `lite-all.txt` | 61,084 | 92 | 60,992 | 1.31 MB |
| standard | china | `standard-china.txt` | 336,292 | 116 | 336,176 | 7.36 MB |
| standard | overseas | `standard-overseas.txt` | 357,287 | 115 | 357,172 | 7.80 MB |
| standard | all | `standard-all.txt` | 358,529 | 116 | 358,413 | 7.82 MB |
| full | china | `full-china.txt` | 475,889 | 116 | 475,773 | 10.17 MB |
| full | overseas | `full-overseas.txt` | 507,235 | 115 | 507,120 | 11.03 MB |
| full | all | `full-all.txt` | 518,651 | 116 | 518,535 | 11.24 MB |
