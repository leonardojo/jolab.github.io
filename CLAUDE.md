# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Quarto website for "The Jo Lab" (Utrecht University research group). Static site built from `.qmd` files with R code chunks for dynamic content. Hosted on GitHub Pages.

## Build Commands

```bash
quarto render          # Build site (output to docs/)
quarto preview         # Local dev server with hot reload
```

## Architecture

- **_quarto.yml** - Site configuration: navbar, theme ("pulse"), footer, output directory (`docs/`)
- **style.css** - Custom styling (green theme #008552, flexbox layouts, responsive images)
- **7 content pages** (.qmd files): index, team, research, publications, labculture, news, opportunities

### Dynamic vs Static Content

Two pages use R code chunks to generate content from Excel data files:
- **team.qmd** reads `data/team.xlsx` - renders team member cards with photos, links, flag icons
- **publications.qmd** reads `data/publications.xlsx` - fetches citations via `rcrossref` package, groups by year, bolds corresponding/co-first authors

All other pages (news, research, opportunities, labculture, index) are static Markdown/HTML.

### R Dependencies

`readxl`, `tidyverse`, `rcrossref`, `dplyr`, `stringr`

### Image Organization

Images live in `images/` with subdirectories: `logo/`, `group_pictures/`, `lab_members/`, `news/`, `research/`

## Key Conventions

- Pages use `page-layout: full` for full-width containers
- Inline HTML tables used for side-by-side layouts
- External CDN for flag-icons and Bootstrap icons
- Output directory `docs/` is committed (GitHub Pages serves from it)
- `.nojekyll` file in docs/ disables Jekyll processing
- RStudio project file: `WEBSITE.Rproj`
