# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-27 00:22:14 - 2026-11-27 00:22:24 (耗时: 9.69s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,486,731
- 规范化有效规则: 1,428,066
- 误判排除规则: 1,952
- 白名单规则总数: 116
- 剪枝与去重数量: 865,551

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 85 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1625 | 63,201 | 63,088 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1118 | 3,580 | 3,556 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 85 | 242,674 | 242,279 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 35 | 16,887 | 16,810 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 27 | 10,740 | 10,726 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 66 | 71,531 | 71,499 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 86 | 1,955 | 1,941 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 94 | 1,410 | 1,394 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 85 | 425 | 404 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 86 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 85 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 25 | 475 | 461 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 25 | 409 | 338 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 85 | 394 | 380 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 112 | 195,355 | 194,436 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 71 | 88,496 | 81,629 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 401 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 323 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 119 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 85 | 546 | 532 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 94 | 316 | 302 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 28 | 119 | 105 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 22 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 95 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 89 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 260 | 17,762 | 5,868 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 251 | 54,639 | 44,569 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 136 | 13,444 | 13,111 | - |
| 1024_hosts | hosts | china | standard | 成功 | 89 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 85 | 567 | 553 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 94 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 85 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 309 | 169,554 | 169,498 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1921 | 222,240 | 221,971 | - |
| anti-AD | domains | china | full | 成功 | 518 | 110,219 | 110,011 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 799 | 19,119 | 2,115 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 30 | 13,990 | 11,692 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 587 | 146,587 | 146,107 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 63,216 | 99 | 63,117 | 1.37 MB |
| lite | overseas | `lite-overseas.txt` | 64,795 | 99 | 64,696 | 1.39 MB |
| lite | all | `lite-all.txt` | 64,844 | 99 | 64,745 | 1.40 MB |
| standard | china | `standard-china.txt` | 378,308 | 123 | 378,185 | 8.41 MB |
| standard | overseas | `standard-overseas.txt` | 388,059 | 122 | 387,937 | 8.61 MB |
| standard | all | `standard-all.txt` | 389,302 | 123 | 389,179 | 8.63 MB |
| full | china | `full-china.txt` | 540,460 | 123 | 540,337 | 11.86 MB |
| full | overseas | `full-overseas.txt` | 554,848 | 122 | 554,726 | 12.22 MB |
| full | all | `full-all.txt` | 562,515 | 123 | 562,392 | 12.35 MB |
