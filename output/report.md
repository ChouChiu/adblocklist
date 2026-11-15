# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-15 20:52:23 - 2026-11-15 20:52:32 (耗时: 9.18s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,324,767
- 规范化有效规则: 1,286,119
- 误判排除规则: 1,466
- 白名单规则总数: 109
- 剪枝与去重数量: 762,314

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 17 | 1,944 | 1,898 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1652 | 63,051 | 62,938 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1076 | 3,584 | 3,560 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 91 | 237,262 | 236,866 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 33 | 16,557 | 16,480 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 32 | 18,790 | 18,776 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 42 | 77,380 | 77,348 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 25 | 1,532 | 1,518 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 33 | 1,113 | 1,097 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 100 | 424 | 403 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 122 | 162 | 138 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 100 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 100 | 474 | 460 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 100 | 412 | 339 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 100 | 396 | 382 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 100 | 192,056 | 191,136 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 52 | 82,924 | 76,057 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 410 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 191 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 100 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 100 | 544 | 530 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 191 | 317 | 303 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 100 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 24 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 23 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 27 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 157 | 17,967 | 6,107 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 203 | 54,493 | 44,711 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 285 | 13,417 | 13,084 | - |
| 1024_hosts | hosts | china | standard | 成功 | 100 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 129 | 561 | 547 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 100 | 78 | 64 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 100 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 380 | 182,888 | 182,839 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 2006 | 228,173 | 227,894 | - |
| anti-AD | domains | china | full | 成功 | 280 | 110,265 | 110,062 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 63,060 | 92 | 62,968 | 1.36 MB |
| lite | overseas | `lite-overseas.txt` | 64,636 | 92 | 64,544 | 1.39 MB |
| lite | all | `lite-all.txt` | 64,684 | 92 | 64,592 | 1.39 MB |
| standard | china | `standard-china.txt` | 360,749 | 116 | 360,633 | 7.99 MB |
| standard | overseas | `standard-overseas.txt` | 380,627 | 115 | 380,512 | 8.40 MB |
| standard | all | `standard-all.txt` | 381,890 | 116 | 381,774 | 8.42 MB |
| full | china | `full-china.txt` | 482,959 | 116 | 482,843 | 10.43 MB |
| full | overseas | `full-overseas.txt` | 516,128 | 115 | 516,013 | 11.30 MB |
| full | all | `full-all.txt` | 523,805 | 116 | 523,689 | 11.43 MB |
