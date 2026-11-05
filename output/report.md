# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-05 21:49:37 - 2026-11-05 21:49:45 (耗时: 8.09s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,314,689
- 规范化有效规则: 1,276,070
- 误判排除规则: 1,440
- 白名单规则总数: 109
- 剪枝与去重数量: 755,980

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 113 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1645 | 60,663 | 60,551 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1308 | 3,584 | 3,560 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 69 | 214,655 | 214,276 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 29 | 16,463 | 16,386 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 27 | 18,955 | 18,941 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 48 | 77,413 | 77,382 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 101 | 1,547 | 1,533 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 113 | 1,084 | 1,068 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 138 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 108 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 86 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 107 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 107 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 101 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 136 | 189,880 | 188,962 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 73 | 84,577 | 77,711 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 189 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 149 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 97 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 115 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 147 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 136 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 23 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 137 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 136 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 74 | 17,931 | 6,002 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 97 | 54,372 | 44,659 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 299 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 155 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 107 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 107 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 136 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 428 | 194,852 | 194,805 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1904 | 232,466 | 232,183 | - |
| anti-AD | domains | china | full | 成功 | 355 | 110,047 | 109,846 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,674 | 92 | 60,582 | 1.31 MB |
| lite | overseas | `lite-overseas.txt` | 62,246 | 92 | 62,154 | 1.34 MB |
| lite | all | `lite-all.txt` | 62,294 | 92 | 62,202 | 1.34 MB |
| standard | china | `standard-china.txt` | 347,962 | 116 | 347,846 | 7.69 MB |
| standard | overseas | `standard-overseas.txt` | 369,804 | 115 | 369,689 | 8.14 MB |
| standard | all | `standard-all.txt` | 371,070 | 116 | 370,954 | 8.16 MB |
| full | china | `full-china.txt` | 477,858 | 116 | 477,742 | 10.29 MB |
| full | overseas | `full-overseas.txt` | 512,407 | 115 | 512,292 | 11.19 MB |
| full | all | `full-all.txt` | 520,090 | 116 | 519,974 | 11.32 MB |
