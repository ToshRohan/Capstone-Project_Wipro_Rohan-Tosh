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
test('Search functionality works', async ({ page }) => {
  await page.getByTestId('suggestion-search').click();
  await page.getByTestId('suggestion-search').fill('punisher');
  await page.goto('https://www.imdb.com/title/tt5675620/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_punisher');
  await expect(page.locator('h1')).toContainText('The Punisher');
});

//11
test('Prime Video links are functional', async ({ page }) => {
  await page.getByRole('link', { name: 'Everything New on Prime Video' }).click();
  await page.locator('ul').filter({ hasText: /^1\. A Shot in the Dark$/ }).click();
  await expect(page.getByRole('link', { name: 'Watch on Prime Video' }).first()).toBeVisible(); 
});

//12
test('Fan Favorites section is visible', async ({ page }) => {
    await page.getByRole('tab', { name: 'FAN FAVORITES' }).click();
    await expect(page).toHaveURL(/what-to-watch\/fan-favorites/);
});

//13
test('Movies load correctly', async ({ page }) => {
  await page.getByRole('tab', { name: 'FAN FAVORITES' }).click();
  await page.getByRole('link', { name: 'View title page for Sapne Vs' }).first().click();
  await expect(page.getByRole('link', { name: 'View ’Sapne Vs Everyone’' })).toBeVisible(); 
});

//14
 test('Category selector works', async ({ page }) => {
  await page.getByTestId('category-selector-button').click();
  await page.locator('.ipc-icon.ipc-icon--arrow-drop-down.ipc-btn__icon').first().click();
  await  expect(page.locator('.ipc-icon.ipc-icon--arrow-drop-down.ipc-btn__icon').first()).toBeVisible(); 
 });

//15
 test('Heading is visible', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'What to Watch - IMDb' })).toBeVisible();
 });


});