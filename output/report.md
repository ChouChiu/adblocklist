# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-27 13:33:44 - 2026-11-27 13:33:55 (耗时: 10.59s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,483,462
- 规范化有效规则: 1,424,782
- 误判排除规则: 1,955
- 白名单规则总数: 116
- 剪枝与去重数量: 865,373

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 91 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1509 | 63,426 | 63,313 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1123 | 3,586 | 3,562 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 78 | 240,551 | 240,156 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 122 | 16,693 | 16,616 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 63 | 10,731 | 10,717 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 53 | 71,205 | 71,173 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 26 | 1,955 | 1,941 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 78 | 1,404 | 1,388 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 122 | 425 | 404 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 87 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 104 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 27 | 475 | 461 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 96 | 409 | 338 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 30 | 394 | 380 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 276 | 195,596 | 194,677 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 60 | 88,496 | 81,629 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 402 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 342 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 78 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 92 | 546 | 532 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 92 | 316 | 302 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 91 | 119 | 105 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 78 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 107 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 21 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 254 | 17,769 | 5,875 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 280 | 54,643 | 44,571 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 119 | 13,444 | 13,111 | - |
| 1024_hosts | hosts | china | standard | 成功 | 111 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 148 | 567 | 553 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 78 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 87 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 300 | 168,055 | 167,998 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1714 | 222,339 | 222,067 | - |
| anti-AD | domains | china | full | 成功 | 222 | 110,219 | 110,011 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 460 | 19,155 | 2,142 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 38 | 13,990 | 11,692 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 643 | 146,857 | 146,377 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 63,441 | 99 | 63,342 | 1.37 MB |
| lite | overseas | `lite-overseas.txt` | 65,017 | 99 | 64,918 | 1.40 MB |
| lite | all | `lite-all.txt` | 65,066 | 99 | 64,967 | 1.40 MB |
| standard | china | `standard-china.txt` | 376,398 | 123 | 376,275 | 8.37 MB |
| standard | overseas | `standard-overseas.txt` | 386,311 | 122 | 386,189 | 8.57 MB |
| standard | all | `standard-all.txt` | 387,552 | 123 | 387,429 | 8.59 MB |
| full | china | `full-china.txt` | 537,242 | 123 | 537,119 | 11.77 MB |
| full | overseas | `full-overseas.txt` | 551,747 | 122 | 551,625 | 12.14 MB |
| full | all | `full-all.txt` | 559,409 | 123 | 559,286 | 12.27 MB |
