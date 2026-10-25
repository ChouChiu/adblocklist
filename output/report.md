# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-25 18:46:46 - 2026-10-25 18:46:56 (耗时: 9.71s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,291,945
- 规范化有效规则: 1,252,535
- 误判排除规则: 2,251
- 白名单规则总数: 109
- 剪枝与去重数量: 732,404

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 133 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1676 | 58,788 | 58,676 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1099 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 81 | 208,311 | 207,973 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 34 | 16,300 | 16,223 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 35 | 17,609 | 17,595 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 46 | 47,829 | 47,812 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 26 | 1,555 | 1,541 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 137 | 1,105 | 1,089 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 116 | 359 | 338 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 127 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 103 | 214 | 200 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 109 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 169 | 397 | 325 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 124 | 382 | 368 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 102 | 191,924 | 191,009 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 61 | 78,318 | 70,567 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 403 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 362 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 28 | 85 | 14 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 122 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 116 | 258 | 244 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 142 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 26 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 133 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 34 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 373 | 17,813 | 5,888 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 362 | 54,344 | 44,649 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 591 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 168 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 139 | 451 | 437 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 136 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 119 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 168 | 212,436 | 212,395 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 2357 | 233,877 | 233,594 | - |
| anti-AD | domains | china | full | 成功 | 664 | 112,083 | 111,888 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 58,799 | 92 | 58,707 | 1.26 MB |
| lite | overseas | `lite-overseas.txt` | 60,372 | 92 | 60,280 | 1.29 MB |
| lite | all | `lite-all.txt` | 60,420 | 92 | 60,328 | 1.29 MB |
| standard | china | `standard-china.txt` | 340,672 | 116 | 340,556 | 7.44 MB |
| standard | overseas | `standard-overseas.txt` | 361,480 | 115 | 361,365 | 7.87 MB |
| standard | all | `standard-all.txt` | 362,722 | 116 | 362,606 | 7.89 MB |
| full | china | `full-china.txt` | 476,637 | 116 | 476,521 | 10.17 MB |
| full | overseas | `full-overseas.txt` | 512,422 | 115 | 512,307 | 11.13 MB |
| full | all | `full-all.txt` | 520,131 | 116 | 520,015 | 11.26 MB |
