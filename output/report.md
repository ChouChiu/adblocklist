# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-07 10:55:24 - 2026-11-07 10:55:34 (耗时: 9.26s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,363,319
- 规范化有效规则: 1,324,593
- 误判排除规则: 1,615
- 白名单规则总数: 109
- 剪枝与去重数量: 807,595

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 45 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1269 | 61,001 | 60,889 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 740 | 3,579 | 3,555 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 159 | 268,506 | 267,950 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 67 | 16,399 | 16,322 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 58 | 18,846 | 18,832 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 163 | 76,703 | 76,672 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 67 | 1,533 | 1,519 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 39 | 1,124 | 1,108 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 79 | 363 | 342 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 85 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 87 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 85 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 85 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 39 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 189 | 190,397 | 189,479 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 66 | 84,577 | 77,711 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 200 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 190 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 189 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 189 | 506 | 492 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 94 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 42 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 86 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 122 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 48 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 292 | 17,880 | 6,022 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 395 | 54,373 | 44,657 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 220 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 35 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 97 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 189 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 94 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 174 | 189,714 | 189,666 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1611 | 232,385 | 232,103 | - |
| anti-AD | domains | china | full | 成功 | 371 | 110,047 | 109,846 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 61,012 | 92 | 60,920 | 1.32 MB |
| lite | overseas | `lite-overseas.txt` | 62,584 | 92 | 62,492 | 1.34 MB |
| lite | all | `lite-all.txt` | 62,632 | 92 | 62,540 | 1.34 MB |
| standard | china | `standard-china.txt` | 346,831 | 116 | 346,715 | 7.68 MB |
| standard | overseas | `standard-overseas.txt` | 367,562 | 115 | 367,447 | 8.11 MB |
| standard | all | `standard-all.txt` | 368,862 | 116 | 368,746 | 8.13 MB |
| full | china | `full-china.txt` | 475,993 | 116 | 475,877 | 10.26 MB |
| full | overseas | `full-overseas.txt` | 509,331 | 115 | 509,216 | 11.13 MB |
| full | all | `full-all.txt` | 516,998 | 116 | 516,882 | 11.26 MB |
