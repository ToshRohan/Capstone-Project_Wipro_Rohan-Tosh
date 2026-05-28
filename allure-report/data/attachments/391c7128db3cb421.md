# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_showtimes&tickets.spec.js >> IMDb Showtimes & Tickets >> Movie page loads successfully
- Location: tests\imdb_showtimes&tickets.spec.js:17:7

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0

Call Log:
- Timeout 5000ms exceeded while waiting on the predicate
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
  18  |       await expect.poll(async () => {
  19  |       return await page.locator('h1').count();
> 20  |     }).toBeGreaterThan(0);
      |        ^ Error: expect(received).toBeGreaterThan(expected)
  21  |   });
  22  | 
  23  |   // // 2
  24  |   // test('Showtimes section is available on page or redirect exists', async ({ page }) => {
  25  |   //   await page.goto('https://www.imdb.com/title/tt0111161/');
  26  | 
  27  |   //   const showtimesText = page.locator('text=/showtimes|tickets/i');
  28  | 
  29  |   //   const count = await showtimesText.count();
  30  | 
  31  |   //   expect(count).toBeGreaterThanOrEqual(0); 
  32  |   // });
  33  | 
  34  |   // // 3
  35  |   // test('Showtimes button is clickable', async ({ page }) => {
  36  |   //   const btn = page.getByRole('link', { name: /showtimes/i });
  37  | 
  38  |   //   if (await btn.count() > 0) {
  39  |   //     await btn.first().click();
  40  |   //   }
  41  |   // });
  42  | 
  43  | //   // 4
  44  | //   test('Navigation to showtimes page works', async ({ page }) => {
  45  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  46  | 
  47  | //     if (await btn.count() > 0) {
  48  | //       await btn.first().click();
  49  | //       await page.waitForLoadState('domcontentloaded');
  50  | 
  51  | //       await expect(page).toHaveURL(/showtimes|tickets|cinemas/);
  52  | //     }
  53  | //   });
  54  | 
  55  | //   // 5
  56  | //   test('Showtimes page content loads', async ({ page }) => {
  57  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  58  | 
  59  | //     if (await btn.count() > 0) {
  60  | //       await btn.first().click();
  61  | //       await expect(page.locator('body')).toBeVisible();
  62  | //     }
  63  | //   });
  64  | 
  65  | //   // 6
  66  | //   test('Location prompt appears or handled', async ({ page }) => {
  67  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  68  | 
  69  | //     if (await btn.count() > 0) {
  70  | //       await btn.first().click();
  71  | 
  72  | //       const location = page.locator('text=/location/i');
  73  | //       if (await location.count() > 0) {
  74  | //         await expect(location.first()).toBeVisible();
  75  | //       }
  76  | //     }
  77  | //   });
  78  | 
  79  | //   // 7
  80  | //   test('Cinema listings exist', async ({ page }) => {
  81  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  82  | 
  83  | //     if (await btn.count() > 0) {
  84  | //       await btn.first().click();
  85  | 
  86  | //       const cinemas = page.locator('text=/cinema|theatre|theater/i');
  87  | //       if (await cinemas.count() > 0) {
  88  | //         await expect(cinemas.first()).toBeVisible();
  89  | //       }
  90  | //     }
  91  | //   });
  92  | 
  93  | //   // 8
  94  | //   test('Showtimes are visible', async ({ page }) => {
  95  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  96  | 
  97  | //     if (await btn.count() > 0) {
  98  | //       await btn.first().click();
  99  | 
  100 | //       const times = page.locator('text=/\\d{1,2}:\\d{2}/'); // 10:30, 14:00 format
  101 | //       if (await times.count() > 0) {
  102 | //         await expect(times.first()).toBeVisible();
  103 | //       }
  104 | //     }
  105 | //   });
  106 | 
  107 | //   // 9
  108 | //   test('Ticket links are visible', async ({ page }) => {
  109 | //     const btn = page.getByRole('link', { name: /showtimes/i });
  110 | 
  111 | //     if (await btn.count() > 0) {
  112 | //       await btn.first().click();
  113 | 
  114 | //       const links = page.locator('a[href*="ticket"], a[target="_blank"]');
  115 | //       await expect(links.first()).toBeVisible();
  116 | //     }
  117 | //   });
  118 | 
  119 | //   // 10
  120 | //   test('External ticket redirect works', async ({ page }) => {
```