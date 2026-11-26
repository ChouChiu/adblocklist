# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-26 13:38:00 - 2026-11-26 13:38:07 (耗时: 7.87s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,472,336
- 规范化有效规则: 1,413,675
- 误判排除规则: 1,950
- 白名单规则总数: 116
- 剪枝与去重数量: 860,052

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 16 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1249 | 63,167 | 63,054 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 955 | 3,579 | 3,555 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 114 | 236,231 | 235,836 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 60 | 16,519 | 16,442 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 70 | 10,722 | 10,708 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 65 | 70,402 | 70,370 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 34 | 1,954 | 1,940 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 34 | 1,285 | 1,269 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 94 | 425 | 404 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 80 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 79 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 116 | 475 | 461 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 94 | 409 | 338 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 94 | 394 | 380 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 264 | 195,191 | 194,272 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 116 | 88,496 | 81,629 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 209 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 332 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 39 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 81 | 546 | 532 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 94 | 316 | 302 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 94 | 119 | 105 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 44 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 40 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 69 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 408 | 17,759 | 5,865 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 277 | 54,637 | 44,569 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 94 | 13,444 | 13,111 | - |
| 1024_hosts | hosts | china | standard | 成功 | 176 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 160 | 567 | 553 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 97 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 120 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 435 | 163,699 | 163,644 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1555 | 222,026 | 221,758 | - |
| anti-AD | domains | china | full | 成功 | 475 | 110,219 | 110,011 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 310 | 19,119 | 2,115 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 50 | 13,990 | 11,692 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 342 | 146,549 | 146,069 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 63,182 | 99 | 63,083 | 1.37 MB |
| lite | overseas | `lite-overseas.txt` | 64,760 | 99 | 64,661 | 1.39 MB |
| lite | all | `lite-all.txt` | 64,809 | 99 | 64,710 | 1.40 MB |
| standard | china | `standard-china.txt` | 373,592 | 123 | 373,469 | 8.32 MB |
| standard | overseas | `standard-overseas.txt` | 383,323 | 122 | 383,201 | 8.52 MB |
| standard | all | `standard-all.txt` | 384,568 | 123 | 384,445 | 8.54 MB |
| full | china | `full-china.txt` | 531,012 | 123 | 530,889 | 11.65 MB |
| full | overseas | `full-overseas.txt` | 545,956 | 122 | 545,834 | 12.02 MB |
| full | all | `full-all.txt` | 553,623 | 123 | 553,500 | 12.15 MB |
