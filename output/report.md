# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-23 14:09:44 - 2026-11-23 14:09:54 (耗时: 9.43s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,486,086
- 规范化有效规则: 1,427,468
- 误判排除规则: 1,948
- 白名单规则总数: 116
- 剪枝与去重数量: 862,804

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 68 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 981 | 62,167 | 62,054 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 2904 | 3,577 | 3,553 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 66 | 236,214 | 235,815 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 34 | 16,494 | 16,417 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 31 | 10,392 | 10,378 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 40 | 69,804 | 69,772 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 67 | 1,510 | 1,496 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 67 | 1,288 | 1,272 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 80 | 425 | 404 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 67 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 34 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 67 | 475 | 461 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 25 | 409 | 338 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 67 | 394 | 380 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 80 | 190,961 | 190,041 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 55 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 296 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 309 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 67 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 103 | 546 | 532 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 67 | 316 | 302 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 70 | 119 | 105 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 67 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 67 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 23 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 322 | 17,728 | 5,833 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 307 | 54,605 | 44,564 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 335 | 13,443 | 13,110 | - |
| 1024_hosts | hosts | china | standard | 成功 | 26 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 67 | 567 | 553 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 47 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 67 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 328 | 191,176 | 191,125 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1246 | 220,240 | 219,972 | - |
| anti-AD | domains | china | full | 成功 | 730 | 110,928 | 110,718 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 420 | 19,084 | 2,098 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 33 | 13,990 | 11,692 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 518 | 146,213 | 145,735 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,182 | 99 | 62,083 | 1.34 MB |
| lite | overseas | `lite-overseas.txt` | 63,759 | 99 | 63,660 | 1.37 MB |
| lite | all | `lite-all.txt` | 63,808 | 99 | 63,709 | 1.37 MB |
| standard | china | `standard-china.txt` | 368,701 | 123 | 368,578 | 8.21 MB |
| standard | overseas | `standard-overseas.txt` | 379,223 | 122 | 379,101 | 8.43 MB |
| standard | all | `standard-all.txt` | 380,443 | 123 | 380,320 | 8.45 MB |
| full | china | `full-china.txt` | 541,871 | 123 | 541,748 | 11.88 MB |
| full | overseas | `full-overseas.txt` | 556,116 | 122 | 555,994 | 12.25 MB |
| full | all | `full-all.txt` | 564,664 | 123 | 564,541 | 12.39 MB |
