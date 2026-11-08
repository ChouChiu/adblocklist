# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-08 11:07:06 - 2026-11-08 11:07:16 (耗时: 9.27s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,323,736
- 规范化有效规则: 1,285,188
- 误判排除规则: 1,437
- 白名单规则总数: 109
- 剪枝与去重数量: 767,559

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 61 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 941 | 61,288 | 61,176 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 618 | 3,580 | 3,556 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 80 | 225,359 | 224,981 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 63 | 16,378 | 16,301 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 27 | 18,777 | 18,763 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 60 | 79,831 | 79,799 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 27 | 1,533 | 1,519 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 30 | 1,126 | 1,110 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 61 | 363 | 342 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 61 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 62 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 80 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 30 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 80 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 95 | 190,745 | 189,827 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 51 | 85,034 | 78,168 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 216 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 141 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 12 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 81 | 510 | 496 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 62 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 63 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 62 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 61 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 61 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 128 | 17,893 | 6,035 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 133 | 54,373 | 44,657 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 80 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 28 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 60 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 50 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 60 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 253 | 188,796 | 188,748 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1198 | 232,089 | 231,808 | - |
| anti-AD | domains | china | full | 成功 | 146 | 110,675 | 110,474 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 61,299 | 92 | 61,207 | 1.32 MB |
| lite | overseas | `lite-overseas.txt` | 62,872 | 92 | 62,780 | 1.35 MB |
| lite | all | `lite-all.txt` | 62,920 | 92 | 62,828 | 1.35 MB |
| standard | china | `standard-china.txt` | 349,850 | 116 | 349,734 | 7.73 MB |
| standard | overseas | `standard-overseas.txt` | 369,969 | 115 | 369,854 | 8.15 MB |
| standard | all | `standard-all.txt` | 371,236 | 116 | 371,120 | 8.17 MB |
| full | china | `full-china.txt` | 476,426 | 116 | 476,310 | 10.26 MB |
| full | overseas | `full-overseas.txt` | 509,956 | 115 | 509,841 | 11.14 MB |
| full | all | `full-all.txt` | 517,629 | 116 | 517,513 | 11.27 MB |
