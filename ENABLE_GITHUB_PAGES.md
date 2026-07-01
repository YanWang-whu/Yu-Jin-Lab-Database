# 开启 GitHub Pages

公开网站地址：

https://yanwang-whu.github.io/Yu-Jin-Lab-Database/

如果这个地址显示 404，说明仓库还没有第一次启用 GitHub Pages。网页文件已经在仓库里，只需要仓库管理员做一次下面的设置。

## 管理员只需操作一次

1. 打开仓库设置页：
   https://github.com/YanWang-whu/Yu-Jin-Lab-Database/settings/pages
2. 找到 `Build and deployment`。
3. 把 `Source` 选择为 `GitHub Actions`。
4. 保存设置。
5. 打开 Actions 页面：
   https://github.com/YanWang-whu/Yu-Jin-Lab-Database/actions
6. 重新运行最新失败的 `Deploy GitHub Pages` 工作流，或等待下一次提交后自动运行。

完成后，公开网站会出现在：

https://yanwang-whu.github.io/Yu-Jin-Lab-Database/

## 为什么需要这一步

GitHub 出于权限安全限制，不允许当前 GitHub Actions 安装凭据替仓库第一次创建 Pages 站点，所以自动发布工作流会在 `Setup Pages` 步骤失败，并显示类似下面的错误：

`Create Pages site failed. Error: Resource not accessible by integration`

这不是网页文件错误。管理员开启 Pages 后，后续更新会自动发布。