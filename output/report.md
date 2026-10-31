# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-31 19:45:53 - 2026-10-31 19:46:01 (耗时: 8.44s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,280,451
- 规范化有效规则: 1,241,236
- 误判排除规则: 2,054
- 白名单规则总数: 109
- 剪枝与去重数量: 725,647

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 40 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 941 | 60,332 | 60,220 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 613 | 3,582 | 3,558 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 107 | 213,402 | 212,999 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 32 | 16,582 | 16,505 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 38 | 17,575 | 17,561 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 47 | 51,011 | 50,994 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 26 | 1,550 | 1,536 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 41 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 116 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 116 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 116 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 48 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 38 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 48 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 84 | 186,059 | 185,144 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 116 | 83,555 | 76,089 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 229 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 48 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 116 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 116 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 116 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 24 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 26 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 24 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 25 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 88 | 17,874 | 5,945 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 125 | 54,354 | 44,656 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 227 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 25 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 24 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 25 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 33 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 352 | 193,583 | 193,537 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1343 | 235,414 | 235,125 | - |
| anti-AD | domains | china | full | 成功 | 222 | 108,288 | 108,088 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,343 | 92 | 60,251 | 1.30 MB |
| lite | overseas | `lite-overseas.txt` | 61,913 | 92 | 61,821 | 1.33 MB |
| lite | all | `lite-all.txt` | 61,961 | 92 | 61,869 | 1.33 MB |
| standard | china | `standard-china.txt` | 339,717 | 116 | 339,601 | 7.45 MB |
| standard | overseas | `standard-overseas.txt` | 360,354 | 115 | 360,239 | 7.88 MB |
| standard | all | `standard-all.txt` | 361,555 | 116 | 361,439 | 7.90 MB |
| full | china | `full-china.txt` | 474,496 | 116 | 474,380 | 10.16 MB |
| full | overseas | `full-overseas.txt` | 507,959 | 115 | 507,844 | 11.05 MB |
| full | all | `full-all.txt` | 515,589 | 116 | 515,473 | 11.18 MB |
