# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_top250movies.spec.js >> IMDb Top 250 Movies >> Toggle between List and Grid view works
- Location: tests\imdb_top250movies.spec.js:61:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('layout-switch-grid')
    - waiting for" https://www.imdb.com/chart/top/" navigation to finish...
    - navigated to "https://www.imdb.com/chart/top/"

```

```
Error: browserContext.close: Target page, context or browser has been closed
```