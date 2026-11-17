# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-17 00:02:16 - 2026-11-17 00:02:24 (耗时: 8.33s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,328,019
- 规范化有效规则: 1,289,348
- 误判排除规则: 1,478
- 白名单规则总数: 109
- 剪枝与去重数量: 762,199

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 11 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1646 | 63,304 | 63,191 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 987 | 3,585 | 3,561 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 92 | 241,195 | 240,788 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 34 | 16,473 | 16,396 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 37 | 18,791 | 18,777 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 59 | 77,537 | 77,505 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 101 | 1,532 | 1,518 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 92 | 1,113 | 1,097 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 92 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 26 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 29 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 32 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 25 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 28 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 172 | 190,574 | 189,654 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 52 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 246 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 138 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 92 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 30 | 544 | 530 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 39 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 95 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 35 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 111 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 40 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 115 | 17,980 | 6,121 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 175 | 54,510 | 44,716 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 268 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 31 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 23 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 106 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 91 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 522 | 182,662 | 182,613 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1770 | 228,814 | 228,534 | - |
| anti-AD | domains | china | full | 成功 | 326 | 110,265 | 110,062 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 63,314 | 92 | 63,222 | 1.37 MB |
| lite | overseas | `lite-overseas.txt` | 64,890 | 92 | 64,798 | 1.40 MB |
| lite | all | `lite-all.txt` | 64,939 | 92 | 64,847 | 1.40 MB |
| standard | china | `standard-china.txt` | 363,772 | 116 | 363,656 | 8.07 MB |
| standard | overseas | `standard-overseas.txt` | 383,418 | 115 | 383,303 | 8.48 MB |
| standard | all | `standard-all.txt` | 384,657 | 116 | 384,541 | 8.50 MB |
| full | china | `full-china.txt` | 485,741 | 116 | 485,625 | 10.51 MB |
| full | overseas | `full-overseas.txt` | 518,665 | 115 | 518,550 | 11.38 MB |
| full | all | `full-all.txt` | 527,149 | 116 | 527,033 | 11.52 MB |
