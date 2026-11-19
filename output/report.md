# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-19 22:56:21 - 2026-11-19 22:56:30 (耗时: 9.20s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,514,775
- 规范化有效规则: 1,456,447
- 误判排除规则: 1,964
- 白名单规则总数: 116
- 剪枝与去重数量: 880,375

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 129 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1407 | 63,130 | 63,017 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1002 | 3,588 | 3,564 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 149 | 229,868 | 229,462 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 83 | 16,630 | 16,553 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 59 | 10,749 | 10,735 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 89 | 72,505 | 72,473 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 104 | 1,530 | 1,516 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 52 | 1,160 | 1,144 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 42 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 120 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 44 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 35 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 44 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 38 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 140 | 191,731 | 190,811 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 73 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 242 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 220 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 175 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 89 | 544 | 530 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 115 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 120 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 129 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 129 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 116 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 104 | 18,004 | 6,109 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 115 | 54,565 | 44,547 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 244 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 43 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 124 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 38 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 41 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 113 | 210,910 | 210,858 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1586 | 231,764 | 231,483 | - |
| anti-AD | domains | china | full | 成功 | 531 | 109,451 | 109,246 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 495 | 18,757 | 2,055 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 66 | 13,991 | 11,693 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 521 | 146,758 | 146,281 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 63,144 | 99 | 63,045 | 1.36 MB |
| lite | overseas | `lite-overseas.txt` | 64,723 | 99 | 64,624 | 1.39 MB |
| lite | all | `lite-all.txt` | 64,771 | 99 | 64,672 | 1.39 MB |
| standard | china | `standard-china.txt` | 362,266 | 123 | 362,143 | 8.07 MB |
| standard | overseas | `standard-overseas.txt` | 382,502 | 122 | 382,380 | 8.49 MB |
| standard | all | `standard-all.txt` | 383,714 | 123 | 383,591 | 8.51 MB |
| full | china | `full-china.txt` | 549,269 | 123 | 549,146 | 12.03 MB |
| full | overseas | `full-overseas.txt` | 568,488 | 122 | 568,366 | 12.50 MB |
| full | all | `full-all.txt` | 576,072 | 123 | 575,949 | 12.63 MB |
