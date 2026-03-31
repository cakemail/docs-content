# AI CMS — Content Management via GitHub Issues

This repository is an AI-driven CMS. Content is authored and maintained by Claude in response to GitHub Issues. Humans and AI agents create issues with instructions; Claude makes changes on the `staging` branch.

## How it works

1. An issue is created (by a human or an AI agent) with structured instructions
2. Claude (@claude) is tagged on the issue
3. Claude reads the issue, follows these instructions, and commits to `staging`
4. Changes are reviewed on the staging environment
5. When ready to release, a PR is opened from `staging → main`
6. Merging to `main` triggers translation issues automatically

## Repository structure

```
{lang}/{content-type}/{category}/{slug}.md
```

- **Languages**: `en`, `fr`, `fr-ca`, `es`
- **Content types**: `docs` (knowledge base), `best-practices`, `guides`, `api`, `resources-support`
- **Slugs**: lowercase, hyphenated, descriptive (e.g., `adding-and-editing-users.md`)

Index pages use `.mdx` and live alongside their directory (e.g., `en/best-practices.mdx`).

## Frontmatter spec

Every article MUST have frontmatter. When editing an existing article that lacks frontmatter, add it.

### Source articles (original language)

```yaml
---
title: "Article Title"
lang: en
content_type: docs
translate_to: [fr, fr-ca, es]
---
```

### Translations

```yaml
---
title: "Titre de l'article"
lang: fr-ca
content_type: docs
source: en/docs/account-settings/adding-and-editing-users.md
source_version: abc123f
---
```

- `source_version` is the commit SHA of the source article at the time of translation
- When processing a "fix translation" issue, update `source_version` to current HEAD of the source

### Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | yes | Article title in the article's language |
| `lang` | yes | Language code: `en`, `fr`, `fr-ca`, `es` |
| `content_type` | yes | One of: `docs`, `best-practices`, `guides`, `api`, `resources-support` |
| `translate_to` | source only | Target languages for translation |
| `source` | translations only | Path to source article (relative to repo root) |
| `source_version` | translations only | Commit SHA of source when translated |

## Processing issues

### Issue type: `new-article`

1. Read the issue instructions carefully
2. Determine the file path from the content type, category, and a slug derived from the title
3. Write the article following the appropriate content pattern (see below)
4. Add frontmatter with `translate_to` based on the issue's translation checkboxes
5. Add the article to `sidebars.json` in the appropriate category for all languages (see "Maintaining sidebars.json and sections.json")
6. Commit with message referencing the issue (e.g., `Add article: Title — Closes #N`)

### Issue type: `edit-article`

1. Read the existing article at the specified path
2. Apply the requested changes, preserving content you weren't asked to change
3. Update the `title` in frontmatter if it changed
4. If the title changed, update the label in `sidebars.json` if the article has an explicit label
5. Commit with message referencing the issue (e.g., `Edit article: Title — Closes #N`)

### Issue type: `fix-translation`

1. Read the translation file and its source article
2. Apply the fix described in the issue
3. Update `source_version` to the current HEAD commit of the source article
4. Commit with message referencing the issue (e.g., `Fix translation: lang Title — Closes #N`)

### Issue type: `delete-article`

1. Read the source article's frontmatter to find its `translate_to` languages
2. Delete the source article file
3. Delete all translation files (mirrored paths in each target language directory)
4. Remove the article from `sidebars.json` for all languages (see "Maintaining sidebars.json and sections.json")
5. If a category becomes empty after deletion, remove the category from `sidebars.json`
6. Commit with message referencing the issue (e.g., `Delete article: Title — Closes #N`)

### Issue type: `reorganize-content`

1. Read the issue instructions describing the desired reorganization
2. Apply changes to `sidebars.json`, `sections.json`, or both as specified
3. If articles are moved between categories, update file paths and any internal links
4. Ensure all languages stay in sync — the same structural changes must apply to every language in `sidebars.json`
5. Commit with message referencing the issue (e.g., `Reorganize: description — Closes #N`)

### Issue type: `translation-update`

1. Read the source article (at the commit specified in the issue)
2. Read the existing translation (if any)
3. Generate a full translation using the appropriate translator agent (see below)
4. Set `source_version` to the commit SHA from the issue
5. Commit with message referencing the issue (e.g., `Translate to lang: Title — Closes #N`)

## Content patterns

### Knowledge base articles (`docs`)

Structure: practical, task-oriented

```markdown
# Title

Brief introduction explaining what this article covers.

## Description

What the feature/concept is and how it works.

## Why it matters

Why the reader should care.

## Step-by-step instructions

### To [accomplish task]

1. Step one
2. Step two
3. Step three

## Related articles

- [Article title](relative-link)
```

### Best practices articles (`best-practices`)

Structure: problem-solution oriented

```markdown
# Title

## The Challenge

What problem this addresses and why it matters.

## The Impact

Data, statistics, or concrete consequences.

## The Solution

### 1. First recommendation

Explanation and details.

### 2. Second recommendation

Explanation and details.
```

## Writing style

- Clear, direct, professional tone
- Second person ("you") when addressing the reader
- Short paragraphs — 3 sentences max
- Use bullet points and numbered lists for scannability
- Bold key terms on first use
- Include concrete examples where helpful
- No filler, no fluff

## Translation

When translating content, use the appropriate agent from `.claude/agents/localization-translation/`:

| Target language | Agent |
|----------------|-------|
| `fr` | `french-translator.md` |
| `fr-ca` | `french-translator.md` + `french-canada-adapter.md` |
| `es` | `spanish-translator.md` |

**Always consult** the glossary at `.claude/agents/localization-translation/references/translation_glossary.json` for approved terminology.

**Always consult** the Quebec French references at `.claude/agents/localization-translation/references/quebec-french/` when translating to `fr-ca`.

Translation rules:
- Translations are AI-owned — produce complete, publication-ready translations
- Translate the `title` field in frontmatter
- Preserve all formatting, links, and image references
- Adapt idioms and cultural references — don't translate literally
- Follow capitalization rules for the target language (e.g., sentence case in French and Spanish)
- Never translate brand names (Cakemail, etc.)
- File path mirrors source: if source is `en/docs/foo/bar.md`, translation is `fr-ca/docs/foo/bar.md`

## Maintaining sidebars.json and sections.json

Two JSON files control site navigation and must be kept in sync with content changes:

- **`sidebars.json`** — defines the sidebar navigation tree per language. Each language key contains content-type keys, each with an array of categories and doc references.
- **`sections.json`** — defines top-level navigation sections (e.g., "Documentation", "Best Practices") with multilingual labels and descriptions.

### When to update sidebars.json

| Issue type | Action |
|-----------|--------|
| `new-article` | Add the article ID to the appropriate category. Append to the end of the category's items. If the category doesn't exist, create it in all languages. |
| `delete-article` | Remove the article ID from all languages. Remove empty categories. |
| `edit-article` | Update the label if the article has an explicit label object and the title changed. |
| `reorganize-content` | Apply the requested structural changes across all languages. |

### When to update sections.json

Only when a `reorganize-content` issue explicitly requests section-level changes (adding, removing, renaming, or reordering top-level sections).

### Rules

- All languages in `sidebars.json` must have the same structure — same categories in the same order, same articles in the same order. Only labels differ.
- Article IDs in sidebars use the path without language prefix or file extension: `best-practices/getting-started/my-article` (not `en/best-practices/getting-started/my-article.md`)
- When creating a new category, provide translated labels for all languages

## Branching and releases

All content changes are committed to the `staging` branch. The `staging` branch is auto-deployed to the staging environment for review.

To release to production, open a PR from `staging → main`. Merging to `main` deploys to production and triggers translation-sync issues for any source articles that changed.

## Commit conventions

- Each issue produces one commit on `staging`
- Commit messages reference the issue: `Closes #N`
- One article per commit (source article only — translations get their own issues)
