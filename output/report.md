# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-22 12:21:15 - 2026-11-22 12:21:25 (耗时: 10.11s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,559,505
- 规范化有效规则: 1,500,918
- 误判排除规则: 1,979
- 白名单规则总数: 116
- 剪枝与去重数量: 932,201

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 103 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1375 | 62,150 | 62,037 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 2953 | 3,575 | 3,551 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 135 | 284,014 | 283,583 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 178 | 16,742 | 16,665 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 61 | 10,847 | 10,833 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 99 | 73,232 | 73,200 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 74 | 1,531 | 1,517 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 35 | 1,436 | 1,420 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 74 | 425 | 404 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 103 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 86 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 103 | 475 | 461 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 35 | 409 | 338 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 46 | 394 | 380 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 113 | 192,369 | 191,449 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 85 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 627 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 86 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 77 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 117 | 546 | 532 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 114 | 316 | 302 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 114 | 119 | 105 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 36 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 139 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 35 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 246 | 17,718 | 5,823 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 152 | 54,585 | 44,555 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 692 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 120 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 86 | 567 | 553 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 88 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 31 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 380 | 207,529 | 207,478 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 2006 | 224,479 | 224,211 | - |
| anti-AD | domains | china | full | 成功 | 570 | 110,360 | 110,150 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 602 | 19,033 | 2,098 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 56 | 13,990 | 11,692 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 751 | 146,226 | 145,749 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,165 | 99 | 62,066 | 1.34 MB |
| lite | overseas | `lite-overseas.txt` | 63,741 | 99 | 63,642 | 1.37 MB |
| lite | all | `lite-all.txt` | 63,790 | 99 | 63,691 | 1.37 MB |
| standard | china | `standard-china.txt` | 411,736 | 123 | 411,613 | 9.08 MB |
| standard | overseas | `standard-overseas.txt` | 420,924 | 122 | 420,802 | 9.27 MB |
| standard | all | `standard-all.txt` | 422,126 | 123 | 422,003 | 9.29 MB |
| full | china | `full-china.txt` | 547,726 | 123 | 547,603 | 11.99 MB |
| full | overseas | `full-overseas.txt` | 560,999 | 122 | 560,877 | 12.34 MB |
| full | all | `full-all.txt` | 568,717 | 123 | 568,594 | 12.47 MB |
