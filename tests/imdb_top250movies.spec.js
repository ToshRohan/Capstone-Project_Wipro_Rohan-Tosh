import { test, expect } from '@playwright/test';

test.describe('IMDb Top 250 Movies', () => {
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.imdb.com/chart/top/');
});

test.afterEach(async ({ page }) => {
    console.log('Test completed');
});

  // // 1. Verify Top 250 page opens successfully
  // test('Top 250 page opens', async ({ page }) => {
  //   await expect(page).toHaveURL(/top/);
  // });

  // // 2. Verify movie list is displayed
  // test('Movie list is visible', async ({ page }) => {
  //   const movies = page.locator('li.ipc-metadata-list-summary-item');
  //   await expect(movies.first()).toBeVisible();
  // });

  // // 3. Verify ranking numbers are visible
  // test('Ranking numbers are visible', async ({ page }) => {
  //   const rank = page.locator('h3').first();
  //   await expect(rank).toBeVisible();
  // });

  // // 4. Verify movie titles are displayed
  // test('Movie titles are displayed', async ({ page }) => {
  //   const title = page.locator('h3').first();
  //   await expect(title).toContainText(/\w+/);
  // });

  // // 5. Verify movie ratings are visible
  // test('Movie ratings are visible', async ({ page }) => {
  //   const rating = page.locator('[data-testid="ratingGroup--imdb-rating"]');
  //   await expect(rating.first()).toBeVisible();
  // });

  // // 6. Verify release years are shown
  // test('Release year is displayed', async ({ page }) => {
  //   const year = page.locator('.cli-title-metadata');
  //   await expect(year.first()).toBeVisible();
  // });

  // // 7. Verify movie posters load correctly
  // test('movie posters load correctly', async ({ page }) => {
  //   await page.getByRole('link', { name: '12 Angry Men', exact: true }).click();
  //   await expect(page.getByRole('link', { name: 'View ’12 Angry Men’ Poster' })).toBeVisible();
  // });


  // // 8. Verify clicking movie opens detail page
  // test('Open movie details page', async ({ page }) => {
  //   await page.locator('h3').first().click();
  //   await expect(page).toHaveURL(/title/);
  // });

  // // 9. Verify ranking order is sequential
  test('Toggle between List and Grid view works', async ({ page }) => {
    // Locate the layout toggle button (usually defaults to List view)
    const gridViewButton = page.getByTestId('layout-switch-grid');
    const listViewButton = page.getByTestId('layout-switch-list');

    // Click the Grid View button
    await gridViewButton.click();

    // Verify that the layout grid container becomes visible
    const gridContainer = page.locator('.ipc-metadata-list--grid');
    await expect(gridContainer).toBeVisible();

    // Toggle back to List View to ensure it's fully interactive
    await listViewButton.click();
    
    // Verify the standard list container is visible again
    const listContainer = page.locator('ul.ipc-metadata-list');
    await expect(listContainer).toBeVisible();
  });;

  // // 10. Verify ratings are valid values
  // test('Ratings are valid', async ({ page }) => {
  //   const rating = await page.locator('[data-testid="ratingGroup--imdb-rating"]').first().textContent();
  //   expect(parseFloat(rating)).toBeGreaterThan(0);
  // });

  // // 11. Verify search within Top 250 works
  // test('Search movie from Top 250', async ({ page }) => {
  //   await page.getByPlaceholder('Search IMDb').fill('The Dark Knight');
  //   await page.keyboard.press('Enter');
  //   await expect(page).toHaveURL(/find/);
  // });

  // // 12. Verify page scroll behavior
  // test('Page scroll works', async ({ page }) => {
  //   await page.mouse.wheel(0, 3000);
  //   await page.waitForTimeout(2000);
  // });

  // // 13. Verify page reload keeps data intact
  // test('Page reload works properly', async ({ page }) => {
  //   await page.reload();
  //   const movies = page.locator('li.ipc-metadata-list-summary-item');
  //   await expect(movies.first()).toBeVisible();
  // });

  // // 14. Verify no duplicate movie entries exist
  // test('No duplicate movie titles', async ({ page }) => {
  //   const titles = await page.locator('h3').allTextContents();
  //   const uniqueTitles = [...new Set(titles)];
  //   expect(titles.length).toBe(uniqueTitles.length);
  // });

  // // 15. Verify URL is correct after navigation
  // test('Correct URL after opening movie', async ({ page }) => {
  //   await page.locator('h3').nth(1).click();
  //   await expect(page.url()).toContain('/title/');
  // });

});