# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-06 21:21:54 - 2026-11-06 21:22:02 (耗时: 8.88s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,319,517
- 规范化有效规则: 1,280,987
- 误判排除规则: 1,420
- 白名单规则总数: 109
- 剪枝与去重数量: 762,292

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 111 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1255 | 60,898 | 60,786 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1262 | 3,579 | 3,555 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 105 | 219,335 | 218,976 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 46 | 16,383 | 16,306 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 57 | 18,983 | 18,969 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 160 | 76,606 | 76,575 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 30 | 1,547 | 1,533 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 41 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 160 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 109 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 60 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 110 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 110 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 110 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 157 | 190,202 | 189,285 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 109 | 84,577 | 77,711 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 446 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 281 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 110 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 110 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 171 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 117 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 43 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 110 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 35 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 163 | 17,870 | 6,012 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 171 | 54,373 | 44,657 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 268 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 117 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 125 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 115 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 115 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 480 | 195,369 | 195,321 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1783 | 232,458 | 232,176 | - |
| anti-AD | domains | china | full | 成功 | 766 | 110,047 | 109,846 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,909 | 92 | 60,817 | 1.31 MB |
| lite | overseas | `lite-overseas.txt` | 62,481 | 92 | 62,389 | 1.34 MB |
| lite | all | `lite-all.txt` | 62,529 | 92 | 62,437 | 1.34 MB |
| standard | china | `standard-china.txt` | 348,012 | 116 | 347,896 | 7.68 MB |
| standard | overseas | `standard-overseas.txt` | 368,767 | 115 | 368,652 | 8.11 MB |
| standard | all | `standard-all.txt` | 370,060 | 116 | 369,944 | 8.13 MB |
| full | china | `full-china.txt` | 476,470 | 116 | 476,354 | 10.25 MB |
| full | overseas | `full-overseas.txt` | 511,009 | 115 | 510,894 | 11.16 MB |
| full | all | `full-all.txt` | 518,695 | 116 | 518,579 | 11.29 MB |
