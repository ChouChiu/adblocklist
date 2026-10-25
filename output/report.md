# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-25 16:03:22 - 2026-10-25 16:03:32 (耗时: 9.45s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,292,029
- 规范化有效规则: 1,252,619
- 误判排除规则: 2,251
- 白名单规则总数: 109
- 剪枝与去重数量: 732,938

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 308 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 2814 | 58,719 | 58,607 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1968 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 3124 | 208,311 | 207,973 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 1630 | 16,300 | 16,223 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 1674 | 17,609 | 17,595 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 2170 | 47,829 | 47,812 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 926 | 1,555 | 1,541 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 922 | 1,105 | 1,089 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 926 | 359 | 338 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 922 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 926 | 214 | 200 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 928 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 925 | 397 | 325 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 926 | 382 | 368 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 2821 | 191,748 | 190,833 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 2398 | 78,318 | 70,567 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 1715 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 928 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 922 | 85 | 14 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 922 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 922 | 258 | 244 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 926 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 1210 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 926 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 930 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 2230 | 17,808 | 5,883 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 2647 | 54,344 | 44,649 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 1612 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 1138 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 926 | 451 | 437 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 922 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 925 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 2812 | 212,436 | 212,395 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 3510 | 234,211 | 233,928 | - |
| anti-AD | domains | china | full | 成功 | 2644 | 112,083 | 111,888 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 58,730 | 92 | 58,638 | 1.26 MB |
| lite | overseas | `lite-overseas.txt` | 60,303 | 92 | 60,211 | 1.29 MB |
| lite | all | `lite-all.txt` | 60,351 | 92 | 60,259 | 1.29 MB |
| standard | china | `standard-china.txt` | 340,499 | 116 | 340,383 | 7.44 MB |
| standard | overseas | `standard-overseas.txt` | 361,307 | 115 | 361,192 | 7.87 MB |
| standard | all | `standard-all.txt` | 362,549 | 116 | 362,433 | 7.89 MB |
| full | china | `full-china.txt` | 476,464 | 116 | 476,348 | 10.16 MB |
| full | overseas | `full-overseas.txt` | 511,973 | 115 | 511,858 | 11.12 MB |
| full | all | `full-all.txt` | 519,681 | 116 | 519,565 | 11.25 MB |
