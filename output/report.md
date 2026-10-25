# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-25 16:37:50 - 2026-10-25 16:38:00 (耗时: 9.71s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,291,713
- 规范化有效规则: 1,252,303
- 误判排除规则: 2,251
- 白名单规则总数: 109
- 剪枝与去重数量: 732,209

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 77 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1314 | 58,660 | 58,548 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 792 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 145 | 208,311 | 207,973 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 61 | 16,300 | 16,223 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 50 | 17,609 | 17,595 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 87 | 47,829 | 47,812 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 95 | 1,555 | 1,541 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 34 | 1,105 | 1,089 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 32 | 359 | 338 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 32 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 40 | 214 | 200 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 40 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 125 | 397 | 325 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 32 | 382 | 368 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 214 | 191,892 | 190,977 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 84 | 78,318 | 70,567 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 191 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 229 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 31 | 85 | 14 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 91 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 95 | 258 | 244 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 35 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 38 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 102 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 38 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 217 | 17,813 | 5,888 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 228 | 54,344 | 44,649 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 276 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 93 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 93 | 451 | 437 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 86 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 41 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 165 | 212,436 | 212,395 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1807 | 233,805 | 233,522 | - |
| anti-AD | domains | china | full | 成功 | 500 | 112,083 | 111,888 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 58,671 | 92 | 58,579 | 1.26 MB |
| lite | overseas | `lite-overseas.txt` | 60,244 | 92 | 60,152 | 1.29 MB |
| lite | all | `lite-all.txt` | 60,292 | 92 | 60,200 | 1.29 MB |
| standard | china | `standard-china.txt` | 340,640 | 116 | 340,524 | 7.44 MB |
| standard | overseas | `standard-overseas.txt` | 361,448 | 115 | 361,333 | 7.87 MB |
| standard | all | `standard-all.txt` | 362,690 | 116 | 362,574 | 7.89 MB |
| full | china | `full-china.txt` | 476,605 | 116 | 476,489 | 10.17 MB |
| full | overseas | `full-overseas.txt` | 512,385 | 115 | 512,270 | 11.13 MB |
| full | all | `full-all.txt` | 520,094 | 116 | 519,978 | 11.26 MB |
