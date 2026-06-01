import { test, expect } from '@playwright/test';

test.describe('IMDb Homepage', () => {

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.imdb.com/');
});

test.afterEach(async ({ page }) => {
    console.log('Test completed');
});

//1
test('suggestion search', async ({ page }) => {
//   await page.goto('https://www.imdb.com/');
  await page.getByTestId('suggestion-search').click();
  await page.getByTestId('suggestion-search').fill('The Prestige');

  await expect(page.getByTestId('suggestion-search'))
    .toHaveValue('The Prestige');
});

//2
 test('IMDb homepage loads successfully', async ({ page }) => {
  await page.goto('https://www.imdb.com/');
  await expect(page).toHaveURL(/imdb\.com/);
  await expect(page.locator('main')).toBeVisible();
 });

//3
test('open navigation drawer', async ({ page }) => {
  
  await page.getByLabel('Open navigation drawer').click();
  await expect(page.locator('body')).toContainText('IMDb');
});

//4
test('watchlist', async ({ page }) => {
  await page.getByRole('link', { name: 'Watchlist', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Recently viewed' })).toBeVisible();
});

//5
test('most popular celebrities', async ({ page }) => {
  await page.getByRole('link', { name: 'Most popular celebrities' }).click();
  await page.locator('a').filter({ hasText: 'Anne Hathaway' }).click();
  await expect(page.locator('body')).toContainText('Anne Hathaway');
});

//6
test('language selection', async ({ page }) => {
  await page.getByText('EN', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'हिंदी (भारत)' }).click();
  await expect(page.getByText('मेनू')).toBeVisible();
});

//7  
test('imdb pro', async ({ page }) => {
  await page.getByRole('link', { name: 'Go To IMDb Pro' }).click();
  await expect(page).toHaveURL(/pro/);
});

//8
test('Crunchyroll Anime Awards', async ({ page }) => {
  await page.getByRole('link', { name: 'Crunchyroll Anime Awards' }).click();
  await page.goto('https://www.imdb.com/event/ev0025711/2026/1/?ref_=hm_chip_hm_p4_csegawds');
  await expect(page.getByRole('link', { name: 'CRUNCHYROLL ANIME AWARDS' })).toBeVisible();
});

//9
test('Mobile apps', async ({ page }) => {
  await page.getByRole('link', { name: 'For Android and iOS' }).click();
  await page.goto('https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525');
  await expect(page).toHaveURL(/apple/);
});

//10
test('Sign in', async ({ page }) => {
  // await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  // await page.getByTestId('create_account_aap').click();
  // await page.getByRole('heading', { name: 'Sign in to IMDb using your' }).click();

  await page.getByRole('link', { name: 'Sign in', exact: true }).click();

  const signInHeading = page.getByRole('heading', { name: /Sign in/i });
  await expect(signInHeading).toBeVisible();
});

});