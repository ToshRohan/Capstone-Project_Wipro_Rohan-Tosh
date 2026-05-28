import { test, expect } from '@playwright/test';

test.describe('IMDb What to Watch - Functional Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.imdb.com/what-to-watch/');
  });

  test.afterEach(async () => {
    console.log('Test completed');
  });

  //1
  test('Page loads with main UI components', async ({ page }) => {
    await expect(page).toHaveURL(/what-to-watch/);
    await expect(page.locator('main')).toBeVisible();
  });

  //2
  test('Navigation menu is functional', async ({ page }) => {
    const navLinks = page.locator('nav a');
    await expect(navLinks.first()).toBeVisible();

    // basic interaction check
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  //3
   test('Search bar accepts input', async ({ page }) => {
    const search = page.getByPlaceholder(/Search IMDb/i);
    await expect(search).toBeVisible();

    await search.fill('Batman');
    await expect(search).toHaveValue('Batman');
  });

  //4
  test('Recommendation content visible', async ({ page }) => {
    await expect(page.locator('main')).toContainText(/Watch|Recommended|Trending/i);
  });

  //5
  test('TC15 - Page reload stability', async ({ page }) => {
    await page.reload();
    await expect(page).toHaveURL(/what-to-watch/);
  });




});