# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-28 12:46:48 - 2026-11-28 12:46:58 (耗时: 9.38s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,484,648
- 规范化有效规则: 1,425,532
- 误判排除规则: 2,388
- 白名单规则总数: 116
- 剪枝与去重数量: 866,123

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 14 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1228 | 63,667 | 63,554 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1040 | 3,586 | 3,562 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 101 | 238,097 | 237,706 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 44 | 16,655 | 16,578 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 45 | 10,718 | 10,704 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 110 | 71,329 | 71,297 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 33 | 1,957 | 1,943 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 32 | 1,409 | 1,393 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 113 | 426 | 405 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 113 | 161 | 137 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 40 | 214 | 200 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 113 | 476 | 462 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 30 | 425 | 354 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 39 | 395 | 381 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 276 | 195,970 | 195,048 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 113 | 88,511 | 81,636 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 204 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 303 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 113 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 114 | 549 | 535 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 113 | 318 | 304 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 40 | 113 | 99 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 47 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 114 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 113 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 335 | 17,780 | 5,886 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 242 | 54,657 | 44,578 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 114 | 13,444 | 13,111 | - |
| 1024_hosts | hosts | china | standard | 成功 | 114 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 113 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 240 | 75 | 61 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 32 | 145 | 128 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 107 | 171,434 | 170,936 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1501 | 221,761 | 221,493 | - |
| anti-AD | domains | china | full | 成功 | 391 | 110,219 | 110,011 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 276 | 19,226 | 2,228 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 47 | 13,990 | 11,692 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 383 | 146,882 | 146,402 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 63,682 | 99 | 63,583 | 1.38 MB |
| lite | overseas | `lite-overseas.txt` | 65,258 | 99 | 65,159 | 1.40 MB |
| lite | all | `lite-all.txt` | 65,307 | 99 | 65,208 | 1.41 MB |
| standard | china | `standard-china.txt` | 374,987 | 123 | 374,864 | 8.34 MB |
| standard | overseas | `standard-overseas.txt` | 384,677 | 122 | 384,555 | 8.54 MB |
| standard | all | `standard-all.txt` | 385,916 | 123 | 385,793 | 8.56 MB |
| full | china | `full-china.txt` | 536,963 | 123 | 536,840 | 11.77 MB |
| full | overseas | `full-overseas.txt` | 551,745 | 122 | 551,623 | 12.13 MB |
| full | all | `full-all.txt` | 559,409 | 123 | 559,286 | 12.26 MB |
