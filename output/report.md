# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-14 11:16:15 - 2026-11-14 11:16:22 (耗时: 7.45s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,319,413
- 规范化有效规则: 1,280,770
- 误判排除规则: 1,459
- 白名单规则总数: 109
- 剪枝与去重数量: 766,208

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 8 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 986 | 62,648 | 62,536 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1247 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 79 | 227,863 | 227,467 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 28 | 16,540 | 16,463 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 33 | 18,912 | 18,898 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 58 | 78,038 | 78,006 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 21 | 1,533 | 1,519 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 39 | 1,115 | 1,099 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 86 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 86 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 86 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 86 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 86 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 57 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 108 | 191,509 | 190,589 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 89 | 84,131 | 77,262 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 289 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 86 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 25 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 86 | 536 | 522 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 86 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 86 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 86 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 86 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 86 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 203 | 17,957 | 6,097 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 201 | 54,492 | 44,710 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 351 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 27 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 86 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 86 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 23 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 86 | 186,023 | 185,975 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1246 | 228,070 | 227,790 | - |
| anti-AD | domains | china | full | 成功 | 137 | 110,265 | 110,062 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,660 | 92 | 62,568 | 1.35 MB |
| lite | overseas | `lite-overseas.txt` | 64,234 | 92 | 64,142 | 1.38 MB |
| lite | all | `lite-all.txt` | 64,283 | 92 | 64,191 | 1.38 MB |
| standard | china | `standard-china.txt` | 350,487 | 116 | 350,371 | 7.76 MB |
| standard | overseas | `standard-overseas.txt` | 370,502 | 115 | 370,387 | 8.18 MB |
| standard | all | `standard-all.txt` | 371,764 | 116 | 371,648 | 8.20 MB |
| full | china | `full-china.txt` | 474,808 | 116 | 474,692 | 10.25 MB |
| full | overseas | `full-overseas.txt` | 506,895 | 115 | 506,780 | 11.10 MB |
| full | all | `full-all.txt` | 514,562 | 116 | 514,446 | 11.23 MB |
