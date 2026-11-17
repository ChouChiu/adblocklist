# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-17 12:55:36 - 2026-11-17 12:55:46 (耗时: 9.98s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,504,732
- 规范化有效规则: 1,446,601
- 误判排除规则: 1,957
- 白名单规则总数: 116
- 剪枝与去重数量: 881,536

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 94 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1496 | 62,466 | 62,353 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 924 | 3,586 | 3,562 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 86 | 242,278 | 241,872 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 29 | 16,697 | 16,620 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 96 | 18,828 | 18,814 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 190 | 77,815 | 77,783 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 21 | 1,532 | 1,518 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 96 | 1,114 | 1,098 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 97 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 105 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 97 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 97 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 96 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 97 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 94 | 190,814 | 189,894 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 50 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 186 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 192 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 96 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 144 | 544 | 530 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 124 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 96 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 105 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 149 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 95 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 132 | 17,987 | 6,092 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 109 | 54,510 | 44,533 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 258 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 95 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 95 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 96 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 96 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 339 | 182,382 | 182,333 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1852 | 228,417 | 228,137 | - |
| anti-AD | domains | china | full | 成功 | 310 | 109,451 | 109,246 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 730 | 18,598 | 2,048 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 32 | 13,991 | 11,693 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 345 | 144,582 | 144,105 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,480 | 99 | 62,381 | 1.35 MB |
| lite | overseas | `lite-overseas.txt` | 64,057 | 99 | 63,958 | 1.38 MB |
| lite | all | `lite-all.txt` | 64,105 | 99 | 64,006 | 1.38 MB |
| standard | china | `standard-china.txt` | 373,871 | 123 | 373,748 | 8.28 MB |
| standard | overseas | `standard-overseas.txt` | 393,543 | 122 | 393,421 | 8.69 MB |
| standard | all | `standard-all.txt` | 394,752 | 123 | 394,629 | 8.71 MB |
| full | china | `full-china.txt` | 537,235 | 123 | 537,112 | 11.75 MB |
| full | overseas | `full-overseas.txt` | 557,456 | 122 | 557,334 | 12.25 MB |
| full | all | `full-all.txt` | 565,065 | 123 | 564,942 | 12.38 MB |
