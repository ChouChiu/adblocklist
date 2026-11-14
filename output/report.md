# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-14 20:29:29 - 2026-11-14 20:29:38 (耗时: 9.21s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,319,669
- 规范化有效规则: 1,281,021
- 误判排除规则: 1,464
- 白名单规则总数: 109
- 剪枝与去重数量: 766,216

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 107 | 1,944 | 1,898 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1540 | 62,753 | 62,641 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1133 | 3,584 | 3,560 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 106 | 227,863 | 227,467 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 22 | 16,540 | 16,463 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 91 | 18,912 | 18,898 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 47 | 78,038 | 78,006 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 23 | 1,533 | 1,519 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 22 | 1,115 | 1,099 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 107 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 78 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 111 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 106 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 106 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 112 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 63 | 191,660 | 190,740 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 69 | 84,131 | 77,262 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 166 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 107 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 19 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 106 | 536 | 522 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 107 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 106 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 106 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 17 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 105 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 360 | 17,957 | 6,097 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 367 | 54,493 | 44,711 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 210 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 106 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 82 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 107 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 106 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 351 | 186,023 | 185,975 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1871 | 228,078 | 227,799 | - |
| anti-AD | domains | china | full | 成功 | 259 | 110,265 | 110,062 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,767 | 92 | 62,675 | 1.36 MB |
| lite | overseas | `lite-overseas.txt` | 64,340 | 92 | 64,248 | 1.38 MB |
| lite | all | `lite-all.txt` | 64,392 | 92 | 64,300 | 1.39 MB |
| standard | china | `standard-china.txt` | 350,638 | 116 | 350,522 | 7.77 MB |
| standard | overseas | `standard-overseas.txt` | 370,651 | 115 | 370,536 | 8.18 MB |
| standard | all | `standard-all.txt` | 371,915 | 116 | 371,799 | 8.20 MB |
| full | china | `full-china.txt` | 474,960 | 116 | 474,844 | 10.26 MB |
| full | overseas | `full-overseas.txt` | 507,135 | 115 | 507,020 | 11.10 MB |
| full | all | `full-all.txt` | 514,805 | 116 | 514,689 | 11.23 MB |
