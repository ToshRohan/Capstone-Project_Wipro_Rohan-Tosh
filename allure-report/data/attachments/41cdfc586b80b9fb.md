# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_showtimes&tickets.spec.js >> IMDb Showtimes & Tickets >> Movie page loads successfully
- Location: tests\imdb_showtimes&tickets.spec.js:17:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h1')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h1')

```

# Test source

```ts
  1   | // @ts-check
  2   | 
  3   | import { test, expect } from '@playwright/test';
  4   | 
  5   | test.describe('IMDb Showtimes & Tickets', () => {
  6   | 
  7   |   const movieUrl = 'https://www.imdb.com/title/tt0111161/';
  8   | 
  9   |   test.beforeEach(async ({ page }) => {
  10  |     await page.goto(movieUrl);
  11  |   });
  12  |   test.afterEach(async ({ page }) => {
  13  |     console.log('Test completed');
  14  |   });
  15  | 
  16  |   // 1
  17  |   test('Movie page loads successfully', async ({ page }) => {
> 18  |     await expect(page.locator('h1')).toBeVisible();
      |                                      ^ Error: expect(locator).toBeVisible() failed
  19  |   });
  20  | 
  21  |   // 2
  22  |   test('Showtimes section is available on page or redirect exists', async ({ page }) => {
  23  |     await page.goto('https://www.imdb.com/title/tt0111161/');
  24  | 
  25  |     const showtimesText = page.locator('text=/showtimes|tickets/i');
  26  | 
  27  |     const count = await showtimesText.count();
  28  | 
  29  |     expect(count).toBeGreaterThanOrEqual(0); 
  30  |   });
  31  | 
  32  |   // 3
  33  |   test('Showtimes button is clickable', async ({ page }) => {
  34  |     const btn = page.getByRole('link', { name: /showtimes/i });
  35  | 
  36  |     if (await btn.count() > 0) {
  37  |       await btn.first().click();
  38  |     }
  39  |   });
  40  | 
  41  | //   // 4
  42  | //   test('Navigation to showtimes page works', async ({ page }) => {
  43  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  44  | 
  45  | //     if (await btn.count() > 0) {
  46  | //       await btn.first().click();
  47  | //       await page.waitForLoadState('domcontentloaded');
  48  | 
  49  | //       await expect(page).toHaveURL(/showtimes|tickets|cinemas/);
  50  | //     }
  51  | //   });
  52  | 
  53  | //   // 5
  54  | //   test('Showtimes page content loads', async ({ page }) => {
  55  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  56  | 
  57  | //     if (await btn.count() > 0) {
  58  | //       await btn.first().click();
  59  | //       await expect(page.locator('body')).toBeVisible();
  60  | //     }
  61  | //   });
  62  | 
  63  | //   // 6
  64  | //   test('Location prompt appears or handled', async ({ page }) => {
  65  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  66  | 
  67  | //     if (await btn.count() > 0) {
  68  | //       await btn.first().click();
  69  | 
  70  | //       const location = page.locator('text=/location/i');
  71  | //       if (await location.count() > 0) {
  72  | //         await expect(location.first()).toBeVisible();
  73  | //       }
  74  | //     }
  75  | //   });
  76  | 
  77  | //   // 7
  78  | //   test('Cinema listings exist', async ({ page }) => {
  79  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  80  | 
  81  | //     if (await btn.count() > 0) {
  82  | //       await btn.first().click();
  83  | 
  84  | //       const cinemas = page.locator('text=/cinema|theatre|theater/i');
  85  | //       if (await cinemas.count() > 0) {
  86  | //         await expect(cinemas.first()).toBeVisible();
  87  | //       }
  88  | //     }
  89  | //   });
  90  | 
  91  | //   // 8
  92  | //   test('Showtimes are visible', async ({ page }) => {
  93  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  94  | 
  95  | //     if (await btn.count() > 0) {
  96  | //       await btn.first().click();
  97  | 
  98  | //       const times = page.locator('text=/\\d{1,2}:\\d{2}/'); // 10:30, 14:00 format
  99  | //       if (await times.count() > 0) {
  100 | //         await expect(times.first()).toBeVisible();
  101 | //       }
  102 | //     }
  103 | //   });
  104 | 
  105 | //   // 9
  106 | //   test('Ticket links are visible', async ({ page }) => {
  107 | //     const btn = page.getByRole('link', { name: /showtimes/i });
  108 | 
  109 | //     if (await btn.count() > 0) {
  110 | //       await btn.first().click();
  111 | 
  112 | //       const links = page.locator('a[href*="ticket"], a[target="_blank"]');
  113 | //       await expect(links.first()).toBeVisible();
  114 | //     }
  115 | //   });
  116 | 
  117 | //   // 10
  118 | //   test('External ticket redirect works', async ({ page }) => {
```