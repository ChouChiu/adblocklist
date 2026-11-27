# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-27 23:56:09 - 2026-11-27 23:56:18 (耗时: 9.09s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,486,162
- 规范化有效规则: 1,427,041
- 误判排除规则: 2,392
- 白名单规则总数: 116
- 剪枝与去重数量: 866,490

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 74 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1225 | 63,477 | 63,364 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 889 | 3,586 | 3,562 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 94 | 239,097 | 238,702 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 57 | 16,664 | 16,587 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 74 | 10,723 | 10,709 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 96 | 71,319 | 71,287 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 35 | 1,956 | 1,942 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 64 | 1,404 | 1,388 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 99 | 426 | 405 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 99 | 161 | 137 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 43 | 214 | 200 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 41 | 475 | 461 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 121 | 425 | 354 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 30 | 395 | 381 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 146 | 195,748 | 194,826 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 99 | 88,496 | 81,629 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 459 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 99 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 41 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 103 | 549 | 535 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 126 | 318 | 304 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 33 | 113 | 99 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 99 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 99 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 99 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 159 | 17,769 | 5,875 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 189 | 54,644 | 44,571 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 450 | 13,444 | 13,111 | - |
| 1024_hosts | hosts | china | standard | 成功 | 99 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 111 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 99 | 75 | 61 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 104 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 388 | 172,837 | 172,339 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1573 | 221,581 | 221,313 | - |
| anti-AD | domains | china | full | 成功 | 281 | 110,219 | 110,011 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 682 | 19,155 | 2,142 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 51 | 13,990 | 11,692 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 664 | 146,699 | 146,219 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 63,492 | 99 | 63,393 | 1.37 MB |
| lite | overseas | `lite-overseas.txt` | 65,068 | 99 | 64,969 | 1.40 MB |
| lite | all | `lite-all.txt` | 65,117 | 99 | 65,018 | 1.40 MB |
| standard | china | `standard-china.txt` | 374,934 | 123 | 374,811 | 8.34 MB |
| standard | overseas | `standard-overseas.txt` | 385,167 | 122 | 385,045 | 8.55 MB |
| standard | all | `standard-all.txt` | 386,407 | 123 | 386,284 | 8.57 MB |
| full | china | `full-china.txt` | 538,574 | 123 | 538,451 | 11.80 MB |
| full | overseas | `full-overseas.txt` | 552,886 | 122 | 552,764 | 12.15 MB |
| full | all | `full-all.txt` | 560,551 | 123 | 560,428 | 12.28 MB |
