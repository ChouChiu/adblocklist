# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-02 23:21:01 - 2026-11-02 23:21:09 (耗时: 8.54s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,304,108
- 规范化有效规则: 1,265,501
- 误判排除规则: 1,443
- 白名单规则总数: 109
- 剪枝与去重数量: 750,506

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 76 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1257 | 59,958 | 59,846 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 1021 | 3,583 | 3,559 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 76 | 211,793 | 211,416 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 86 | 16,571 | 16,494 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 31 | 17,529 | 17,515 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 55 | 77,635 | 77,604 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 18 | 1,548 | 1,534 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 37 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 19 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 19 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 18 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 76 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 15 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 32 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 193 | 188,081 | 187,166 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 60 | 84,577 | 77,711 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 298 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 110 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 18 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 110 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 85 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 77 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 25 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 110 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 110 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 85 | 17,894 | 5,964 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 82 | 54,356 | 44,656 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 411 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 75 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 88 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 31 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 31 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 109 | 191,541 | 191,495 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1354 | 232,360 | 232,072 | - |
| anti-AD | domains | china | full | 成功 | 391 | 109,392 | 109,190 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,969 | 92 | 59,877 | 1.29 MB |
| lite | overseas | `lite-overseas.txt` | 61,541 | 92 | 61,449 | 1.32 MB |
| lite | all | `lite-all.txt` | 61,589 | 92 | 61,497 | 1.32 MB |
| standard | china | `standard-china.txt` | 339,913 | 116 | 339,797 | 7.47 MB |
| standard | overseas | `standard-overseas.txt` | 361,027 | 115 | 360,912 | 7.90 MB |
| standard | all | `standard-all.txt` | 362,268 | 116 | 362,152 | 7.92 MB |
| full | china | `full-china.txt` | 473,370 | 116 | 473,254 | 10.15 MB |
| full | overseas | `full-overseas.txt` | 507,316 | 115 | 507,201 | 11.04 MB |
| full | all | `full-all.txt` | 514,995 | 116 | 514,879 | 11.17 MB |
