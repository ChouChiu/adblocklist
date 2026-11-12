# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-12 22:07:28 - 2026-11-12 22:07:36 (耗时: 7.63s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,313,691
- 规范化有效规则: 1,275,064
- 误判排除规则: 1,453
- 白名单规则总数: 109
- 剪枝与去重数量: 761,109

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 69 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1361 | 62,164 | 62,052 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1126 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 128 | 224,744 | 224,350 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 57 | 16,494 | 16,417 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 66 | 18,862 | 18,848 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 73 | 77,191 | 77,159 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 33 | 1,533 | 1,519 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 74 | 1,115 | 1,099 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 105 | 363 | 342 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 99 | 160 | 136 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 104 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 104 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 99 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 99 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 299 | 190,881 | 189,961 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 104 | 85,034 | 78,168 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 236 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 207 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 41 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 99 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 104 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 68 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 45 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 104 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 48 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 101 | 17,938 | 6,079 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 98 | 54,473 | 44,697 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 254 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 99 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 107 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 99 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 99 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 95 | 186,001 | 185,953 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1428 | 228,052 | 227,772 | - |
| anti-AD | domains | china | full | 成功 | 464 | 109,244 | 109,042 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,176 | 92 | 62,084 | 1.34 MB |
| lite | overseas | `lite-overseas.txt` | 63,751 | 92 | 63,659 | 1.37 MB |
| lite | all | `lite-all.txt` | 63,800 | 92 | 63,708 | 1.37 MB |
| standard | china | `standard-china.txt` | 347,862 | 116 | 347,746 | 7.70 MB |
| standard | overseas | `standard-overseas.txt` | 368,872 | 115 | 368,757 | 8.13 MB |
| standard | all | `standard-all.txt` | 370,137 | 116 | 370,021 | 8.15 MB |
| full | china | `full-china.txt` | 472,926 | 116 | 472,810 | 10.20 MB |
| full | overseas | `full-overseas.txt` | 506,040 | 115 | 505,925 | 11.07 MB |
| full | all | `full-all.txt` | 513,955 | 116 | 513,839 | 11.20 MB |
