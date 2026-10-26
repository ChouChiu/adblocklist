# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-26 20:55:35 - 2026-10-26 20:55:43 (耗时: 7.64s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,288,975
- 规范化有效规则: 1,249,555
- 误判排除规则: 2,258
- 白名单规则总数: 109
- 剪枝与去重数量: 731,291

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 56 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1247 | 59,020 | 58,908 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 761 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 72 | 208,656 | 208,319 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 25 | 16,275 | 16,198 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 21 | 17,614 | 17,600 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 33 | 47,753 | 47,736 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 17 | 1,555 | 1,541 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 59 | 1,105 | 1,089 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 146 | 359 | 338 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 27 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 54 | 214 | 200 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 83 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 20 | 397 | 325 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 20 | 382 | 368 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 81 | 184,265 | 183,350 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 43 | 81,308 | 73,555 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 126 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 82 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 17 | 85 | 14 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 84 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 82 | 258 | 244 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 55 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 20 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 53 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 26 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 72 | 17,824 | 5,899 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 89 | 54,345 | 44,649 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 185 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 82 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 35 | 451 | 437 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 24 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 82 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 462 | 212,651 | 212,606 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1434 | 234,123 | 233,837 | - |
| anti-AD | domains | china | full | 成功 | 236 | 112,828 | 112,632 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,031 | 92 | 58,939 | 1.27 MB |
| lite | overseas | `lite-overseas.txt` | 60,604 | 92 | 60,512 | 1.30 MB |
| lite | all | `lite-all.txt` | 60,652 | 92 | 60,560 | 1.30 MB |
| standard | china | `standard-china.txt` | 336,119 | 116 | 336,003 | 7.36 MB |
| standard | overseas | `standard-overseas.txt` | 357,114 | 115 | 356,999 | 7.79 MB |
| standard | all | `standard-all.txt` | 358,356 | 116 | 358,240 | 7.81 MB |
| full | china | `full-china.txt` | 475,716 | 116 | 475,600 | 10.17 MB |
| full | overseas | `full-overseas.txt` | 506,848 | 115 | 506,733 | 11.03 MB |
| full | all | `full-all.txt` | 518,264 | 116 | 518,148 | 11.23 MB |
