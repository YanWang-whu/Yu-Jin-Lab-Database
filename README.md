# Yu-Jin Lab Database

Public web app:

https://yanwang-whu.github.io/Yu-Jin-Lab-Database/

## Current Data

- Yu Lab: primers, plasmids, strains
- Jin Lab: primers, plasmids
- Yu primers: 118 records
- Yu plasmids: 6 records imported from ApE / GenBank files
- Yu strains: 151 records merged from worm stock spreadsheets
- Tag library: 14 feature tags for automatic plasmid annotation
- Jin primer and plasmid libraries are currently empty placeholders

## Use

1. Open the GitHub Pages link.
2. Choose `Yu Lab` or `Jin Lab`.
3. Choose `引物`, `质粒`, or `品系`.
4. Primer view can match pasted DNA / FASTA sequences and edit primer records.
5. Plasmid view can search by tag, gene name, or DNA sequence, and can import `.ape`, `.gb`, `.gbk`, `.txt`, or `.dna` text files.
6. Strain view can search and edit strain, genotype, description, box, location, frozen date, and remaining tube count.

## Updating Online Data

The app can write database updates back to this repository from the browser.

1. Create a fine-grained GitHub token for this repository.
2. Give it `Contents: Read and write`.
3. Paste the token into the top-right token box.
4. Edit the database in the web page.
5. Click `提交当前数据库`.

The token is only used in the browser for that GitHub API request. The web page does not save it.

Large libraries are stored as compressed chunk files:

- `tag_library.gz.chunks.json`
- `yu_plasmid_library.gz.chunks.json`
- `yu_strain_library.gz.chunks.json`
- `jin_primer_library.gz.chunks.json`
- `jin_plasmid_library.gz.chunks.json`

`primer_library.json` remains a normal JSON file.
