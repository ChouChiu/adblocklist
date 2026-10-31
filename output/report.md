# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-31 10:13:42 - 2026-10-31 10:13:50 (耗时: 7.13s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,280,052
- 规范化有效规则: 1,240,836
- 误判排除规则: 2,055
- 白名单规则总数: 109
- 剪枝与去重数量: 723,775

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 94 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1273 | 60,192 | 60,080 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 764 | 3,582 | 3,558 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 112 | 214,217 | 213,813 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 64 | 16,401 | 16,324 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 54 | 17,575 | 17,561 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 75 | 51,014 | 50,997 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 34 | 1,550 | 1,536 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 39 | 1,090 | 1,074 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 39 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 28 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 39 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 32 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 142 | 398 | 326 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 39 | 383 | 369 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 105 | 185,940 | 185,025 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 68 | 83,555 | 76,089 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 348 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 253 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 30 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 124 | 504 | 490 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 139 | 261 | 247 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 31 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 96 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 84 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 33 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 216 | 17,872 | 5,943 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 283 | 54,354 | 44,656 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 277 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 113 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 31 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 38 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 37 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 84 | 193,088 | 193,042 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1776 | 235,134 | 234,845 | - |
| anti-AD | domains | china | full | 成功 | 584 | 108,288 | 108,088 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 60,203 | 92 | 60,111 | 1.30 MB |
| lite | overseas | `lite-overseas.txt` | 61,773 | 92 | 61,681 | 1.32 MB |
| lite | all | `lite-all.txt` | 61,821 | 92 | 61,729 | 1.33 MB |
| standard | china | `standard-china.txt` | 340,885 | 116 | 340,769 | 7.48 MB |
| standard | overseas | `standard-overseas.txt` | 361,602 | 115 | 361,487 | 7.91 MB |
| standard | all | `standard-all.txt` | 362,805 | 116 | 362,689 | 7.92 MB |
| full | china | `full-china.txt` | 475,498 | 116 | 475,382 | 10.18 MB |
| full | overseas | `full-overseas.txt` | 509,429 | 115 | 509,314 | 11.08 MB |
| full | all | `full-all.txt` | 517,061 | 116 | 516,945 | 11.21 MB |
