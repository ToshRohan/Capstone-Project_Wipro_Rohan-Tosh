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
    - waiting for navigation to finish...
    - navigated to "https://www.imdb.com/chart/top/"

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
  47  |   // // 7. Verify movie posters load correctly
  48  |   // test('movie posters load correctly', async ({ page }) => {
  49  |   //   await page.getByRole('link', { name: '12 Angry Men', exact: true }).click();
  50  |   //   await expect(page.getByRole('link', { name: 'View ’12 Angry Men’ Poster' })).toBeVisible();
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
  61  |   test('Toggle between List and Grid view works', async ({ page }) => {
  62  |     // Locate the layout toggle button (usually defaults to List view)
  63  |     const gridViewButton = page.getByTestId('layout-switch-grid');
  64  |     const listViewButton = page.getByTestId('layout-switch-list');
  65  | 
  66  |     // Click the Grid View button
> 67  |     await gridViewButton.click();
      |                          ^ Error: locator.click: Target page, context or browser has been closed
  68  | 
  69  |     // Verify that the layout grid container becomes visible
  70  |     const gridContainer = page.locator('.ipc-metadata-list--grid');
  71  |     await expect(gridContainer).toBeVisible();
  72  | 
  73  |     // Toggle back to List View to ensure it's fully interactive
  74  |     await listViewButton.click();
  75  |     
  76  |     // Verify the standard list container is visible again
  77  |     const listContainer = page.locator('ul.ipc-metadata-list');
  78  |     await expect(listContainer).toBeVisible();
  79  |   });;
  80  | 
  81  |   // // 10. Verify ratings are valid values
  82  |   // test('Ratings are valid', async ({ page }) => {
  83  |   //   const rating = await page.locator('[data-testid="ratingGroup--imdb-rating"]').first().textContent();
  84  |   //   expect(parseFloat(rating)).toBeGreaterThan(0);
  85  |   // });
  86  | 
  87  |   // // 11. Verify search within Top 250 works
  88  |   // test('Search movie from Top 250', async ({ page }) => {
  89  |   //   await page.getByPlaceholder('Search IMDb').fill('The Dark Knight');
  90  |   //   await page.keyboard.press('Enter');
  91  |   //   await expect(page).toHaveURL(/find/);
  92  |   // });
  93  | 
  94  |   // // 12. Verify page scroll behavior
  95  |   // test('Page scroll works', async ({ page }) => {
  96  |   //   await page.mouse.wheel(0, 3000);
  97  |   //   await page.waitForTimeout(2000);
  98  |   // });
  99  | 
  100 |   // // 13. Verify page reload keeps data intact
  101 |   // test('Page reload works properly', async ({ page }) => {
  102 |   //   await page.reload();
  103 |   //   const movies = page.locator('li.ipc-metadata-list-summary-item');
  104 |   //   await expect(movies.first()).toBeVisible();
  105 |   // });
  106 | 
  107 |   // // 14. Verify no duplicate movie entries exist
  108 |   // test('No duplicate movie titles', async ({ page }) => {
  109 |   //   const titles = await page.locator('h3').allTextContents();
  110 |   //   const uniqueTitles = [...new Set(titles)];
  111 |   //   expect(titles.length).toBe(uniqueTitles.length);
  112 |   // });
  113 | 
  114 |   // // 15. Verify URL is correct after navigation
  115 |   // test('Correct URL after opening movie', async ({ page }) => {
  116 |   //   await page.locator('h3').nth(1).click();
  117 |   //   await expect(page.url()).toContain('/title/');
  118 |   // });
  119 | 
  120 | });
```