# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-04 11:55:14 - 2026-11-04 11:55:23 (耗时: 9.66s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,340,640
- 规范化有效规则: 1,301,935
- 误判排除规则: 1,531
- 白名单规则总数: 109
- 剪枝与去重数量: 786,242

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 107 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1537 | 60,138 | 60,026 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 963 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 92 | 247,772 | 247,304 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 105 | 16,594 | 16,517 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 104 | 17,543 | 17,529 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 57 | 77,694 | 77,663 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 106 | 1,547 | 1,533 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 106 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 106 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 106 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 106 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 106 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 105 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 106 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 103 | 188,455 | 187,540 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 53 | 84,577 | 77,711 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 301 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 242 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 105 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 106 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 106 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 106 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 105 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 125 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 15 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 1690 | 17,917 | 5,986 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 71 | 54,366 | 44,657 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 458 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 105 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 104 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 110 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 104 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 347 | 191,473 | 191,426 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1953 | 232,299 | 232,015 | - |
| anti-AD | domains | china | full | 成功 | 124 | 109,392 | 109,190 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,149 | 92 | 60,057 | 1.30 MB |
| lite | overseas | `lite-overseas.txt` | 61,721 | 92 | 61,629 | 1.32 MB |
| lite | all | `lite-all.txt` | 61,769 | 92 | 61,677 | 1.33 MB |
| standard | china | `standard-china.txt` | 366,374 | 116 | 366,258 | 8.16 MB |
| standard | overseas | `standard-overseas.txt` | 386,184 | 115 | 386,069 | 8.56 MB |
| standard | all | `standard-all.txt` | 387,274 | 116 | 387,158 | 8.58 MB |
| full | china | `full-china.txt` | 498,033 | 116 | 497,917 | 10.80 MB |
| full | overseas | `full-overseas.txt` | 507,992 | 115 | 507,877 | 11.06 MB |
| full | all | `full-all.txt` | 515,693 | 116 | 515,577 | 11.19 MB |
