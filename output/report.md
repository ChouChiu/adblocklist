# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-08 20:15:33 - 2026-11-08 20:15:41 (耗时: 8.29s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,323,532
- 规范化有效规则: 1,284,976
- 误判排除规则: 1,437
- 白名单规则总数: 109
- 剪枝与去重数量: 767,100

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 248 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1538 | 61,274 | 61,162 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 856 | 3,580 | 3,556 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 128 | 225,359 | 224,981 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 18 | 16,378 | 16,301 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 19 | 18,777 | 18,763 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 34 | 79,831 | 79,799 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 20 | 1,533 | 1,519 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 19 | 1,126 | 1,110 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 128 | 363 | 342 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 128 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 80 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 83 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 81 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 84 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 68 | 190,902 | 189,984 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 39 | 85,034 | 78,168 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 223 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 149 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 284 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 176 | 510 | 496 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 128 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 92 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 79 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 129 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 129 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 158 | 17,893 | 6,035 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 91 | 54,382 | 44,658 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 148 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 180 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 127 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 127 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 76 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 146 | 188,796 | 188,748 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1890 | 231,733 | 231,452 | - |
| anti-AD | domains | china | full | 成功 | 196 | 110,675 | 110,474 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 61,285 | 92 | 61,193 | 1.32 MB |
| lite | overseas | `lite-overseas.txt` | 62,858 | 92 | 62,766 | 1.35 MB |
| lite | all | `lite-all.txt` | 62,906 | 92 | 62,814 | 1.35 MB |
| standard | china | `standard-china.txt` | 350,002 | 116 | 349,886 | 7.73 MB |
| standard | overseas | `standard-overseas.txt` | 370,121 | 115 | 370,006 | 8.15 MB |
| standard | all | `standard-all.txt` | 371,388 | 116 | 371,272 | 8.17 MB |
| full | china | `full-china.txt` | 476,578 | 116 | 476,462 | 10.27 MB |
| full | overseas | `full-overseas.txt` | 510,203 | 115 | 510,088 | 11.15 MB |
| full | all | `full-all.txt` | 517,876 | 116 | 517,760 | 11.28 MB |
