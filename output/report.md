# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-21 12:14:42 - 2026-11-21 12:14:54 (耗时: 11.82s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,539,054
- 规范化有效规则: 1,480,506
- 误判排除规则: 2,021
- 白名单规则总数: 116
- 剪枝与去重数量: 893,045

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 147 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1632 | 62,070 | 61,957 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 850 | 3,575 | 3,551 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 89 | 244,991 | 244,572 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 31 | 16,723 | 16,646 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 23 | 10,759 | 10,745 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 53 | 72,998 | 72,966 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 13 | 1,530 | 1,516 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 16 | 1,230 | 1,214 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 148 | 425 | 404 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 147 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 148 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 147 | 475 | 461 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 147 | 409 | 338 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 101 | 394 | 380 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 226 | 192,269 | 191,349 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 61 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 275 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 189 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 111 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 147 | 546 | 532 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 146 | 316 | 302 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 109 | 119 | 105 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 146 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 146 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 147 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 187 | 18,019 | 6,124 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 202 | 54,573 | 44,551 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 148 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 147 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 104 | 567 | 553 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 147 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 25 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 146 | 224,068 | 223,978 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1802 | 226,705 | 226,422 | - |
| anti-AD | domains | china | full | 成功 | 408 | 110,360 | 110,150 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 536 | 18,948 | 2,086 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 25 | 13,991 | 11,693 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 642 | 146,556 | 146,079 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,084 | 99 | 61,985 | 1.34 MB |
| lite | overseas | `lite-overseas.txt` | 63,661 | 99 | 63,562 | 1.37 MB |
| lite | all | `lite-all.txt` | 63,709 | 99 | 63,610 | 1.37 MB |
| standard | china | `standard-china.txt` | 374,887 | 123 | 374,764 | 8.33 MB |
| standard | overseas | `standard-overseas.txt` | 384,093 | 122 | 383,971 | 8.52 MB |
| standard | all | `standard-all.txt` | 385,306 | 123 | 385,183 | 8.54 MB |
| full | china | `full-china.txt` | 566,100 | 123 | 565,977 | 12.33 MB |
| full | overseas | `full-overseas.txt` | 579,846 | 122 | 579,724 | 12.69 MB |
| full | all | `full-all.txt` | 587,461 | 123 | 587,338 | 12.81 MB |
