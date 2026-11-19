# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-19 12:36:22 - 2026-11-19 12:36:34 (耗时: 11.49s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,511,836
- 规范化有效规则: 1,453,512
- 误判排除规则: 1,965
- 白名单规则总数: 116
- 剪枝与去重数量: 878,954

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 100 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1174 | 63,007 | 62,894 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 2211 | 3,588 | 3,564 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 80 | 229,638 | 229,232 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 101 | 16,630 | 16,553 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 30 | 10,748 | 10,734 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 85 | 72,388 | 72,356 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 24 | 1,530 | 1,516 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 19 | 1,158 | 1,142 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 18 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 30 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 18 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 102 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 32 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 100 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 99 | 191,579 | 190,659 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 43 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 177 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 57 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 11 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 17 | 544 | 530 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 32 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 19 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 85 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 101 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 17 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 100 | 18,004 | 6,109 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 114 | 54,558 | 44,545 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 143 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 101 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 30 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 101 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 85 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 361 | 209,049 | 208,997 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1584 | 231,594 | 231,312 | - |
| anti-AD | domains | china | full | 成功 | 256 | 109,451 | 109,246 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 388 | 18,757 | 2,055 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 45 | 13,991 | 11,693 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 518 | 146,482 | 146,005 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 63,021 | 99 | 62,922 | 1.36 MB |
| lite | overseas | `lite-overseas.txt` | 64,600 | 99 | 64,501 | 1.39 MB |
| lite | all | `lite-all.txt` | 64,648 | 99 | 64,549 | 1.39 MB |
| standard | china | `standard-china.txt` | 361,999 | 123 | 361,876 | 8.07 MB |
| standard | overseas | `standard-overseas.txt` | 382,236 | 122 | 382,114 | 8.48 MB |
| standard | all | `standard-all.txt` | 383,448 | 123 | 383,325 | 8.50 MB |
| full | china | `full-china.txt` | 547,786 | 123 | 547,663 | 12.01 MB |
| full | overseas | `full-overseas.txt` | 566,973 | 122 | 566,851 | 12.48 MB |
| full | all | `full-all.txt` | 574,558 | 123 | 574,435 | 12.61 MB |
