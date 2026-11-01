# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-01 11:06:10 - 2026-11-01 11:06:19 (耗时: 9.13s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,273,987
- 规范化有效规则: 1,234,795
- 误判排除规则: 2,030
- 白名单规则总数: 109
- 剪枝与去重数量: 721,365

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 122 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 2071 | 59,220 | 59,108 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1052 | 3,582 | 3,558 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 73 | 211,754 | 211,377 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 30 | 16,523 | 16,446 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 49 | 17,567 | 17,553 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 47 | 50,958 | 50,941 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 24 | 1,550 | 1,536 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 23 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 122 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 122 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 22 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 22 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 24 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 122 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 118 | 186,315 | 185,400 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 57 | 83,555 | 76,089 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 858 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 337 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 124 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 122 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 122 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 22 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 29 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 122 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 122 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 124 | 17,884 | 5,955 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 122 | 54,355 | 44,656 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 621 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 28 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 123 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 29 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 24 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 377 | 192,331 | 192,285 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1933 | 231,979 | 231,690 | - |
| anti-AD | domains | china | full | 成功 | 178 | 109,124 | 108,922 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,231 | 92 | 59,139 | 1.27 MB |
| lite | overseas | `lite-overseas.txt` | 60,803 | 92 | 60,711 | 1.30 MB |
| lite | all | `lite-all.txt` | 60,851 | 92 | 60,759 | 1.30 MB |
| standard | china | `standard-china.txt` | 338,270 | 116 | 338,154 | 7.43 MB |
| standard | overseas | `standard-overseas.txt` | 358,941 | 115 | 358,826 | 7.85 MB |
| standard | all | `standard-all.txt` | 360,183 | 116 | 360,067 | 7.87 MB |
| full | china | `full-china.txt` | 472,309 | 116 | 472,193 | 10.12 MB |
| full | overseas | `full-overseas.txt` | 505,753 | 115 | 505,638 | 11.01 MB |
| full | all | `full-all.txt` | 513,430 | 116 | 513,314 | 11.13 MB |
