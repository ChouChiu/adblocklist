# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-30 10:44:41 - 2026-10-30 10:44:49 (耗时: 7.50s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,279,168
- 规范化有效规则: 1,239,954
- 误判排除规则: 2,054
- 白名单规则总数: 109
- 剪枝与去重数量: 723,743

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 13 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1363 | 59,961 | 59,849 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1015 | 3,589 | 3,565 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 603 | 214,217 | 213,813 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 225 | 16,401 | 16,324 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 105 | 17,542 | 17,528 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 58 | 51,014 | 50,997 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 54 | 1,550 | 1,536 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 113 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 89 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 85 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 89 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 92 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 111 | 397 | 325 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 58 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 347 | 185,554 | 184,639 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 85 | 83,555 | 76,089 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 405 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 255 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 113 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 108 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 95 | 258 | 244 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 91 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 42 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 118 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 96 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 221 | 17,861 | 5,932 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 248 | 54,351 | 44,654 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 105 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 57 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 114 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 95 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 97 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 143 | 193,088 | 193,042 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1543 | 234,905 | 234,617 | - |
| anti-AD | domains | china | full | 成功 | 474 | 108,295 | 108,095 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,972 | 92 | 59,880 | 1.29 MB |
| lite | overseas | `lite-overseas.txt` | 61,547 | 92 | 61,455 | 1.32 MB |
| lite | all | `lite-all.txt` | 61,595 | 92 | 61,503 | 1.32 MB |
| standard | china | `standard-china.txt` | 340,473 | 116 | 340,357 | 7.47 MB |
| standard | overseas | `standard-overseas.txt` | 361,194 | 115 | 361,079 | 7.90 MB |
| standard | all | `standard-all.txt` | 362,393 | 116 | 362,277 | 7.92 MB |
| full | china | `full-china.txt` | 475,086 | 116 | 474,970 | 10.17 MB |
| full | overseas | `full-overseas.txt` | 508,582 | 115 | 508,467 | 11.07 MB |
| full | all | `full-all.txt` | 516,211 | 116 | 516,095 | 11.19 MB |
