# Yu-Jin Lab Database

Yu-Jin Lab 引物匹配网站。这个仓库已经包含完整的静态网页文件和共享引物库。

公开网站地址，GitHub Pages 启用后即可访问：

https://yanwang-whu.github.io/Yu-Jin-Lab-Database/

当前重要提示：如果上面的地址显示 404，说明 GitHub Pages 还没有在仓库设置里启用。网页文件已经上传完成，只需要仓库管理员打开一次 Pages 发布开关。具体步骤见 [ENABLE_GITHUB_PAGES.md](ENABLE_GITHUB_PAGES.md)。

## 引物匹配工具

网站可以帮助实验室成员：

- 粘贴 DNA/FASTA 序列并查找匹配引物；
- 查看引物结合方向和 1-based 坐标；
- 允许 0、1 或 2 个错配；
- 添加、编辑、删除、批量粘贴、导出并提交引物库更新。

共享在线引物库文件：

`primer_library.json`

便于人工查看和下载的 CSV 文件：

`primer_library.csv`

## 实验室成员如何更新在线引物库

1. 打开网站。
2. 进入 `更新` 页面。
3. 从 Excel 粘贴引物，或直接在网页中编辑引物。
4. 创建一个只给本仓库使用的 fine-grained GitHub token，并授予 `Contents: Read and write` 权限。
5. 把 token 粘贴到网页里的 `GitHub token` 输入框。
6. 点击 `提交当前引物库`。

Token 只会在使用者自己的浏览器中用于这一次 GitHub API 请求，网页不会保存 token。

没有仓库写入权限的成员也可以导出 CSV/JSON，再发给仓库维护者代为更新。

## GitHub Pages

本仓库包含 `.github/workflows/pages.yml`，用于把仓库根目录的静态网页发布到 GitHub Pages。GitHub Actions 目前无法替仓库第一次启用 Pages，因此需要管理员手动完成一次设置：打开仓库 `Settings` -> `Pages`，把 `Build and deployment` 的 `Source` 设为 `GitHub Actions`。之后每次更新 `main` 分支都会自动发布。