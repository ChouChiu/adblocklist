# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-29 10:45:14 - 2026-10-29 10:45:21 (耗时: 7.85s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,298,753
- 规范化有效规则: 1,259,331
- 误判排除规则: 2,266
- 白名单规则总数: 109
- 剪枝与去重数量: 742,527

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 49 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 939 | 59,695 | 59,583 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 605 | 3,587 | 3,563 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 84 | 211,686 | 211,348 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 22 | 16,356 | 16,279 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 40 | 17,734 | 17,720 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 37 | 53,770 | 53,753 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 18 | 1,555 | 1,541 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 74 | 1,098 | 1,082 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 74 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 92 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 19 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 15 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 40 | 397 | 325 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 40 | 382 | 368 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 73 | 185,167 | 184,252 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 33 | 82,964 | 75,220 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 381 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 109 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 14 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 85 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 74 | 258 | 244 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 74 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 40 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 74 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 14 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 85 | 17,853 | 5,926 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 55 | 54,347 | 44,650 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 192 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 74 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 74 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 16 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 15 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 365 | 213,825 | 213,780 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1315 | 234,627 | 234,340 | - |
| anti-AD | domains | china | full | 成功 | 263 | 108,295 | 108,095 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,706 | 92 | 59,614 | 1.29 MB |
| lite | overseas | `lite-overseas.txt` | 61,280 | 92 | 61,188 | 1.31 MB |
| lite | all | `lite-all.txt` | 61,328 | 92 | 61,236 | 1.32 MB |
| standard | china | `standard-china.txt` | 338,582 | 116 | 338,466 | 7.41 MB |
| standard | overseas | `standard-overseas.txt` | 359,285 | 115 | 359,170 | 7.84 MB |
| standard | all | `standard-all.txt` | 360,528 | 116 | 360,412 | 7.86 MB |
| full | china | `full-china.txt` | 474,252 | 116 | 474,136 | 10.13 MB |
| full | overseas | `full-overseas.txt` | 509,115 | 115 | 509,000 | 11.08 MB |
| full | all | `full-all.txt` | 516,804 | 116 | 516,688 | 11.20 MB |
