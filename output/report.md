# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-05 11:58:11 - 2026-11-05 11:58:20 (耗时: 8.85s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,321,132
- 规范化有效规则: 1,282,513
- 误判排除规则: 1,440
- 白名单规则总数: 109
- 剪枝与去重数量: 763,435

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 121 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1645 | 60,364 | 60,252 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1320 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 393 | 222,467 | 222,088 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 178 | 16,464 | 16,387 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 108 | 19,195 | 19,181 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 45 | 77,409 | 77,378 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 84 | 1,547 | 1,533 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 127 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 120 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 131 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 72 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 181 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 120 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 123 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 120 | 188,700 | 187,785 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 50 | 84,577 | 77,711 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 483 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 152 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 86 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 70 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 138 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 142 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 23 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 88 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 24 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 195 | 17,929 | 5,998 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 220 | 54,373 | 44,659 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 373 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 147 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 75 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 108 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 126 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 346 | 194,875 | 194,828 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1725 | 232,312 | 232,029 | - |
| anti-AD | domains | china | full | 成功 | 473 | 110,047 | 109,846 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,375 | 92 | 60,283 | 1.30 MB |
| lite | overseas | `lite-overseas.txt` | 61,947 | 92 | 61,855 | 1.33 MB |
| lite | all | `lite-all.txt` | 61,995 | 92 | 61,903 | 1.33 MB |
| standard | china | `standard-china.txt` | 347,175 | 116 | 347,059 | 7.67 MB |
| standard | overseas | `standard-overseas.txt` | 368,989 | 115 | 368,874 | 8.12 MB |
| standard | all | `standard-all.txt` | 370,255 | 116 | 370,139 | 8.14 MB |
| full | china | `full-china.txt` | 476,992 | 116 | 476,876 | 10.27 MB |
| full | overseas | `full-overseas.txt` | 511,395 | 115 | 511,280 | 11.17 MB |
| full | all | `full-all.txt` | 519,078 | 116 | 518,962 | 11.29 MB |
