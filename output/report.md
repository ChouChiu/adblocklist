# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-03 11:42:48 - 2026-11-03 11:42:57 (耗时: 8.87s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,340,212
- 规范化有效规则: 1,301,512
- 误判排除规则: 1,534
- 白名单规则总数: 109
- 剪枝与去重数量: 786,659

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 6 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1027 | 59,974 | 59,862 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 606 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 70 | 247,772 | 247,304 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 38 | 16,594 | 16,517 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 71 | 17,543 | 17,529 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 171 | 77,694 | 77,663 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 21 | 1,547 | 1,533 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 21 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 71 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 70 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 70 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 72 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 15 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 19 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 103 | 188,242 | 187,327 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 37 | 84,577 | 77,711 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 284 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 72 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 39 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 72 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 71 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 71 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 23 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 70 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 72 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 290 | 17,905 | 5,974 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 289 | 54,357 | 44,656 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 260 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 74 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 70 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 72 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 41 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 352 | 191,473 | 191,426 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1092 | 232,269 | 231,982 | - |
| anti-AD | domains | china | full | 成功 | 138 | 109,392 | 109,190 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,985 | 92 | 59,893 | 1.29 MB |
| lite | overseas | `lite-overseas.txt` | 61,557 | 92 | 61,465 | 1.32 MB |
| lite | all | `lite-all.txt` | 61,605 | 92 | 61,513 | 1.32 MB |
| standard | china | `standard-china.txt` | 366,168 | 116 | 366,052 | 8.15 MB |
| standard | overseas | `standard-overseas.txt` | 385,978 | 115 | 385,863 | 8.56 MB |
| standard | all | `standard-all.txt` | 387,068 | 116 | 386,952 | 8.57 MB |
| full | china | `full-china.txt` | 497,826 | 116 | 497,710 | 10.80 MB |
| full | overseas | `full-overseas.txt` | 507,151 | 115 | 507,036 | 11.04 MB |
| full | all | `full-all.txt` | 514,853 | 116 | 514,737 | 11.17 MB |
