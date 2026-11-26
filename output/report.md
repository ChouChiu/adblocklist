# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-26 00:02:10 - 2026-11-26 00:02:19 (耗时: 9.24s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,477,678
- 规范化有效规则: 1,419,061
- 误判排除规则: 1,965
- 白名单规则总数: 116
- 剪枝与去重数量: 863,978

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 166 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1661 | 62,935 | 62,822 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 924 | 3,578 | 3,554 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 92 | 241,206 | 240,796 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 282 | 16,520 | 16,443 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 16 | 10,347 | 10,333 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 106 | 70,388 | 70,356 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 122 | 1,954 | 1,940 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 106 | 1,285 | 1,269 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 138 | 425 | 404 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 121 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 20 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 16 | 475 | 461 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 33 | 409 | 338 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 22 | 394 | 380 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 103 | 194,962 | 194,044 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 61 | 88,496 | 81,629 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 711 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 282 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 106 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 206 | 546 | 532 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 112 | 316 | 302 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 33 | 119 | 105 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 33 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 109 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 20 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 266 | 17,752 | 5,858 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 189 | 54,612 | 44,565 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 120 | 13,444 | 13,111 | - |
| 1024_hosts | hosts | china | standard | 成功 | 111 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 37 | 567 | 553 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 16 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 106 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 72 | 164,637 | 164,582 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1877 | 221,862 | 221,594 | - |
| anti-AD | domains | china | full | 成功 | 187 | 110,928 | 110,718 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 372 | 19,063 | 2,098 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 28 | 13,990 | 11,692 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 493 | 146,371 | 145,891 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,950 | 99 | 62,851 | 1.36 MB |
| lite | overseas | `lite-overseas.txt` | 64,527 | 99 | 64,428 | 1.39 MB |
| lite | all | `lite-all.txt` | 64,576 | 99 | 64,477 | 1.39 MB |
| standard | china | `standard-china.txt` | 377,973 | 123 | 377,850 | 8.40 MB |
| standard | overseas | `standard-overseas.txt` | 387,558 | 122 | 387,436 | 8.60 MB |
| standard | all | `standard-all.txt` | 388,794 | 123 | 388,671 | 8.62 MB |
| full | china | `full-china.txt` | 532,834 | 123 | 532,711 | 11.69 MB |
| full | overseas | `full-overseas.txt` | 546,154 | 122 | 546,032 | 12.03 MB |
| full | all | `full-all.txt` | 555,083 | 123 | 554,960 | 12.19 MB |
