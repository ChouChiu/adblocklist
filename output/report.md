# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-11 22:31:54 - 2026-11-11 22:32:03 (耗时: 9.37s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,308,434
- 规范化有效规则: 1,269,803
- 误判排除规则: 1,451
- 白名单规则总数: 109
- 剪枝与去重数量: 757,055

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 97 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1504 | 60,441 | 60,329 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1126 | 3,582 | 3,558 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 73 | 223,975 | 223,581 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 30 | 16,442 | 16,365 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 88 | 18,850 | 18,836 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 301 | 76,914 | 76,882 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 95 | 1,533 | 1,519 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 77 | 1,115 | 1,099 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 75 | 363 | 342 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 96 | 160 | 136 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 79 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 115 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 106 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 79 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 230 | 190,512 | 189,592 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 51 | 85,034 | 78,168 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 231 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 72 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 22 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 104 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 108 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 78 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 82 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 94 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 115 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 99 | 17,930 | 6,071 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 94 | 54,466 | 44,684 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 239 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 72 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 139 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 94 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 94 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 401 | 185,724 | 185,676 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1862 | 226,290 | 226,012 | - |
| anti-AD | domains | china | full | 成功 | 416 | 109,244 | 109,042 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,453 | 92 | 60,361 | 1.30 MB |
| lite | overseas | `lite-overseas.txt` | 62,028 | 92 | 61,936 | 1.33 MB |
| lite | all | `lite-all.txt` | 62,077 | 92 | 61,985 | 1.33 MB |
| standard | china | `standard-china.txt` | 347,264 | 116 | 347,148 | 7.68 MB |
| standard | overseas | `standard-overseas.txt` | 368,259 | 115 | 368,144 | 8.12 MB |
| standard | all | `standard-all.txt` | 369,525 | 116 | 369,409 | 8.14 MB |
| full | china | `full-china.txt` | 471,999 | 116 | 471,883 | 10.18 MB |
| full | overseas | `full-overseas.txt` | 505,064 | 115 | 504,949 | 11.05 MB |
| full | all | `full-all.txt` | 512,748 | 116 | 512,632 | 11.17 MB |
