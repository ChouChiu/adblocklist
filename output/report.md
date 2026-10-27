# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-27 20:29:46 - 2026-10-27 20:29:56 (耗时: 9.36s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,291,838
- 规范化有效规则: 1,252,418
- 误判排除规则: 2,258
- 白名单规则总数: 109
- 剪枝与去重数量: 733,316

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 90 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1232 | 59,430 | 59,318 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 782 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 73 | 209,859 | 209,522 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 91 | 16,285 | 16,208 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 28 | 17,636 | 17,622 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 31 | 48,291 | 48,274 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 16 | 1,555 | 1,541 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 26 | 1,104 | 1,088 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 91 | 359 | 338 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 91 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 91 | 214 | 200 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 91 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 91 | 397 | 325 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 91 | 382 | 368 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 117 | 184,628 | 183,713 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 45 | 81,308 | 73,555 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 242 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 190 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 45 | 85 | 14 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 91 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 19 | 258 | 244 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 19 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 91 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 91 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 28 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 282 | 17,836 | 5,911 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 269 | 54,344 | 44,648 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 480 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 90 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 90 | 451 | 437 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 90 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 90 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 88 | 212,791 | 212,746 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1730 | 234,290 | 234,004 | - |
| anti-AD | domains | china | full | 成功 | 454 | 112,828 | 112,632 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,441 | 92 | 59,349 | 1.28 MB |
| lite | overseas | `lite-overseas.txt` | 61,014 | 92 | 60,922 | 1.31 MB |
| lite | all | `lite-all.txt` | 61,062 | 92 | 60,970 | 1.31 MB |
| standard | china | `standard-china.txt` | 337,001 | 116 | 336,885 | 7.38 MB |
| standard | overseas | `standard-overseas.txt` | 357,944 | 115 | 357,829 | 7.81 MB |
| standard | all | `standard-all.txt` | 359,185 | 116 | 359,069 | 7.83 MB |
| full | china | `full-china.txt` | 476,506 | 116 | 476,390 | 10.19 MB |
| full | overseas | `full-overseas.txt` | 507,683 | 115 | 507,568 | 11.05 MB |
| full | all | `full-all.txt` | 519,102 | 116 | 518,986 | 11.25 MB |
