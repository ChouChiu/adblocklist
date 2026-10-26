# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-26 09:52:36 - 2026-10-26 09:52:45 (耗时: 8.79s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,286,297
- 规范化有效规则: 1,246,882
- 误判排除规则: 2,254
- 白名单规则总数: 109
- 剪枝与去重数量: 730,958

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 72 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1118 | 58,920 | 58,808 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 696 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 104 | 210,208 | 209,871 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 35 | 16,348 | 16,271 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 32 | 17,617 | 17,603 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 57 | 47,695 | 47,678 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 41 | 1,555 | 1,541 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 73 | 1,105 | 1,089 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 68 | 359 | 338 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 68 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 71 | 214 | 200 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 80 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 28 | 397 | 325 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 71 | 382 | 368 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 148 | 180,526 | 179,611 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 67 | 81,308 | 73,555 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 127 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 197 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 72 | 85 | 14 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 59 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 67 | 258 | 244 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 78 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 26 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 79 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 71 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 58 | 17,821 | 5,896 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 78 | 54,344 | 44,649 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 243 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 82 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 35 | 451 | 437 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 70 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 70 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 306 | 212,550 | 212,509 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1549 | 233,819 | 233,533 | - |
| anti-AD | domains | china | full | 成功 | 863 | 112,828 | 112,632 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 58,931 | 92 | 58,839 | 1.27 MB |
| lite | overseas | `lite-overseas.txt` | 60,504 | 92 | 60,412 | 1.30 MB |
| lite | all | `lite-all.txt` | 60,552 | 92 | 60,460 | 1.30 MB |
| standard | china | `standard-china.txt` | 334,225 | 116 | 334,109 | 7.30 MB |
| standard | overseas | `standard-overseas.txt` | 355,353 | 115 | 355,238 | 7.73 MB |
| standard | all | `standard-all.txt` | 356,595 | 116 | 356,479 | 7.75 MB |
| full | china | `full-china.txt` | 473,514 | 116 | 473,398 | 10.10 MB |
| full | overseas | `full-overseas.txt` | 504,644 | 115 | 504,529 | 10.96 MB |
| full | all | `full-all.txt` | 515,924 | 116 | 515,808 | 11.17 MB |
