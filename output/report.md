# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-20 22:31:57 - 2026-11-20 22:32:09 (耗时: 11.74s)

## 一、总体概览

- 配置源总数: 39
- 启用源数量: 39
- 拉取成功数: 39
- 拉取失败数: 0
- 原始行总数: 1,518,825
- 规范化有效规则: 1,460,356
- 误判排除规则: 1,984
- 白名单规则总数: 116
- 剪枝与去重数量: 888,419

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 83 | 1,972 | 1,926 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1447 | 61,765 | 61,652 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 892 | 3,575 | 3,551 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 183 | 243,841 | 243,422 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 84 | 16,633 | 16,556 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 79 | 10,746 | 10,732 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 471 | 72,712 | 72,680 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 55 | 1,530 | 1,516 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 66 | 1,160 | 1,144 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 130 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 133 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 64 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 67 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 99 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 118 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 198 | 192,090 | 191,170 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 128 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 263 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 91 | 292 | 150 | - |
| Game Console Adblock List | adblock | all | standard | 成功 | 132 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 121 | 544 | 530 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 94 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 124 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 99 | 1,864 | 162 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 146 | 181 | 27 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 102 | 1,249 | 135 | - |
| EasyList China | adblock | china | standard | 成功 | 141 | 18,012 | 6,117 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 227 | 54,573 | 44,551 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 198 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 64 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | all | standard | 成功 | 133 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 118 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 122 | 144 | 127 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 783 | 206,208 | 206,157 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 2017 | 226,368 | 226,085 | - |
| anti-AD | domains | china | full | 成功 | 418 | 110,360 | 110,150 | - |
| URLhaus Malicious URL Blocklist | adblock | all | standard | 成功 | 581 | 18,896 | 2,076 | - |
| DandelionSprout's Anti-Malware List | hosts | all | standard | 成功 | 91 | 13,991 | 11,693 | - |
| Phishing Army Blocklist | domains | all | full | 成功 | 496 | 146,681 | 146,204 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 61,779 | 99 | 61,680 | 1.33 MB |
| lite | overseas | `lite-overseas.txt` | 63,356 | 99 | 63,257 | 1.36 MB |
| lite | all | `lite-all.txt` | 63,404 | 99 | 63,305 | 1.36 MB |
| standard | china | `standard-china.txt` | 373,943 | 123 | 373,820 | 8.31 MB |
| standard | overseas | `standard-overseas.txt` | 383,134 | 122 | 383,012 | 8.50 MB |
| standard | all | `standard-all.txt` | 384,347 | 123 | 384,224 | 8.52 MB |
| full | china | `full-china.txt` | 550,627 | 123 | 550,504 | 12.04 MB |
| full | overseas | `full-overseas.txt` | 564,322 | 122 | 564,200 | 12.40 MB |
| full | all | `full-all.txt` | 571,937 | 123 | 571,814 | 12.53 MB |
