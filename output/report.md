# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-04 21:44:48 - 2026-11-04 21:44:56 (耗时: 8.37s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,333,946
- 规范化有效规则: 1,295,272
- 误判排除规则: 1,495
- 白名单规则总数: 109
- 剪枝与去重数量: 778,252

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 13 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1259 | 60,233 | 60,121 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1634 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 114 | 239,596 | 239,163 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 56 | 16,316 | 16,239 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 50 | 17,455 | 17,441 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 70 | 77,409 | 77,378 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 49 | 1,547 | 1,533 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 35 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 89 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 122 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 97 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 35 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 76 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 163 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 280 | 188,547 | 187,632 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 76 | 84,577 | 77,711 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 311 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 281 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 60 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 93 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 90 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 76 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 41 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 98 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 45 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 159 | 17,921 | 5,990 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 177 | 54,373 | 44,659 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 268 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 115 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 76 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 76 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 89 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 158 | 193,427 | 193,380 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1522 | 232,280 | 231,997 | - |
| anti-AD | domains | china | full | 成功 | 339 | 109,392 | 109,190 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,244 | 92 | 60,152 | 1.30 MB |
| lite | overseas | `lite-overseas.txt` | 61,816 | 92 | 61,724 | 1.33 MB |
| lite | all | `lite-all.txt` | 61,864 | 92 | 61,772 | 1.33 MB |
| standard | china | `standard-china.txt` | 362,426 | 116 | 362,310 | 8.03 MB |
| standard | overseas | `standard-overseas.txt` | 382,616 | 115 | 382,501 | 8.45 MB |
| standard | all | `standard-all.txt` | 383,706 | 116 | 383,590 | 8.46 MB |
| full | china | `full-china.txt` | 492,148 | 116 | 492,032 | 10.63 MB |
| full | overseas | `full-overseas.txt` | 509,310 | 115 | 509,195 | 11.13 MB |
| full | all | `full-all.txt` | 517,020 | 116 | 516,904 | 11.26 MB |
