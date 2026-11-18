# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-18 22:52:20 - 2026-11-18 22:52:32 (耗时: 12.44s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,535,640
- 规范化有效规则: 1,477,439
- 误判排除规则: 1,960
- 白名单规则总数: 116
- 剪枝与去重数量: 903,513

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 119 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1123 | 62,870 | 62,757 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 2455 | 3,588 | 3,564 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 76 | 252,782 | 252,376 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 28 | 16,646 | 16,569 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 78 | 18,821 | 18,807 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 89 | 88,370 | 88,338 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 76 | 1,530 | 1,516 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 23 | 1,184 | 1,168 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 96 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 78 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 76 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 18 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 78 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 76 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 153 | 191,356 | 190,436 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 40 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 154 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 76 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 18 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 78 | 544 | 530 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 78 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 76 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 92 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 92 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 28 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 90 | 17,998 | 6,103 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 93 | 54,546 | 44,540 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 245 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 91 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 118 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 77 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 75 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 423 | 189,488 | 189,437 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1475 | 229,619 | 229,339 | - |
| anti-AD | domains | china | full | 成功 | 463 | 109,451 | 109,246 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 322 | 18,631 | 2,042 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 32 | 13,991 | 11,693 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 519 | 145,085 | 144,608 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,884 | 99 | 62,785 | 1.36 MB |
| lite | overseas | `lite-overseas.txt` | 64,462 | 99 | 64,363 | 1.39 MB |
| lite | all | `lite-all.txt` | 64,510 | 99 | 64,411 | 1.39 MB |
| standard | china | `standard-china.txt` | 383,110 | 123 | 382,987 | 8.46 MB |
| standard | overseas | `standard-overseas.txt` | 402,945 | 122 | 402,823 | 8.87 MB |
| standard | all | `standard-all.txt` | 404,150 | 123 | 404,027 | 8.89 MB |
| full | china | `full-china.txt` | 546,388 | 123 | 546,265 | 11.93 MB |
| full | overseas | `full-overseas.txt` | 566,323 | 122 | 566,201 | 12.42 MB |
| full | all | `full-all.txt` | 573,926 | 123 | 573,803 | 12.55 MB |
