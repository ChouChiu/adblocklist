# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-30 20:30:07 - 2026-10-30 20:30:15 (耗时: 7.59s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,279,854
- 规范化有效规则: 1,240,639
- 误判排除规则: 2,054
- 白名单规则总数: 109
- 剪枝与去重数量: 723,990

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 168 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1636 | 60,220 | 60,108 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 873 | 3,582 | 3,558 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 48 | 214,217 | 213,813 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 20 | 16,401 | 16,324 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 18 | 17,542 | 17,528 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 49 | 51,014 | 50,997 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 16 | 1,550 | 1,536 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 16 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 116 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 121 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 80 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 76 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 77 | 397 | 325 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 102 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 68 | 185,709 | 184,794 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 27 | 83,555 | 76,089 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 407 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 334 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 85 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 124 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 123 | 258 | 244 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 77 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 79 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 112 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 108 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 117 | 17,864 | 5,935 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 73 | 54,352 | 44,654 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 265 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 248 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 80 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 75 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 78 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 709 | 193,088 | 193,042 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 2042 | 235,187 | 234,899 | - |
| anti-AD | domains | china | full | 成功 | 333 | 108,288 | 108,088 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,231 | 92 | 60,139 | 1.30 MB |
| lite | overseas | `lite-overseas.txt` | 61,801 | 92 | 61,709 | 1.33 MB |
| lite | all | `lite-all.txt` | 61,849 | 92 | 61,757 | 1.33 MB |
| standard | china | `standard-china.txt` | 340,623 | 116 | 340,507 | 7.47 MB |
| standard | overseas | `standard-overseas.txt` | 361,344 | 115 | 361,229 | 7.90 MB |
| standard | all | `standard-all.txt` | 362,543 | 116 | 362,427 | 7.92 MB |
| full | china | `full-china.txt` | 475,236 | 116 | 475,120 | 10.17 MB |
| full | overseas | `full-overseas.txt` | 509,020 | 115 | 508,905 | 11.08 MB |
| full | all | `full-all.txt` | 516,649 | 116 | 516,533 | 11.20 MB |
