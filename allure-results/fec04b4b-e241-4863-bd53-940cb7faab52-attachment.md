# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_top250movies.spec.js >> IMDb Top 250 Movies >> Ranking order starts from 1
- Location: tests\imdb_top250movies.spec.js:66:7

# Error details

```
Error: locator.textContent: Test ended.
Call log:
  - waiting for locator('td.titleColumn').first()

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('IMDb Top 250 Movies', () => {
  4   | test.beforeEach(async ({ page }) => {
  5   |   await page.goto('https://www.imdb.com/chart/top/');
  6   | });
  7   | 
  8   | test.afterEach(async ({ page }) => {
  9   |     console.log('Test completed');
  10  | });
  11  | 
  12  |   // // 1. Verify Top 250 page opens successfully
  13  |   // test('Top 250 page opens', async ({ page }) => {
  14  |   //   await expect(page).toHaveURL(/top/);
  15  |   // });
  16  | 
  17  |   // // 2. Verify movie list is displayed
  18  |   // test('Movie list is visible', async ({ page }) => {
  19  |   //   const movies = page.locator('li.ipc-metadata-list-summary-item');
  20  |   //   await expect(movies.first()).toBeVisible();
  21  |   // });
  22  | 
  23  |   // // 3. Verify ranking numbers are visible
  24  |   // test('Ranking numbers are visible', async ({ page }) => {
  25  |   //   const rank = page.locator('h3').first();
  26  |   //   await expect(rank).toBeVisible();
  27  |   // });
  28  | 
  29  |   // // 4. Verify movie titles are displayed
  30  |   // test('Movie titles are displayed', async ({ page }) => {
  31  |   //   const title = page.locator('h3').first();
  32  |   //   await expect(title).toContainText(/\w+/);
  33  |   // });
  34  | 
  35  |   // // 5. Verify movie ratings are visible
  36  |   // test('Movie ratings are visible', async ({ page }) => {
  37  |   //   const rating = page.locator('[data-testid="ratingGroup--imdb-rating"]');
  38  |   //   await expect(rating.first()).toBeVisible();
  39  |   // });
  40  | 
  41  |   // // 6. Verify release years are shown
  42  |   // test('Release year is displayed', async ({ page }) => {
  43  |   //   const year = page.locator('.cli-title-metadata');
  44  |   //   await expect(year.first()).toBeVisible();
  45  |   // });
  46  | 
  47  |   // 7. Verify movie posters load correctly
  48  |   // test('Movie posters are visible', async ({ page }) => {
  49  |   //   const poster = page.locator('img').first();
  50  |   //   await expect(poster).toBeVisible();
  51  |   // });
  52  | 
  53  | 
  54  |   // // 8. Verify clicking movie opens detail page
  55  |   // test('Open movie details page', async ({ page }) => {
  56  |   //   await page.locator('h3').first().click();
  57  |   //   await expect(page).toHaveURL(/title/);
  58  |   // });
  59  | 
  60  |   // // 9. Verify ranking order is sequential
  61  |   // test('Ranking order starts from 1', async ({ page }) => {
  62  |   //   const firstMovie = await page.locator('h3').first().textContent();
  63  |   //   expect(firstMovie).toContain('1.');
  64  |   // });
  65  | 
  66  |   test('Ranking order starts from 1', async ({ page }) => {
  67  |   const firstRow = page.locator('td.titleColumn').first();
> 68  |   const text = await firstRow.textContent();
      |                               ^ Error: locator.textContent: Test ended.
  69  | 
  70  |   expect(text).toContain('1.');
  71  | });
  72  |      
  73  | 
  74  |   // // 10. Verify ratings are valid values
  75  |   // test('Ratings are valid', async ({ page }) => {
  76  |   //   const rating = await page.locator('[data-testid="ratingGroup--imdb-rating"]').first().textContent();
  77  |   //   expect(parseFloat(rating)).toBeGreaterThan(0);
  78  |   // });
  79  | 
  80  |   // // 11. Verify search within Top 250 works
  81  |   // test('Search movie from Top 250', async ({ page }) => {
  82  |   //   await page.getByPlaceholder('Search IMDb').fill('The Dark Knight');
  83  |   //   await page.keyboard.press('Enter');
  84  |   //   await expect(page).toHaveURL(/find/);
  85  |   // });
  86  | 
  87  |   // // 12. Verify page scroll behavior
  88  |   // test('Page scroll works', async ({ page }) => {
  89  |   //   await page.mouse.wheel(0, 3000);
  90  |   //   await page.waitForTimeout(2000);
  91  |   // });
  92  | 
  93  |   // // 13. Verify page reload keeps data intact
  94  |   // test('Page reload works properly', async ({ page }) => {
  95  |   //   await page.reload();
  96  |   //   const movies = page.locator('li.ipc-metadata-list-summary-item');
  97  |   //   await expect(movies.first()).toBeVisible();
  98  |   // });
  99  | 
  100 |   // // 14. Verify no duplicate movie entries exist
  101 |   // test('No duplicate movie titles', async ({ page }) => {
  102 |   //   const titles = await page.locator('h3').allTextContents();
  103 |   //   const uniqueTitles = [...new Set(titles)];
  104 |   //   expect(titles.length).toBe(uniqueTitles.length);
  105 |   // });
  106 | 
  107 |   // // 15. Verify URL is correct after navigation
  108 |   // test('Correct URL after opening movie', async ({ page }) => {
  109 |   //   await page.locator('h3').nth(1).click();
  110 |   //   await expect(page.url()).toContain('/title/');
  111 |   // });
  112 | 
  113 | });
```