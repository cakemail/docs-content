# Cakemail Documentation Content

Multilingual documentation content for Cakemail products, managed by an AI-driven CMS.

## How content is managed

Content is managed through **GitHub Issues**. You create an issue using one of the templates below, tag `@claude`, and Claude opens a PR with the changes. A human reviews and merges.

### Issue types

| Template | What it does |
|----------|-------------|
| **New Article** | Write a new article in any language and content type |
| **Edit Article** | Request changes to an existing article |
| **Delete Article** | Remove an article and all its translations |
| **Reorganize Content** | Change sidebar ordering, categories, or site sections |
| **Fix Translation** | Report and fix a problem in a translated article |
| **Translation Update** | *(auto-created)* Sync a translation after the source article changes |

### Workflow

1. Go to **Issues → New Issue** and pick a template
2. Fill in the fields and submit
3. Tag `@claude` in a comment (or the issue body)
4. Claude opens a PR with the changes
5. Review and merge the PR
6. For source articles with translations, merging automatically creates translation-update issues

## Repository structure

```
{lang}/{content-type}/{category}/{slug}.md
```

### Languages

| Code | Language |
|------|----------|
| `en` | English (primary source language) |
| `fr` | French |
| `fr-ca` | French — Canada |
| `es` | Spanish |

`fr-qc/` is deprecated and should not be used for new content.

### Content types

| Directory | Description |
|-----------|-------------|
| `docs/` | Product documentation — task-oriented knowledge base articles |
| `best-practices/` | Email marketing best practices — problem-solution oriented |
| `guides/` | Developer guides for API integration |
| `claude/` | Cakemail for Claude (MCP integration) |
| `api/` | API reference |
| `resources-support/` | Changelog, release notes, and support resources |

Index pages use `.mdx` and live alongside their directory (e.g., `en/best-practices.mdx`).

### Navigation files

| File | Purpose |
|------|---------|
| `sidebars.json` | Sidebar navigation tree per language — article ordering and categories |
| `sections.json` | Top-level navigation sections with multilingual labels |

These files are updated automatically as part of article creation, deletion, and reorganization PRs.

## Consumers

This content is consumed as a git submodule by:

- [docs.cakemail.com](https://github.com/cakemail/docs.cakemail.com) — Documentation website
