# adblocklist

> 最后更新: {{UPDATE_TIME}} | 规则总数: {{TOTAL_UNIQUE_RULES}} | 规则源状态: {{SUCCESS_SOURCES_COUNT}}/{{ENABLED_SOURCES_COUNT}} 正常

定时从多个上游规则源同步规则，完成解析、规范化、去重与子域名剪枝，生成 AdGuard / Adblock Plus 兼容的规则订阅。

## 订阅地址

生成文件分为 3 种规模版本与 3 种覆盖范围，共 9 个文件：

| 版本 | 区域 | 文件名 | 规则数 | 白名单 | 适用场景 | 订阅链接 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
{{MATRIX_ROWS}}

### 版本说明
- lite（精简版）：只收录 OISD Small、AWAvenue、Peter Lowe 等极低误杀的核心源，适合路由器、智能电视。
- standard（标准版）：在精简版基础上增加 HaGeZi Multi PRO、AdGuard DNS、StevenBlack、DoH 防绕过、反诈骗、弹窗过滤及多平台原生遥测拦截，推荐主力使用。
- full（完整版）：包含全部启用源（含 HaGeZi TIF 威胁情报、OISD Big、anti-AD 等大体积源），通过内置白名单压制误杀，适合追求高强度防御与安全拦截的场景。

---

## 规则源

当前在 `config/sources.yaml` 中配置的上游来源列表：

| 规则源 | 格式 | 区域 | 层级 | 状态 | 优先级 | 采纳数 | 上游地址 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
{{SOURCES_ROWS}}

---

## 防误杀机制

1. 排除基础云服务（`config/exclude.txt`）：剔除公共 CDN（Cloudflare, Akamai, 阿里/腾讯云 CDN）、手机推送与系统更新、人机验证域名。
2. 白名单放行（`config/allowlist.txt`）：合并 AdGuard 官方中文白名单与 QQ 音乐、小爱音箱、电商、支付等常见误杀场景放行规则。
3. 优先级保障：所有白名单规则（`@@||...`）规范化后置顶输出。

---

## 本地运行

要求环境：[Bun](https://bun.sh/) 1.4+

```bash
# 1. 安装依赖
bun install

# 2. 运行完整合并流程（拉取、清洗、去重、生成 9 个规则文件并更新 README）
bun run start

# 3. 离线快速验证（使用本地测试数据）
bun run start --no-remote --dry-run

# 4. 代码检查与测试
bun run lint
bun run test
```

---

## 误杀反馈与临时放行

若发现正常网站或应用功能受损：
1. 临时放行：可在客户端自定义规则中添加 `@@||example.com^$important`。
2. 提交反馈：请在 GitHub Issues 提供受影响域名、应用名称及所使用的规则版本。

## 许可证

本项目脚本基于 MIT 协议开源，各上游规则版权归原作者所有。
