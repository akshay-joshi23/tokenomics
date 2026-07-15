# LLM inference cost explorer

Interactive research comparing frontier model APIs, managed open-model APIs,
DePIN GPU leases, and owned LLM infrastructure across monthly token usage.

## Research files

- [Interactive explorer](https://llm-inference-cost-explorer.akshay-joshi441666.chatgpt.site)
- [Google Sheets workbook](https://docs.google.com/spreadsheets/d/16O34xjgxPgpnPYH7_9SfqLr2Projzqag95l0T7sDBqE/edit?usp=drivesdk)
- The downloadable `.xlsx` workbook is also bundled with the site.

## Run locally

The deployable application is in `web/`.

```bash
cd web
pnpm install
pnpm dev
```

Published prices and live market quotes are separated from analyst-estimated
infrastructure costs. Model quality is not normalized across the curves.
