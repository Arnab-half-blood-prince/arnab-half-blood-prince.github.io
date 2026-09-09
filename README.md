# Arnab Chakraborty - academic website

This repository contains the source for [arnab-half-blood-prince.github.io](https://arnab-half-blood-prince.github.io/). The site is generated with [Zola](https://www.getzola.org/) and deployed to the `gh-pages` branch by GitHub Actions whenever `main` is updated.

## Updating content

- Home page: `content/_index.md`
- Research: `content/Research/_index.md`
- Publications: `content/Publications/_index.md`
- Software: `content/Softwares/_index.md`
- Learning resources: `content/Resources/_index.md`
- Talks and teaching: `content/Talks/_index.md`
- CV summary and PDF: `content/CV/`

Images used on the research page live beside the research content in `content/Research/`. Site-wide assets, including the profile image, stylesheet, and JavaScript, live in `static/`.

The Resources page contains four starter categories. Replace a “Links coming soon” line with a short Markdown list whenever a resource is ready to add.

## Local preview

Install Zola 0.17.2 or a compatible later version, then run:

```bash
zola serve
```

Before publishing, verify the production build:

```bash
zola build
```
