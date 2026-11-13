# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-13 21:49:51 - 2026-11-13 21:50:00 (耗时: 9.08s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,315,995
- 规范化有效规则: 1,277,367
- 误判排除规则: 1,453
- 白名单规则总数: 109
- 剪枝与去重数量: 762,619

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 421 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1464 | 62,493 | 62,381 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 957 | 3,582 | 3,558 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 81 | 225,627 | 225,233 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 26 | 16,521 | 16,444 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 34 | 18,867 | 18,853 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 45 | 77,576 | 77,544 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 27 | 1,533 | 1,519 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 83 | 1,111 | 1,095 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 144 | 416 | 395 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 86 | 160 | 136 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 113 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 99 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 107 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 105 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 144 | 191,291 | 190,371 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 49 | 85,034 | 78,168 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 174 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 133 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 309 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 132 | 505 | 491 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 133 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 112 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 285 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 111 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 83 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 145 | 17,948 | 6,089 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 1256 | 54,474 | 44,697 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 131 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 114 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 83 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 105 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 304 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 562 | 186,019 | 185,971 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1713 | 228,238 | 227,958 | - |
| anti-AD | domains | china | full | 成功 | 298 | 109,244 | 109,042 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,505 | 92 | 62,413 | 1.35 MB |
| lite | overseas | `lite-overseas.txt` | 64,078 | 92 | 63,986 | 1.38 MB |
| lite | all | `lite-all.txt` | 64,127 | 92 | 64,035 | 1.38 MB |
| standard | china | `standard-china.txt` | 348,787 | 116 | 348,671 | 7.72 MB |
| standard | overseas | `standard-overseas.txt` | 369,835 | 115 | 369,720 | 8.15 MB |
| standard | all | `standard-all.txt` | 371,099 | 116 | 370,983 | 8.17 MB |
| full | china | `full-china.txt` | 473,618 | 116 | 473,502 | 10.22 MB |
| full | overseas | `full-overseas.txt` | 506,831 | 115 | 506,716 | 11.09 MB |
| full | all | `full-all.txt` | 514,748 | 116 | 514,632 | 11.22 MB |
