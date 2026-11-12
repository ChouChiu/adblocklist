# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-12 12:19:06 - 2026-11-12 12:19:14 (耗时: 8.53s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,313,141
- 规范化有效规则: 1,274,514
- 误判排除规则: 1,452
- 白名单规则总数: 109
- 剪枝与去重数量: 760,918

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 79 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1002 | 62,040 | 61,928 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 857 | 3,582 | 3,558 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 75 | 224,744 | 224,350 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 25 | 16,494 | 16,417 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 26 | 18,862 | 18,848 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 40 | 77,191 | 77,159 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 28 | 1,533 | 1,519 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 79 | 1,115 | 1,099 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 79 | 363 | 342 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 79 | 160 | 136 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 11 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 18 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 79 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 18 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 113 | 190,749 | 189,829 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 78 | 85,034 | 78,168 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 143 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 79 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 17 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 79 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 79 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 79 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 16 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 79 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 15 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 83 | 17,936 | 6,077 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 89 | 54,474 | 44,697 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 178 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 77 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 77 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 20 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 20 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 350 | 186,001 | 185,953 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1133 | 227,760 | 227,481 | - |
| anti-AD | domains | china | full | 成功 | 289 | 109,244 | 109,042 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,052 | 92 | 61,960 | 1.34 MB |
| lite | overseas | `lite-overseas.txt` | 63,626 | 92 | 63,534 | 1.37 MB |
| lite | all | `lite-all.txt` | 63,675 | 92 | 63,583 | 1.37 MB |
| standard | china | `standard-china.txt` | 347,732 | 116 | 347,616 | 7.69 MB |
| standard | overseas | `standard-overseas.txt` | 368,742 | 115 | 368,627 | 8.13 MB |
| standard | all | `standard-all.txt` | 370,007 | 116 | 369,891 | 8.15 MB |
| full | china | `full-china.txt` | 472,796 | 116 | 472,680 | 10.20 MB |
| full | overseas | `full-overseas.txt` | 505,681 | 115 | 505,566 | 11.06 MB |
| full | all | `full-all.txt` | 513,596 | 116 | 513,480 | 11.19 MB |
