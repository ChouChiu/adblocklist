# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-16 12:30:12 - 2026-11-16 12:30:19 (耗时: 6.88s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,327,667
- 规范化有效规则: 1,288,999
- 误判排除规则: 1,478
- 白名单规则总数: 109
- 剪枝与去重数量: 762,521

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 91 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1257 | 63,161 | 63,048 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 653 | 3,584 | 3,560 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 79 | 241,195 | 240,788 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 16 | 16,473 | 16,396 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 32 | 18,791 | 18,777 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 42 | 77,537 | 77,505 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 17 | 1,532 | 1,518 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 16 | 1,113 | 1,097 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 51 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 91 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 17 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 19 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 19 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 24 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 91 | 190,416 | 189,496 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 32 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 229 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 42 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 17 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 91 | 544 | 530 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 91 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 51 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 18 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 51 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 11 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 45 | 17,972 | 6,113 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 49 | 54,508 | 44,717 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 91 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 90 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 41 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 48 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 90 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 268 | 182,662 | 182,613 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1410 | 228,774 | 228,494 | - |
| anti-AD | domains | china | full | 成功 | 191 | 110,265 | 110,062 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 63,171 | 92 | 63,079 | 1.37 MB |
| lite | overseas | `lite-overseas.txt` | 64,746 | 92 | 64,654 | 1.39 MB |
| lite | all | `lite-all.txt` | 64,795 | 92 | 64,703 | 1.39 MB |
| standard | china | `standard-china.txt` | 363,615 | 116 | 363,499 | 8.07 MB |
| standard | overseas | `standard-overseas.txt` | 383,264 | 115 | 383,149 | 8.48 MB |
| standard | all | `standard-all.txt` | 384,500 | 116 | 384,384 | 8.50 MB |
| full | china | `full-china.txt` | 485,584 | 116 | 485,468 | 10.50 MB |
| full | overseas | `full-overseas.txt` | 517,997 | 115 | 517,882 | 11.36 MB |
| full | all | `full-all.txt` | 526,478 | 116 | 526,362 | 11.51 MB |
