# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-25 13:58:48 - 2026-11-25 13:58:58 (耗时: 10.09s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,452,004
- 规范化有效规则: 1,393,406
- 误判排除规则: 1,946
- 白名单规则总数: 116
- 剪枝与去重数量: 839,254

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 16 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1405 | 62,936 | 62,823 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 2245 | 3,578 | 3,554 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 129 | 246,448 | 246,031 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 83 | 16,533 | 16,456 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 49 | 10,345 | 10,331 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 139 | 70,264 | 70,232 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 106 | 1,510 | 1,496 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 129 | 1,281 | 1,265 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 44 | 425 | 404 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 99 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 101 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 67 | 475 | 461 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 107 | 409 | 338 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 44 | 394 | 380 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 166 | 194,814 | 193,896 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 97 | 88,496 | 81,629 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 693 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 299 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 27 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 98 | 546 | 532 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 128 | 316 | 302 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 84 | 119 | 105 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 80 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 128 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 39 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 315 | 17,748 | 5,854 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 280 | 54,612 | 44,565 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 176 | 13,443 | 13,110 | - |
| 1024_hosts | hosts | china | standard | 成功 | 238 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 108 | 567 | 553 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 105 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 105 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 516 | 134,443 | 134,414 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1696 | 221,620 | 221,352 | - |
| anti-AD | domains | china | full | 成功 | 354 | 110,928 | 110,718 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 309 | 19,063 | 2,098 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 52 | 13,990 | 11,692 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 485 | 146,604 | 146,124 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,951 | 99 | 62,852 | 1.36 MB |
| lite | overseas | `lite-overseas.txt` | 64,528 | 99 | 64,429 | 1.39 MB |
| lite | all | `lite-all.txt` | 64,577 | 99 | 64,478 | 1.39 MB |
| standard | china | `standard-china.txt` | 382,490 | 123 | 382,367 | 8.49 MB |
| standard | overseas | `standard-overseas.txt` | 391,913 | 122 | 391,791 | 8.68 MB |
| standard | all | `standard-all.txt` | 393,144 | 123 | 393,021 | 8.70 MB |
| full | china | `full-china.txt` | 527,740 | 123 | 527,617 | 11.60 MB |
| full | overseas | `full-overseas.txt` | 545,320 | 122 | 545,198 | 12.02 MB |
| full | all | `full-all.txt` | 554,152 | 123 | 554,029 | 12.18 MB |
