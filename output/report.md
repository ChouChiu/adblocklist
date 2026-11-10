# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-10 12:16:55 - 2026-11-10 12:17:04 (耗时: 8.52s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,312,706
- 规范化有效规则: 1,274,078
- 误判排除规则: 1,453
- 白名单规则总数: 109
- 剪枝与去重数量: 758,656

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 98 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1196 | 60,677 | 60,565 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 807 | 3,580 | 3,556 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 73 | 223,976 | 223,581 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 22 | 16,439 | 16,362 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 25 | 18,853 | 18,839 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 44 | 78,193 | 78,161 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 73 | 1,531 | 1,517 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 20 | 1,113 | 1,097 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 98 | 363 | 342 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 98 | 160 | 136 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 54 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 26 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 73 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 16 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 169 | 188,480 | 187,562 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 54 | 85,034 | 78,168 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 306 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 109 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 30 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 98 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 98 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 36 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 33 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 73 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 26 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 210 | 17,917 | 6,059 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 178 | 54,465 | 44,685 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 431 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 99 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 98 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 18 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 98 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 98 | 187,030 | 186,982 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1545 | 228,480 | 228,200 | - |
| anti-AD | domains | china | full | 成功 | 369 | 110,675 | 110,474 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,689 | 92 | 60,597 | 1.31 MB |
| lite | overseas | `lite-overseas.txt` | 62,262 | 92 | 62,170 | 1.34 MB |
| lite | all | `lite-all.txt` | 62,311 | 92 | 62,219 | 1.34 MB |
| standard | china | `standard-china.txt` | 346,496 | 116 | 346,380 | 7.66 MB |
| standard | overseas | `standard-overseas.txt` | 367,399 | 115 | 367,284 | 8.09 MB |
| standard | all | `standard-all.txt` | 368,664 | 116 | 368,548 | 8.11 MB |
| full | china | `full-china.txt` | 474,353 | 116 | 474,237 | 10.22 MB |
| full | overseas | `full-overseas.txt` | 505,371 | 115 | 505,256 | 11.04 MB |
| full | all | `full-all.txt` | 515,422 | 116 | 515,306 | 11.22 MB |
