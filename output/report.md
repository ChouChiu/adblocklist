# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-24 02:46:49 - 2026-11-24 02:46:59 (耗时: 10.18s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,477,762
- 规范化有效规则: 1,419,119
- 误判排除规则: 1,949
- 白名单规则总数: 116
- 剪枝与去重数量: 862,655

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 76 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1253 | 62,652 | 62,539 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1226 | 3,577 | 3,553 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 62 | 239,404 | 239,005 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 18 | 16,477 | 16,400 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 17 | 10,371 | 10,357 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 38 | 69,891 | 69,859 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 19 | 1,510 | 1,496 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 75 | 1,289 | 1,273 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 76 | 425 | 404 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 76 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 75 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 76 | 475 | 461 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 76 | 409 | 338 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 76 | 394 | 380 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 75 | 194,276 | 193,356 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 65 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 304 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 111 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 19 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 75 | 546 | 532 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 76 | 316 | 302 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 76 | 119 | 105 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 19 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 75 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 76 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 2581 | 17,734 | 5,839 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 2587 | 54,605 | 44,564 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 115 | 13,443 | 13,110 | - |
| 1024_hosts | hosts | china | standard | 成功 | 76 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 75 | 567 | 553 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 76 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 76 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 329 | 175,031 | 174,980 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1359 | 220,987 | 220,717 | - |
| anti-AD | domains | china | full | 成功 | 289 | 110,928 | 110,718 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 316 | 19,124 | 2,114 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 26 | 13,990 | 11,692 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 303 | 146,201 | 145,724 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,667 | 99 | 62,568 | 1.35 MB |
| lite | overseas | `lite-overseas.txt` | 64,243 | 99 | 64,144 | 1.38 MB |
| lite | all | `lite-all.txt` | 64,292 | 99 | 64,193 | 1.38 MB |
| standard | china | `standard-china.txt` | 372,000 | 123 | 371,877 | 8.29 MB |
| standard | overseas | `standard-overseas.txt` | 382,629 | 122 | 382,507 | 8.51 MB |
| standard | all | `standard-all.txt` | 383,849 | 123 | 383,726 | 8.53 MB |
| full | china | `full-china.txt` | 533,681 | 123 | 533,558 | 11.75 MB |
| full | overseas | `full-overseas.txt` | 547,812 | 122 | 547,690 | 12.12 MB |
| full | all | `full-all.txt` | 556,464 | 123 | 556,341 | 12.27 MB |
