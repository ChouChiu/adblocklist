# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-24 14:38:06 - 2026-11-24 14:38:15 (耗时: 8.20s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,461,191
- 规范化有效规则: 1,402,570
- 误判排除规则: 1,953
- 白名单规则总数: 116
- 剪枝与去重数量: 853,220

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 107 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1200 | 62,708 | 62,595 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 721 | 3,577 | 3,553 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 106 | 246,141 | 245,718 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 48 | 16,478 | 16,401 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 52 | 10,340 | 10,326 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 88 | 71,083 | 71,051 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 29 | 1,509 | 1,495 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 31 | 1,280 | 1,264 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 106 | 425 | 404 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 107 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 38 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 39 | 475 | 461 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 110 | 409 | 338 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 29 | 394 | 380 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 133 | 194,464 | 193,544 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 72 | 88,496 | 81,629 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 218 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 284 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 39 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 106 | 546 | 532 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 106 | 316 | 302 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 32 | 119 | 105 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 48 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 30 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 30 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 485 | 17,739 | 5,844 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 1530 | 54,605 | 44,564 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 477 | 13,443 | 13,110 | - |
| 1024_hosts | hosts | china | standard | 成功 | 114 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 88 | 567 | 553 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 28 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 118 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 82 | 144,501 | 144,473 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1508 | 221,079 | 220,809 | - |
| anti-AD | domains | china | full | 成功 | 567 | 110,928 | 110,718 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 401 | 19,098 | 2,114 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 83 | 13,990 | 11,692 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 591 | 146,384 | 145,904 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,723 | 99 | 62,624 | 1.36 MB |
| lite | overseas | `lite-overseas.txt` | 64,299 | 99 | 64,200 | 1.38 MB |
| lite | all | `lite-all.txt` | 64,348 | 99 | 64,249 | 1.39 MB |
| standard | china | `standard-china.txt` | 381,710 | 123 | 381,587 | 8.49 MB |
| standard | overseas | `standard-overseas.txt` | 390,852 | 122 | 390,730 | 8.68 MB |
| standard | all | `standard-all.txt` | 392,057 | 123 | 391,934 | 8.69 MB |
| full | china | `full-china.txt` | 524,509 | 123 | 524,386 | 11.55 MB |
| full | overseas | `full-overseas.txt` | 540,631 | 122 | 540,509 | 11.94 MB |
| full | all | `full-all.txt` | 549,350 | 123 | 549,227 | 12.09 MB |
