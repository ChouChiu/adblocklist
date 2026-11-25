# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-25 00:25:56 - 2026-11-25 00:26:06 (耗时: 10.38s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,452,175
- 规范化有效规则: 1,393,553
- 误判排除规则: 1,951
- 白名单规则总数: 116
- 剪枝与去重数量: 838,617

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 102 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1112 | 62,705 | 62,592 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1311 | 3,577 | 3,553 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 94 | 247,211 | 246,789 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 101 | 16,535 | 16,458 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 29 | 10,343 | 10,329 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 111 | 70,175 | 70,143 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 25 | 1,509 | 1,495 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 43 | 1,280 | 1,264 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 24 | 425 | 404 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 24 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 101 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 30 | 475 | 461 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 24 | 409 | 338 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 26 | 394 | 380 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 189 | 194,589 | 193,671 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 99 | 88,496 | 81,629 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 241 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 157 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 101 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 101 | 546 | 532 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 43 | 316 | 302 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 101 | 119 | 105 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 101 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 101 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 26 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 115 | 17,740 | 5,845 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 120 | 54,611 | 44,565 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 127 | 13,443 | 13,110 | - |
| 1024_hosts | hosts | china | standard | 成功 | 100 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 23 | 567 | 553 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 42 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 29 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 302 | 134,722 | 134,693 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1246 | 221,378 | 221,110 | - |
| anti-AD | domains | china | full | 成功 | 406 | 110,928 | 110,718 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 383 | 19,098 | 2,114 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 39 | 13,990 | 11,692 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 672 | 146,497 | 146,017 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,720 | 99 | 62,621 | 1.36 MB |
| lite | overseas | `lite-overseas.txt` | 64,296 | 99 | 64,197 | 1.38 MB |
| lite | all | `lite-all.txt` | 64,345 | 99 | 64,246 | 1.39 MB |
| standard | china | `standard-china.txt` | 383,164 | 123 | 383,041 | 8.52 MB |
| standard | overseas | `standard-overseas.txt` | 392,552 | 122 | 392,430 | 8.71 MB |
| standard | all | `standard-all.txt` | 393,759 | 123 | 393,636 | 8.73 MB |
| full | china | `full-china.txt` | 528,567 | 123 | 528,444 | 11.63 MB |
| full | overseas | `full-overseas.txt` | 546,163 | 122 | 546,041 | 12.05 MB |
| full | all | `full-all.txt` | 554,936 | 123 | 554,813 | 12.20 MB |
