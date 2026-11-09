# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-09 23:59:30 - 2026-11-09 23:59:38 (耗时: 8.17s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,316,552
- 规范化有效规则: 1,277,924
- 误判排除规则: 1,453
- 白名单规则总数: 109
- 剪枝与去重数量: 761,166

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 70 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1234 | 61,685 | 61,573 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 717 | 3,580 | 3,556 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 112 | 223,343 | 222,949 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 49 | 16,435 | 16,358 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 57 | 18,846 | 18,832 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 123 | 78,139 | 78,107 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 49 | 1,531 | 1,517 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 32 | 1,113 | 1,097 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 96 | 363 | 342 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 123 | 160 | 136 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 84 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 46 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 97 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 57 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 121 | 188,274 | 187,356 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 68 | 85,034 | 78,168 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 329 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 188 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 31 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 94 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 123 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 96 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 32 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 40 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 34 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 194 | 17,911 | 6,053 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 201 | 54,465 | 44,685 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 179 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 94 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 123 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 81 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 124 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 405 | 187,041 | 186,993 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1475 | 232,217 | 231,936 | - |
| anti-AD | domains | china | full | 成功 | 421 | 110,675 | 110,474 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 61,696 | 92 | 61,604 | 1.33 MB |
| lite | overseas | `lite-overseas.txt` | 63,269 | 92 | 63,177 | 1.36 MB |
| lite | all | `lite-all.txt` | 63,317 | 92 | 63,225 | 1.36 MB |
| standard | china | `standard-china.txt` | 346,842 | 116 | 346,726 | 7.67 MB |
| standard | overseas | `standard-overseas.txt` | 367,721 | 115 | 367,606 | 8.10 MB |
| standard | all | `standard-all.txt` | 368,994 | 116 | 368,878 | 8.12 MB |
| full | china | `full-china.txt` | 474,137 | 116 | 474,021 | 10.22 MB |
| full | overseas | `full-overseas.txt` | 507,537 | 115 | 507,422 | 11.09 MB |
| full | all | `full-all.txt` | 516,758 | 116 | 516,642 | 11.25 MB |
