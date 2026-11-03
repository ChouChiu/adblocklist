# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-03 21:35:51 - 2026-11-03 21:35:58 (耗时: 7.26s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,340,359
- 规范化有效规则: 1,301,658
- 误判排除规则: 1,534
- 白名单规则总数: 109
- 剪枝与去重数量: 786,578

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 139 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 2026 | 60,052 | 59,940 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 903 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 497 | 247,772 | 247,304 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 34 | 16,594 | 16,517 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 82 | 17,543 | 17,529 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 62 | 77,694 | 77,663 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 101 | 1,547 | 1,533 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 88 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 122 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 100 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 74 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 139 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 145 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 76 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 139 | 188,311 | 187,396 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 58 | 84,577 | 77,711 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 369 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 116 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 94 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 97 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 147 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 86 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 30 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 139 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 151 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 46 | 17,905 | 5,974 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 52 | 54,358 | 44,656 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 116 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 151 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 99 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 103 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 139 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 404 | 191,473 | 191,426 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 2312 | 232,268 | 231,981 | - |
| anti-AD | domains | china | full | 成功 | 312 | 109,392 | 109,190 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,063 | 92 | 59,971 | 1.29 MB |
| lite | overseas | `lite-overseas.txt` | 61,635 | 92 | 61,543 | 1.32 MB |
| lite | all | `lite-all.txt` | 61,683 | 92 | 61,591 | 1.32 MB |
| standard | china | `standard-china.txt` | 366,235 | 116 | 366,119 | 8.16 MB |
| standard | overseas | `standard-overseas.txt` | 386,045 | 115 | 385,930 | 8.56 MB |
| standard | all | `standard-all.txt` | 387,135 | 116 | 387,019 | 8.58 MB |
| full | china | `full-china.txt` | 497,893 | 116 | 497,777 | 10.80 MB |
| full | overseas | `full-overseas.txt` | 507,378 | 115 | 507,263 | 11.04 MB |
| full | all | `full-all.txt` | 515,080 | 116 | 514,964 | 11.17 MB |
