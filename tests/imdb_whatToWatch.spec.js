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
  test('Page reload stability', async ({ page }) => {
    await page.reload();
    await expect(page).toHaveURL(/what-to-watch/);
  });

  //6
  test('Mobile view works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await expect(page.locator('main')).toBeVisible();
  });

  //7
    test('No error messages', async ({ page }) => {
    const text = await page.textContent('body');
    expect(text).not.toContain('Error');
  });

  //8
    test('TC09 - Page scroll works', async ({ page }) => {
    await page.mouse.wheel(0, 2000);
  });

  //9
    test('TC11 - Links are present and clickable', async ({ page }) => {
    await expect(page.locator('a').first()).toBeVisible();
  });

  //10
    test('TC08 - Back navigation works', async ({ page }) => {
    const firstTitle = page.locator('a[href*="/title/"]').first();
    await firstTitle.click();
    await page.goBack();
    await expect(page).toHaveURL(/what-to-watch/);
  });

  //11
  test('TC16 - Recommendation sections exist', async ({ page }) => {
  const sections = page.locator('section');
  expect(await sections.count()).toBeGreaterThan(0);
});




});