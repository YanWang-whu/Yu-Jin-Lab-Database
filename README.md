# Yu-Jin Lab Database

This repository hosts the Yu Lab primer matcher website.

Website URL after GitHub Pages deployment:

https://yanwang-whu.github.io/Yu-Jin-Lab-Database/

## Primer Matcher

The website lets lab members:

- paste a DNA/FASTA sequence and find matching primers;
- see primer binding direction and 1-based coordinates;
- allow 0, 1, or 2 mismatches;
- add, edit, delete, paste, export, and publish primer-library updates.

The shared online primer library is stored in:

`primer_library.json`

The CSV file is kept as a convenient human-readable export:

`primer_library.csv`

## How Lab Members Update The Online Primer Library

1. Open the website.
2. Go to the `更新` tab.
3. Paste primers from Excel or edit primers in the app.
4. Create a fine-grained GitHub token for this repository with `Contents: Read and write`.
5. Paste the token into `GitHub token`.
6. Click `提交当前引物库`.

The token is used only in the user's browser for that one GitHub API request. The website does not store it.

Users without write permission can still export CSV/JSON and send the file to a repository maintainer.

## GitHub Pages

This repository includes `.github/workflows/pages.yml`, which deploys the static website from the repository root. If Pages is not enabled yet, open repository Settings, go to Pages, and select GitHub Actions as the source.
