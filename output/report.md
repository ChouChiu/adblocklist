# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-20 12:36:10 - 2026-11-20 12:36:21 (耗时: 11.41s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,523,757
- 规范化有效规则: 1,465,288
- 误判排除规则: 1,984
- 白名单规则总数: 116
- 剪枝与去重数量: 890,154

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 106 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1552 | 61,800 | 61,687 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1018 | 3,575 | 3,551 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 70 | 243,753 | 243,334 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 125 | 16,631 | 16,554 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 33 | 10,742 | 10,728 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 32 | 72,634 | 72,602 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 33 | 1,530 | 1,516 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 115 | 1,160 | 1,144 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 111 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 104 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 121 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 116 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 116 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 107 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 285 | 191,942 | 191,022 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 41 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 182 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 285 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 102 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 131 | 544 | 530 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 127 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 107 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 367 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 17 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 15 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 185 | 18,012 | 6,117 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 124 | 54,573 | 44,551 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 110 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 115 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 98 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 104 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 305 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 703 | 210,427 | 210,375 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 2048 | 227,156 | 226,874 | - |
| anti-AD | domains | china | full | 成功 | 312 | 110,360 | 110,150 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 553 | 18,896 | 2,076 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 78 | 13,991 | 11,693 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 407 | 146,891 | 146,414 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 61,814 | 99 | 61,715 | 1.33 MB |
| lite | overseas | `lite-overseas.txt` | 63,391 | 99 | 63,292 | 1.36 MB |
| lite | all | `lite-all.txt` | 63,439 | 99 | 63,340 | 1.36 MB |
| standard | china | `standard-china.txt` | 373,780 | 123 | 373,657 | 8.31 MB |
| standard | overseas | `standard-overseas.txt` | 382,874 | 122 | 382,752 | 8.50 MB |
| standard | all | `standard-all.txt` | 384,087 | 123 | 383,964 | 8.52 MB |
| full | china | `full-china.txt` | 553,571 | 123 | 553,448 | 12.11 MB |
| full | overseas | `full-overseas.txt` | 567,524 | 122 | 567,402 | 12.48 MB |
| full | all | `full-all.txt` | 575,134 | 123 | 575,011 | 12.61 MB |
