# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-15 11:48:46 - 2026-11-15 11:48:54 (耗时: 7.47s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,322,886
- 规范化有效规则: 1,284,236
- 误判排除规则: 1,466
- 白名单规则总数: 109
- 剪枝与去重数量: 762,638

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 118 | 1,944 | 1,898 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1221 | 62,905 | 62,792 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 870 | 3,584 | 3,560 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 104 | 235,133 | 234,737 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 46 | 16,296 | 16,219 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 46 | 18,792 | 18,778 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 86 | 77,269 | 77,237 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 34 | 1,532 | 1,518 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 32 | 1,113 | 1,097 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 159 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 86 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 72 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 37 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 167 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 105 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 150 | 191,896 | 190,976 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 82 | 84,131 | 77,262 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 178 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 206 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 32 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 90 | 544 | 530 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 91 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 30 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 60 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 105 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 105 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 325 | 17,966 | 6,106 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 194 | 54,493 | 44,711 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 91 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 106 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 159 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 31 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 34 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 563 | 182,867 | 182,818 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1535 | 227,912 | 227,633 | - |
| anti-AD | domains | china | full | 成功 | 176 | 110,265 | 110,062 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 62,914 | 92 | 62,822 | 1.36 MB |
| lite | overseas | `lite-overseas.txt` | 64,490 | 92 | 64,398 | 1.39 MB |
| lite | all | `lite-all.txt` | 64,538 | 92 | 64,446 | 1.39 MB |
| standard | china | `standard-china.txt` | 358,205 | 116 | 358,089 | 7.93 MB |
| standard | overseas | `standard-overseas.txt` | 378,503 | 115 | 378,388 | 8.35 MB |
| standard | all | `standard-all.txt` | 379,768 | 116 | 379,652 | 8.37 MB |
| full | china | `full-china.txt` | 480,418 | 116 | 480,302 | 10.37 MB |
| full | overseas | `full-overseas.txt` | 513,923 | 115 | 513,808 | 11.25 MB |
| full | all | `full-all.txt` | 521,598 | 116 | 521,482 | 11.38 MB |
