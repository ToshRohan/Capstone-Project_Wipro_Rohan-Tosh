import { test, expect } from '@playwright/test';

test.describe('IMDb Homepage', () => {

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.imdb.com/');
});

test.afterEach(async ({ page }) => {
    console.log('Test completed');
});

//1
test('suggestion search input accepts text', async ({ page }) => {
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
test('watchlist opens correctly', async ({ page }) => {
  await page.getByRole('link', { name: 'Watchlist', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Recently viewed' })).toBeVisible();
});

//5
test('most popular celebrities page loads', async ({ page }) => {
  await page.getByRole('link', { name: 'Most popular celebrities' }).click();
  await page.locator('a').filter({ hasText: 'Anne Hathaway' }).click();
  await expect(page.locator('body')).toContainText('Anne Hathaway');
});

//6
test('language selection works', async ({ page }) => {
  await page.getByText('EN', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'हिंदी (भारत)' }).click();
  await expect(page.getByText('मेनू')).toBeVisible();
});

//7  
test('imdb pro page loads', async ({ page }) => {
  await page.getByRole('link', { name: 'Go To IMDb Pro' }).click();
  await expect(page).toHaveURL(/pro/);
});

//8
test('Crunchyroll Anime Awards', async ({ page }) => {
  await page.getByRole('link', { name: 'Coming soon to theaters' }).click();
  await expect(page.locator('li').filter({ hasText: 'Toxic (2026)' })).toBeVisible(); 
});

//9
test('Mobile apps page loads', async ({ page }) => {
  await page.getByRole('link', { name: 'For Android and iOS' }).click();
  await page.goto('https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525');
  await expect(page).toHaveURL(/apple/);
});

//10
test('Sign in is accessible', async ({ page }) => {
  // await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  // await page.getByTestId('create_account_aap').click();
  // await page.getByRole('heading', { name: 'Sign in to IMDb using your' }).click();

  await page.getByRole('link', { name: 'Sign in', exact: true }).click();

  const signInHeading = page.getByRole('heading', { name: /Sign in/i });
  await expect(signInHeading).toBeVisible();
});

//11
test('IMDb on social media', async ({ page }) => {
  await page.goto('https://www.imdb.com/');
  await page.getByText('Follow IMDb on social').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'YouTube' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByLabel('IMDb, Verified').getByText('IMDb')).toBeVisible();
});

});