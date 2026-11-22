# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-22 21:36:25 - 2026-11-22 21:36:35 (耗时: 10.20s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,504,952
- 规范化有效规则: 1,446,388
- 误判排除规则: 1,948
- 白名单规则总数: 116
- 剪枝与去重数量: 880,626

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 43 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1093 | 62,125 | 62,012 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 746 | 3,576 | 3,552 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 82 | 242,073 | 241,673 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 92 | 16,735 | 16,658 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 33 | 10,788 | 10,774 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 60 | 73,248 | 73,216 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 22 | 1,531 | 1,517 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 92 | 1,298 | 1,282 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 92 | 425 | 404 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 92 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 92 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 129 | 475 | 461 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 27 | 409 | 338 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 34 | 394 | 380 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 129 | 192,487 | 191,567 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 52 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 255 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 93 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 22 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 92 | 546 | 532 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 92 | 316 | 302 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 52 | 119 | 105 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 92 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 92 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 93 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 210 | 17,719 | 5,824 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 298 | 54,586 | 44,555 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 349 | 13,443 | 13,110 | - |
| 1024_hosts | hosts | china | standard | 成功 | 92 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 92 | 567 | 553 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 92 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 42 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 91 | 199,183 | 199,132 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1575 | 220,293 | 220,025 | - |
| anti-AD | domains | china | full | 成功 | 418 | 110,360 | 110,150 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 391 | 19,067 | 2,125 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 38 | 13,990 | 11,692 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 723 | 146,178 | 145,701 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,140 | 99 | 62,041 | 1.34 MB |
| lite | overseas | `lite-overseas.txt` | 63,716 | 99 | 63,617 | 1.37 MB |
| lite | all | `lite-all.txt` | 63,765 | 99 | 63,666 | 1.37 MB |
| standard | china | `standard-china.txt` | 373,014 | 123 | 372,891 | 8.29 MB |
| standard | overseas | `standard-overseas.txt` | 382,238 | 122 | 382,116 | 8.48 MB |
| standard | all | `standard-all.txt` | 383,451 | 123 | 383,328 | 8.50 MB |
| full | china | `full-china.txt` | 544,640 | 123 | 544,517 | 11.93 MB |
| full | overseas | `full-overseas.txt` | 557,999 | 122 | 557,877 | 12.28 MB |
| full | all | `full-all.txt` | 565,762 | 123 | 565,639 | 12.41 MB |
