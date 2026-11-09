# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-09 12:37:32 - 2026-11-09 12:37:41 (耗时: 8.84s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,316,357
- 规范化有效规则: 1,277,736
- 误判排除规则: 1,446
- 白名单规则总数: 109
- 剪枝与去重数量: 761,145

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 135 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1696 | 61,555 | 61,443 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1085 | 3,580 | 3,556 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 99 | 224,811 | 224,424 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 128 | 16,420 | 16,343 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 131 | 18,838 | 18,824 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 307 | 77,937 | 77,905 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 132 | 1,531 | 1,517 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 102 | 1,115 | 1,099 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 162 | 363 | 342 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 127 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 149 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 127 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 134 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 176 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 127 | 188,100 | 187,182 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 58 | 85,034 | 78,168 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 172 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 167 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 102 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 164 | 510 | 496 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 142 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 127 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 102 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 142 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 16 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 79 | 17,903 | 6,045 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 76 | 54,464 | 44,684 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 107 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 172 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 170 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 162 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 142 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 480 | 186,202 | 186,154 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1773 | 231,933 | 231,652 | - |
| anti-AD | domains | china | full | 成功 | 142 | 110,675 | 110,474 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 61,566 | 92 | 61,474 | 1.33 MB |
| lite | overseas | `lite-overseas.txt` | 63,139 | 92 | 63,047 | 1.36 MB |
| lite | all | `lite-all.txt` | 63,187 | 92 | 63,095 | 1.36 MB |
| standard | china | `standard-china.txt` | 347,424 | 116 | 347,308 | 7.67 MB |
| standard | overseas | `standard-overseas.txt` | 367,916 | 115 | 367,801 | 8.10 MB |
| standard | all | `standard-all.txt` | 369,190 | 116 | 369,074 | 8.12 MB |
| full | china | `full-china.txt` | 473,808 | 116 | 473,692 | 10.21 MB |
| full | overseas | `full-overseas.txt` | 507,374 | 115 | 507,259 | 11.08 MB |
| full | all | `full-all.txt` | 516,591 | 116 | 516,475 | 11.25 MB |
