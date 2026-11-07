# AdBlocklist 构建与审计报告

> 构建时间: 2026-11-07 19:58:22 - 2026-11-07 19:58:31 (耗时: 9.11s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,305,902
- 规范化有效规则: 1,267,197
- 误判排除规则: 1,594
- 白名单规则总数: 109
- 剪枝与去重数量: 751,201

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 49 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 962 | 61,000 | 60,888 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 715 | 3,580 | 3,556 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 117 | 211,484 | 210,949 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 25 | 16,390 | 16,313 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 39 | 18,819 | 18,805 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 73 | 76,668 | 76,637 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 19 | 1,533 | 1,519 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 19 | 1,124 | 1,108 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 64 | 363 | 342 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 48 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 66 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 116 | 329 | 315 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 53 | 379 | 309 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 53 | 387 | 373 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 96 | 190,501 | 189,583 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 48 | 84,577 | 77,711 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 265 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 117 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 28 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 68 | 506 | 492 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 63 | 257 | 243 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 63 | 118 | 104 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 25 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 60 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 20 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 52 | 17,882 | 6,024 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 143 | 54,373 | 44,657 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 160 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 57 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 57 | 559 | 545 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 76 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 66 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 341 | 189,588 | 189,540 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1114 | 232,081 | 231,799 | - |
| anti-AD | domains | china | full | 成功 | 135 | 110,047 | 109,846 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 61,011 | 92 | 60,919 | 1.32 MB |
| lite | overseas | `lite-overseas.txt` | 62,584 | 92 | 62,492 | 1.34 MB |
| lite | all | `lite-all.txt` | 62,632 | 92 | 62,540 | 1.34 MB |
| standard | china | `standard-china.txt` | 344,327 | 116 | 344,211 | 7.63 MB |
| standard | overseas | `standard-overseas.txt` | 366,469 | 115 | 366,354 | 8.08 MB |
| standard | all | `standard-all.txt` | 367,771 | 116 | 367,655 | 8.10 MB |
| full | china | `full-china.txt` | 473,723 | 116 | 473,607 | 10.21 MB |
| full | overseas | `full-overseas.txt` | 508,324 | 115 | 508,209 | 11.11 MB |
| full | all | `full-all.txt` | 515,996 | 116 | 515,880 | 11.23 MB |
