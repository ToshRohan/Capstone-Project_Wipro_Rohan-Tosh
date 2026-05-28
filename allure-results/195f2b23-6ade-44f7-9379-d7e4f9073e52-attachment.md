# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_top250movies.spec.js >> IMDb Top 250 Movies >> IMDb Top 250 movie posters load correctly
- Location: tests\imdb_top250movies.spec.js:52:7

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 10
Received:   0
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
  52  |   test('IMDb Top 250 movie posters load correctly', async ({ page }) => {
  53  |     const posters = page.locator('td.posterColumn img');
  54  | 
  55  |   const count = await posters.count();
> 56  |   expect(count).toBeGreaterThan(10);
      |                 ^ Error: expect(received).toBeGreaterThan(expected)
  57  | 
  58  |   await expect(posters.first()).toBeVisible();
  59  |   });
  60  | 
  61  |   // // 8. Verify clicking movie opens detail page
  62  |   // test('Open movie details page', async ({ page }) => {
  63  |   //   await page.locator('h3').first().click();
  64  |   //   await expect(page).toHaveURL(/title/);
  65  |   // });
  66  | 
  67  |   // // 9. Verify ranking order is sequential
  68  |   // test('Ranking order starts from 1', async ({ page }) => {
  69  |   //   const firstMovie = await page.locator('h3').first().textContent();
  70  |   //   expect(firstMovie).toContain('1.');
  71  |   // });
  72  | 
  73  |   // // 10. Verify ratings are valid values
  74  |   // test('Ratings are valid', async ({ page }) => {
  75  |   //   const rating = await page.locator('[data-testid="ratingGroup--imdb-rating"]').first().textContent();
  76  |   //   expect(parseFloat(rating)).toBeGreaterThan(0);
  77  |   // });
  78  | 
  79  |   // // 11. Verify search within Top 250 works
  80  |   // test('Search movie from Top 250', async ({ page }) => {
  81  |   //   await page.getByPlaceholder('Search IMDb').fill('The Dark Knight');
  82  |   //   await page.keyboard.press('Enter');
  83  |   //   await expect(page).toHaveURL(/find/);
  84  |   // });
  85  | 
  86  |   // // 12. Verify page scroll behavior
  87  |   // test('Page scroll works', async ({ page }) => {
  88  |   //   await page.mouse.wheel(0, 3000);
  89  |   //   await page.waitForTimeout(2000);
  90  |   // });
  91  | 
  92  |   // // 13. Verify page reload keeps data intact
  93  |   // test('Page reload works properly', async ({ page }) => {
  94  |   //   await page.reload();
  95  |   //   const movies = page.locator('li.ipc-metadata-list-summary-item');
  96  |   //   await expect(movies.first()).toBeVisible();
  97  |   // });
  98  | 
  99  |   // // 14. Verify no duplicate movie entries exist
  100 |   // test('No duplicate movie titles', async ({ page }) => {
  101 |   //   const titles = await page.locator('h3').allTextContents();
  102 |   //   const uniqueTitles = [...new Set(titles)];
  103 |   //   expect(titles.length).toBe(uniqueTitles.length);
  104 |   // });
  105 | 
  106 |   // // 15. Verify URL is correct after navigation
  107 |   // test('Correct URL after opening movie', async ({ page }) => {
  108 |   //   await page.locator('h3').nth(1).click();
  109 |   //   await expect(page.url()).toContain('/title/');
  110 |   // });
  111 | 
  112 | });
```