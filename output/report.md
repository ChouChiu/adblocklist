# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-06 11:53:50 - 2026-11-06 11:54:00 (耗时: 9.62s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,322,795
- 规范化有效规则: 1,284,247
- 误判排除规则: 1,441
- 白名单规则总数: 109
- 剪枝与去重数量: 763,444

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 76 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 921 | 60,764 | 60,652 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 608 | 3,586 | 3,562 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 111 | 222,645 | 222,265 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 30 | 16,399 | 16,322 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 27 | 18,907 | 18,893 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 50 | 77,343 | 77,312 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 28 | 1,547 | 1,533 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 28 | 1,085 | 1,069 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 76 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 77 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 88 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 60 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 28 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 76 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 122 | 190,065 | 189,148 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 71 | 84,577 | 77,711 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 230 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 77 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 42 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 55 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 123 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 77 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 76 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 76 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 28 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 75 | 17,867 | 6,009 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 88 | 54,372 | 44,659 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 166 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 28 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 60 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 60 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 60 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 356 | 194,786 | 194,738 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1262 | 232,605 | 232,323 | - |
| anti-AD | domains | china | full | 成功 | 291 | 110,047 | 109,846 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,775 | 92 | 60,683 | 1.31 MB |
| lite | overseas | `lite-overseas.txt` | 62,348 | 92 | 62,256 | 1.34 MB |
| lite | all | `lite-all.txt` | 62,396 | 92 | 62,304 | 1.34 MB |
| standard | china | `standard-china.txt` | 348,469 | 116 | 348,353 | 7.70 MB |
| standard | overseas | `standard-overseas.txt` | 370,397 | 115 | 370,282 | 8.15 MB |
| standard | all | `standard-all.txt` | 371,665 | 116 | 371,549 | 8.17 MB |
| full | china | `full-china.txt` | 478,058 | 116 | 477,942 | 10.30 MB |
| full | overseas | `full-overseas.txt` | 513,123 | 115 | 513,008 | 11.22 MB |
| full | all | `full-all.txt` | 520,803 | 116 | 520,687 | 11.34 MB |
