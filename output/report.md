# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-17 23:23:35 - 2026-11-17 23:23:45 (耗时: 9.95s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,506,182
- 规范化有效规则: 1,448,052
- 误判排除规则: 1,956
- 白名单规则总数: 116
- 剪枝与去重数量: 881,936

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 11 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1605 | 62,607 | 62,494 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1067 | 3,586 | 3,562 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 84 | 242,278 | 241,872 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 88 | 16,697 | 16,620 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 38 | 18,828 | 18,814 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 56 | 77,815 | 77,783 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 91 | 1,532 | 1,518 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 91 | 1,114 | 1,098 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 90 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 90 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 90 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 90 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 100 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 25 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 123 | 190,978 | 190,058 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 87 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 338 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 177 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 106 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 90 | 544 | 530 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 89 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 89 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 90 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 91 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 124 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 97 | 17,990 | 6,095 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 96 | 54,510 | 44,533 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 399 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 124 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 124 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 35 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 98 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 446 | 182,382 | 182,333 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 2075 | 229,080 | 228,801 | - |
| anti-AD | domains | china | full | 成功 | 530 | 109,451 | 109,246 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 579 | 18,598 | 2,048 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 106 | 13,991 | 11,693 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 605 | 145,061 | 144,584 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,621 | 99 | 62,522 | 1.35 MB |
| lite | overseas | `lite-overseas.txt` | 64,198 | 99 | 64,099 | 1.38 MB |
| lite | all | `lite-all.txt` | 64,246 | 99 | 64,147 | 1.38 MB |
| standard | china | `standard-china.txt` | 374,035 | 123 | 373,912 | 8.29 MB |
| standard | overseas | `standard-overseas.txt` | 393,705 | 122 | 393,583 | 8.69 MB |
| standard | all | `standard-all.txt` | 394,916 | 123 | 394,793 | 8.71 MB |
| full | china | `full-china.txt` | 538,554 | 123 | 538,431 | 11.78 MB |
| full | overseas | `full-overseas.txt` | 558,504 | 122 | 558,382 | 12.27 MB |
| full | all | `full-all.txt` | 566,116 | 123 | 565,993 | 12.40 MB |
