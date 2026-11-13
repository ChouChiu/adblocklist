# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-13 11:56:52 - 2026-11-13 11:57:00 (耗时: 8.26s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,315,274
- 规范化有效规则: 1,276,647
- 误判排除规则: 1,452
- 白名单规则总数: 109
- 剪枝与去重数量: 762,421

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 113 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1631 | 62,348 | 62,236 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1094 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 43 | 225,627 | 225,233 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 90 | 16,521 | 16,444 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 127 | 18,867 | 18,853 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 134 | 77,576 | 77,544 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 110 | 1,533 | 1,519 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 89 | 1,111 | 1,095 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 107 | 416 | 395 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 110 | 160 | 136 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 89 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 103 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 107 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 303 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 89 | 191,130 | 190,210 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 24 | 85,034 | 78,168 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 181 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 127 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 311 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 89 | 505 | 491 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 127 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 103 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 125 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 108 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 89 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 294 | 17,945 | 6,086 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 274 | 54,474 | 44,697 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 272 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 127 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 114 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 103 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 105 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 550 | 186,019 | 185,971 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1896 | 227,825 | 227,546 | - |
| anti-AD | domains | china | full | 成功 | 426 | 109,244 | 109,042 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,360 | 92 | 62,268 | 1.35 MB |
| lite | overseas | `lite-overseas.txt` | 63,935 | 92 | 63,843 | 1.38 MB |
| lite | all | `lite-all.txt` | 63,984 | 92 | 63,892 | 1.38 MB |
| standard | china | `standard-china.txt` | 348,631 | 116 | 348,515 | 7.71 MB |
| standard | overseas | `standard-overseas.txt` | 369,678 | 115 | 369,563 | 8.15 MB |
| standard | all | `standard-all.txt` | 370,942 | 116 | 370,826 | 8.17 MB |
| full | china | `full-china.txt` | 473,462 | 116 | 473,346 | 10.21 MB |
| full | overseas | `full-overseas.txt` | 506,309 | 115 | 506,194 | 11.08 MB |
| full | all | `full-all.txt` | 514,226 | 116 | 514,110 | 11.21 MB |
