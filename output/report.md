# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-10 21:41:27 - 2026-11-10 21:41:36 (耗时: 8.64s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,310,098
- 规范化有效规则: 1,271,467
- 误判排除规则: 1,453
- 白名单规则总数: 109
- 剪枝与去重数量: 756,001

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 129 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1654 | 60,142 | 60,030 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 935 | 3,580 | 3,556 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 129 | 223,976 | 223,581 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 91 | 16,439 | 16,362 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 89 | 18,853 | 18,839 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 230 | 78,193 | 78,161 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 102 | 1,531 | 1,517 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 130 | 1,113 | 1,097 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 90 | 363 | 342 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 80 | 160 | 136 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 24 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 24 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 84 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 92 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 78 | 188,654 | 187,735 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 41 | 85,034 | 78,168 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 215 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 109 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 85 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 86 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 80 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 130 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 22 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 79 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 26 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 1007 | 17,918 | 6,060 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 56 | 54,466 | 44,684 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 270 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 107 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 77 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 98 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 99 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 433 | 187,030 | 186,982 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1775 | 226,231 | 225,951 | - |
| anti-AD | domains | china | full | 成功 | 151 | 110,675 | 110,474 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,154 | 92 | 60,062 | 1.30 MB |
| lite | overseas | `lite-overseas.txt` | 61,727 | 92 | 61,635 | 1.33 MB |
| lite | all | `lite-all.txt` | 61,776 | 92 | 61,684 | 1.33 MB |
| standard | china | `standard-china.txt` | 346,666 | 116 | 346,550 | 7.66 MB |
| standard | overseas | `standard-overseas.txt` | 367,571 | 115 | 367,456 | 8.10 MB |
| standard | all | `standard-all.txt` | 368,834 | 116 | 368,718 | 8.12 MB |
| full | china | `full-china.txt` | 474,523 | 116 | 474,407 | 10.23 MB |
| full | overseas | `full-overseas.txt` | 505,413 | 115 | 505,298 | 11.04 MB |
| full | all | `full-all.txt` | 515,466 | 116 | 515,350 | 11.23 MB |
