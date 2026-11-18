# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-18 12:44:32 - 2026-11-18 12:44:41 (耗时: 8.83s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,535,056
- 规范化有效规则: 1,476,856
- 误判排除规则: 1,959
- 白名单规则总数: 116
- 剪枝与去重数量: 902,883

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 10 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1960 | 62,747 | 62,634 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 903 | 3,588 | 3,564 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 134 | 252,591 | 252,185 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 108 | 16,651 | 16,574 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 38 | 18,817 | 18,803 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 63 | 88,285 | 88,253 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 92 | 1,530 | 1,516 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 79 | 1,129 | 1,113 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 92 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 92 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 92 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 104 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 134 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 108 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 92 | 191,205 | 190,285 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 58 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 372 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 149 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 26 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 92 | 544 | 530 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 134 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 110 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 110 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 116 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 27 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 76 | 17,996 | 6,101 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 72 | 54,546 | 44,540 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 102 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 113 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 29 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 116 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 110 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 371 | 189,388 | 189,338 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 2165 | 229,509 | 229,229 | - |
| anti-AD | domains | china | full | 成功 | 537 | 109,451 | 109,246 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 518 | 18,631 | 2,042 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 41 | 13,991 | 11,693 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 180 | 145,317 | 144,840 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,761 | 99 | 62,662 | 1.36 MB |
| lite | overseas | `lite-overseas.txt` | 64,339 | 99 | 64,240 | 1.38 MB |
| lite | all | `lite-all.txt` | 64,387 | 99 | 64,288 | 1.38 MB |
| standard | china | `standard-china.txt` | 382,872 | 123 | 382,749 | 8.45 MB |
| standard | overseas | `standard-overseas.txt` | 402,711 | 122 | 402,589 | 8.86 MB |
| standard | all | `standard-all.txt` | 403,915 | 123 | 403,792 | 8.88 MB |
| full | china | `full-china.txt` | 546,166 | 123 | 546,043 | 11.93 MB |
| full | overseas | `full-overseas.txt` | 566,373 | 122 | 566,251 | 12.43 MB |
| full | all | `full-all.txt` | 573,973 | 123 | 573,850 | 12.56 MB |
