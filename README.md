# Cakemail Documentation Content

Multi-lingual documentation content for Cakemail products.

## Structure

```
en/           # English (source language)
fr/           # French
fr-ca/        # French (Canada)
fr-qc/        # French (Québec)
es/           # Spanish
```

Each language directory contains:

- `docs/` — Product documentation
- `best-practices/` — Email marketing best practices
- `guides/` — Developer guides (EN only for now)
- `claude/` — Cakemail for Claude (EN, FR)
- `resources-support/` — Changelog and resources (EN only for now)

## Consumers

This content is consumed as a git submodule by:

- [docs.cakemail.com](https://github.com/cakemail/docs.cakemail.com) — Documentation website
