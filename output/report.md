# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-11 11:43:18 - 2026-11-11 11:43:26 (耗时: 7.46s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,307,777
- 规范化有效规则: 1,269,148
- 误判排除规则: 1,451
- 白名单规则总数: 109
- 剪枝与去重数量: 756,784

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 218 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1200 | 60,326 | 60,214 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 782 | 3,581 | 3,557 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 139 | 223,993 | 223,599 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 43 | 16,433 | 16,356 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 61 | 18,860 | 18,846 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 104 | 76,797 | 76,765 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 46 | 1,533 | 1,519 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 33 | 1,115 | 1,099 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 39 | 363 | 342 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 38 | 160 | 136 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 83 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 81 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 87 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 79 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 117 | 190,310 | 189,391 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 70 | 85,034 | 78,168 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 374 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 71 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 37 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 139 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 139 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 175 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 32 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 218 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 168 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 71 | 17,928 | 6,070 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 79 | 54,466 | 44,684 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 293 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 48 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 36 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 36 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 96 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 125 | 185,670 | 185,622 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1586 | 226,224 | 225,946 | - |
| anti-AD | domains | china | full | 成功 | 476 | 109,244 | 109,042 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,338 | 92 | 60,246 | 1.30 MB |
| lite | overseas | `lite-overseas.txt` | 61,912 | 92 | 61,820 | 1.33 MB |
| lite | all | `lite-all.txt` | 61,961 | 92 | 61,869 | 1.33 MB |
| standard | china | `standard-china.txt` | 347,073 | 116 | 346,957 | 7.68 MB |
| standard | overseas | `standard-overseas.txt` | 367,959 | 115 | 367,844 | 8.11 MB |
| standard | all | `standard-all.txt` | 369,227 | 116 | 369,111 | 8.13 MB |
| full | china | `full-china.txt` | 471,780 | 116 | 471,664 | 10.17 MB |
| full | overseas | `full-overseas.txt` | 504,680 | 115 | 504,565 | 11.04 MB |
| full | all | `full-all.txt` | 512,364 | 116 | 512,248 | 11.17 MB |
