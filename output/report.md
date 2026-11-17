# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-17 12:51:15 - 2026-11-17 12:51:22 (耗时: 7.60s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,327,561
- 规范化有效规则: 1,288,888
- 误判排除规则: 1,479
- 白名单规则总数: 109
- 剪枝与去重数量: 763,171

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 94 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1403 | 62,466 | 62,353 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 839 | 3,586 | 3,562 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 169 | 242,278 | 241,872 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 41 | 16,697 | 16,620 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 114 | 18,828 | 18,814 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 93 | 77,815 | 77,783 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 80 | 1,532 | 1,518 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 39 | 1,114 | 1,098 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 86 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 85 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 84 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 94 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 57 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 79 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 125 | 190,814 | 189,894 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 62 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 348 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 200 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 32 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 94 | 544 | 530 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 94 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 98 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 33 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 94 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 126 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 274 | 17,987 | 6,127 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 183 | 54,510 | 44,716 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 139 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 114 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 55 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 93 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 81 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 558 | 182,382 | 182,333 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1463 | 228,417 | 228,137 | - |
| anti-AD | domains | china | full | 成功 | 299 | 109,451 | 109,246 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,475 | 92 | 62,383 | 1.35 MB |
| lite | overseas | `lite-overseas.txt` | 64,053 | 92 | 63,961 | 1.38 MB |
| lite | all | `lite-all.txt` | 64,101 | 92 | 64,009 | 1.38 MB |
| standard | china | `standard-china.txt` | 364,228 | 116 | 364,112 | 8.08 MB |
| standard | overseas | `standard-overseas.txt` | 383,906 | 115 | 383,791 | 8.49 MB |
| standard | all | `standard-all.txt` | 385,139 | 116 | 385,023 | 8.51 MB |
| full | china | `full-china.txt` | 484,650 | 116 | 484,534 | 10.49 MB |
| full | overseas | `full-overseas.txt` | 518,084 | 115 | 517,969 | 11.37 MB |
| full | all | `full-all.txt` | 525,717 | 116 | 525,601 | 11.50 MB |
