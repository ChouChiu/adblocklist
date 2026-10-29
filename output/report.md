# AdBlocklist 构建与审计报告

> 构建时间: 2026-10-29 20:56:19 - 2026-10-29 20:56:29 (耗时: 9.47s)

## 一、总体概览

- 配置源总数: 36
- 启用源数量: 36
- 拉取成功数: 36
- 拉取失败数: 0
- 原始行总数: 1,299,883
- 规范化有效规则: 1,260,736
- 误判排除规则: 1,987
- 白名单规则总数: 109
- 剪枝与去重数量: 743,571

## 二、规则源明细状态

| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AWAvenue 秋风广告规则 | hosts | china | lite | 成功 | 84 | 1,954 | 1,914 | - |
| OISD (Small) | adblock | all | lite | 成功 | 1795 | 59,921 | 59,809 | - |
| Peter Lowe's List | adblock | overseas | lite | 成功 | 2912 | 3,587 | 3,563 | - |
| HaGeZi's Multi PRO | adblock | all | standard | 成功 | 158 | 211,686 | 211,348 | - |
| HaGeZi's DoH/VPN/Proxy Bypass | adblock | all | standard | 成功 | 121 | 16,356 | 16,279 | - |
| HaGeZi's Fake, Scam & Fraud | adblock | all | standard | 成功 | 87 | 17,734 | 17,720 | - |
| HaGeZi's Pop-up Ads | adblock | all | standard | 成功 | 319 | 53,770 | 53,753 | - |
| HaGeZi's Dynamic DNS (DynDNS) | adblock | all | standard | 成功 | 65 | 1,555 | 1,541 | - |
| HaGeZi's Badware File Hoster | adblock | all | standard | 成功 | 63 | 1,098 | 1,082 | - |
| HaGeZi's Native Tracker (Xiaomi) | adblock | china | standard | 成功 | 119 | 364 | 343 | - |
| HaGeZi's Native Tracker (Huawei) | adblock | china | standard | 成功 | 129 | 149 | 125 | - |
| HaGeZi's Native Tracker (Samsung) | adblock | all | standard | 成功 | 136 | 215 | 201 | - |
| HaGeZi's Native Tracker (LG webOS TV) | adblock | all | standard | 成功 | 141 | 245 | 231 | - |
| HaGeZi's Native Tracker (Windows & Office) | adblock | all | standard | 成功 | 136 | 397 | 325 | - |
| HaGeZi's Native Tracker (Amazon) | adblock | overseas | standard | 成功 | 63 | 382 | 368 | - |
| AdGuard DNS Filter | adblock | all | standard | 成功 | 198 | 185,328 | 184,413 | - |
| StevenBlack Unified Hosts | hosts | overseas | standard | 成功 | 128 | 83,555 | 76,089 | - |
| AdAway Default Blocklist | hosts | all | standard | 成功 | 618 | 10,608 | 6,520 | - |
| SmartTV Blocklist (AGH) | adblock | all | standard | 成功 | 405 | 292 | 150 | - |
| Game Console Adblock List | adblock | overseas | standard | 成功 | 122 | 90 | 17 | - |
| HaGeZi's Native Tracker (OPPO & Realme) | adblock | china | standard | 成功 | 129 | 503 | 489 | - |
| HaGeZi's Native Tracker (Vivo) | adblock | china | standard | 成功 | 123 | 258 | 244 | - |
| HaGeZi's Native Tracker (Apple) | adblock | all | standard | 成功 | 212 | 124 | 110 | - |
| CJX's Annoyance List | adblock | china | standard | 成功 | 62 | 1,864 | 164 | - |
| 乘风视频过滤规则 (xinggsf) | adblock | china | standard | 成功 | 129 | 181 | 29 | - |
| 乘风通用过滤规则 (xinggsf) | adblock | china | standard | 成功 | 129 | 1,249 | 163 | - |
| EasyList China | adblock | china | standard | 成功 | 374 | 17,855 | 5,926 | - |
| EasyPrivacy | adblock | all | standard | 成功 | 389 | 54,350 | 44,653 | - |
| Dan Pollock's hosts | hosts | overseas | standard | 成功 | 276 | 13,298 | 12,965 | - |
| 1024_hosts | hosts | china | standard | 成功 | 59 | 3,242 | 3,224 | - |
| HaGeZi's Native Tracker (TikTok) | adblock | china | standard | 成功 | 128 | 564 | 550 | - |
| HaGeZi's Native Tracker (Roku) | adblock | overseas | standard | 成功 | 118 | 71 | 57 | - |
| HaGeZi's The World's Most Abused TLDs (Spam TLDs) | adblock | all | full | 成功 | 224 | 144 | 10 | - |
| HaGeZi's Threat Intelligence Feeds (TIF Mini) | adblock | all | full | 成功 | 211 | 213,825 | 213,780 | - |
| OISD (Big) | adblock | overseas | full | 成功 | 1870 | 234,774 | 234,486 | - |
| anti-AD | domains | china | full | 成功 | 459 | 108,295 | 108,095 | - |

## 三、9 类规则文件输出指标

| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| lite | china | `lite-china.txt` | 59,932 | 92 | 59,840 | 1.29 MB |
| lite | overseas | `lite-overseas.txt` | 61,506 | 92 | 61,414 | 1.32 MB |
| lite | all | `lite-all.txt` | 61,554 | 92 | 61,462 | 1.32 MB |
| standard | china | `standard-china.txt` | 338,732 | 116 | 338,616 | 7.41 MB |
| standard | overseas | `standard-overseas.txt` | 359,652 | 115 | 359,537 | 7.84 MB |
| standard | all | `standard-all.txt` | 360,895 | 116 | 360,779 | 7.86 MB |
| full | china | `full-china.txt` | 474,402 | 116 | 474,286 | 10.14 MB |
| full | overseas | `full-overseas.txt` | 509,476 | 115 | 509,361 | 11.08 MB |
| full | all | `full-all.txt` | 517,165 | 116 | 517,049 | 11.21 MB |
