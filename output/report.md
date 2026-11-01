# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-01 20:19:30 - 2026-11-01 20:19:38 (耗时: 8.49s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,275,011
- 规范化有效规则: 1,236,419
- 误判排除规则: 1,430
- 白名单规则总数: 109
- 剪枝与去重数量: 722,822

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 85 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1542 | 59,338 | 59,226 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1242 | 3,582 | 3,558 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 85 | 211,754 | 211,377 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 53 | 16,523 | 16,446 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 62 | 17,567 | 17,553 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 67 | 50,958 | 50,941 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 38 | 1,550 | 1,536 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 34 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 133 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 134 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 112 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 53 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 106 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 106 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 388 | 186,455 | 185,540 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 88 | 84,577 | 77,711 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 761 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 343 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 37 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 113 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 109 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 97 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 39 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 119 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 84 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 193 | 17,885 | 5,956 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 157 | 54,355 | 44,656 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 310 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 108 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 104 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 106 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 38 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 668 | 192,331 | 192,285 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1785 | 231,722 | 231,433 | - |
| anti-AD | domains | china | full | 成功 | 407 | 109,124 | 108,922 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,349 | 92 | 59,257 | 1.28 MB |
| lite | overseas | `lite-overseas.txt` | 60,921 | 92 | 60,829 | 1.31 MB |
| lite | all | `lite-all.txt` | 60,969 | 92 | 60,877 | 1.31 MB |
| standard | china | `standard-china.txt` | 338,403 | 116 | 338,287 | 7.43 MB |
| standard | overseas | `standard-overseas.txt` | 359,419 | 115 | 359,304 | 7.86 MB |
| standard | all | `standard-all.txt` | 360,659 | 116 | 360,543 | 7.88 MB |
| full | china | `full-china.txt` | 472,442 | 116 | 472,326 | 10.12 MB |
| full | overseas | `full-overseas.txt` | 505,917 | 115 | 505,802 | 11.01 MB |
| full | all | `full-all.txt` | 513,597 | 116 | 513,481 | 11.14 MB |
