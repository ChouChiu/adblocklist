# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-02 12:05:01 - 2026-11-02 12:05:10 (耗时: 8.90s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,301,539
- 规范化有效规则: 1,262,934
- 误判排除规则: 1,442
- 白名单规则总数: 109
- 剪枝与去重数量: 749,744

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 9 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1027 | 59,479 | 59,367 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 593 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 79 | 211,793 | 211,416 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 43 | 16,571 | 16,494 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 35 | 17,529 | 17,515 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 63 | 77,635 | 77,604 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 25 | 1,548 | 1,534 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 64 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 80 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 80 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 24 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 83 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 25 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 24 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 137 | 186,672 | 185,757 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 56 | 84,577 | 77,711 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 287 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 267 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 23 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 80 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 80 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 80 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 23 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 80 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 21 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 163 | 17,894 | 5,964 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 167 | 54,355 | 44,656 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 318 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 79 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 26 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 28 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 29 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 355 | 191,541 | 191,495 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1319 | 231,680 | 231,393 | - |
| anti-AD | domains | china | full | 成功 | 266 | 109,392 | 109,190 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,490 | 92 | 59,398 | 1.28 MB |
| lite | overseas | `lite-overseas.txt` | 61,063 | 92 | 60,971 | 1.31 MB |
| lite | all | `lite-all.txt` | 61,111 | 92 | 61,019 | 1.31 MB |
| standard | china | `standard-china.txt` | 338,469 | 116 | 338,353 | 7.43 MB |
| standard | overseas | `standard-overseas.txt` | 359,582 | 115 | 359,467 | 7.87 MB |
| standard | all | `standard-all.txt` | 360,824 | 116 | 360,708 | 7.89 MB |
| full | china | `full-china.txt` | 471,927 | 116 | 471,811 | 10.11 MB |
| full | overseas | `full-overseas.txt` | 505,510 | 115 | 505,395 | 11.00 MB |
| full | all | `full-all.txt` | 513,190 | 116 | 513,074 | 11.13 MB |
