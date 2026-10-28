# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-28 20:51:00 - 2026-10-28 20:51:11 (耗时: 10.35s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,302,060
- 规范化有效规则: 1,262,642
- 误判排除规则: 2,261
- 白名单规则总数: 109
- 剪枝与去重数量: 742,826

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 86 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1279 | 59,662 | 59,550 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 2971 | 3,587 | 3,563 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 102 | 211,057 | 210,719 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 28 | 16,351 | 16,274 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 35 | 17,701 | 17,687 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 175 | 54,088 | 54,071 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 86 | 1,555 | 1,541 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 24 | 1,098 | 1,082 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 87 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 85 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 86 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 85 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 86 | 397 | 325 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 85 | 382 | 368 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 135 | 184,968 | 184,053 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 85 | 82,964 | 75,220 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 406 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 214 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 29 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 85 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 86 | 258 | 244 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 23 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 30 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 85 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 30 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 163 | 17,846 | 5,918 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 159 | 54,345 | 44,648 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 136 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 101 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 86 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 85 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 85 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 80 | 213,279 | 213,234 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1556 | 234,537 | 234,251 | - |
| anti-AD | domains | china | full | 成功 | 1214 | 112,828 | 112,632 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,673 | 92 | 59,581 | 1.28 MB |
| lite | overseas | `lite-overseas.txt` | 61,247 | 92 | 61,155 | 1.31 MB |
| lite | all | `lite-all.txt` | 61,295 | 92 | 61,203 | 1.31 MB |
| standard | china | `standard-china.txt` | 338,071 | 116 | 337,955 | 7.40 MB |
| standard | overseas | `standard-overseas.txt` | 358,918 | 115 | 358,803 | 7.83 MB |
| standard | all | `standard-all.txt` | 360,160 | 116 | 360,044 | 7.85 MB |
| full | china | `full-china.txt` | 477,195 | 116 | 477,079 | 10.20 MB |
| full | overseas | `full-overseas.txt` | 508,398 | 115 | 508,283 | 11.06 MB |
| full | all | `full-all.txt` | 519,816 | 116 | 519,700 | 11.27 MB |
