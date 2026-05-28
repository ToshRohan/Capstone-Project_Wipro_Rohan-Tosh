import { test, expect } from '@playwright/test';

test.describe('IMDb Homepage', () => {

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.imdb.com/');
});

test.afterEach(async ({ page }) => {
    console.log('Test completed');
});

// //1
// test('suggestion search', async ({ page }) => {
// //   await page.goto('https://www.imdb.com/');
//   await page.getByTestId('suggestion-search').click();
//   await page.getByTestId('suggestion-search').fill('The Prestige');

//   await expect(page.getByTestId('suggestion-search'))
//     .toHaveValue('The Prestige');
// });

// //2
// test('play trailer', async ({ page }) => {
// //   await page.goto('https://www.imdb.com/');
//   const page2Promise = page.waitForEvent('popup');
//   await page.locator('iframe[name="inline20"]').contentFrame().getByRole('link', { name: 'Sponsored Content' }).click();
//   const page2 = await page2Promise;
//   await expect(page2).toHaveTitle(/.*/);
// });

// //3
// test('open navigation drawer', async ({ page }) => {
  
//   await page.getByLabel('Open navigation drawer').click();
//   await expect(page.locator('body')).toContainText('IMDb');
// });

// //4
// test('watchlist', async ({ page }) => {
//   await page.getByRole('link', { name: 'Watchlist' }).click();
//   await expect(page).toHaveURL(/watchlist/);

// });

// //5
// test('summer watch guide', async ({ page }) => {
//   await page.getByRole('link', { name: 'Summer Watch Guide' }).first().click();
//   await page.getByRole('link', { name: 'Mortal Kombat II', exact: true }).click();
//   await expect(page).toHaveURL(/title|movie/i);
// });

// //6
// test('most popular celebrities', async ({ page }) => {
//   await page.getByRole('link', { name: 'Most popular celebrities' }).click();
//   await page.locator('a').filter({ hasText: 'Anne Hathaway' }).click();
//   await expect(page.locator('body')).toContainText('Anne Hathaway');
// });

// //7
// test('language selection', async ({ page }) => {
//   await page.getByText('EN', { exact: true }).click();
//   await page.getByRole('menuitem', { name: 'हिंदी (भारत)' }).click();
//   await expect(page.getByText('मेनू')).toBeVisible();
// });

// //8
// test('imdb pro', async ({ page }) => {
//   await page.getByRole('link', { name: 'Go To IMDb Pro' }).click();
//   await expect(page).toHaveURL(/pro/);
// });

// //9
// test('fan favorites', async ({ page }) => {
//   await page.getByRole('link', { name: 'Fan favorites' }).click();
//   await page.getByRole('link', { name: 'View title page for Dacoit: A' }).first().click();
// await expect(page).toHaveURL(/fan|favorite/i);
// });

// //10
// test('test', async ({ page }) => {
//   await page.getByRole('link', { name: 'Cannes Red Carpet' }).click();
//   await expect(page).toHaveURL(/cannes/);
// });

// //11
// test('Mobile apps', async ({ page }) => {
//   await page.getByRole('link', { name: 'For Android and iOS' }).click();
//   await page.goto('https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525');
//   await expect(page).toHaveURL(/apple/);
// });

//12
test('Top 10 on IMDb this week', async ({ page }) => {
  await page.goto('https://www.imdb.com/');
  await page.getByRole('link', { name: 'Top 10 on IMDb this week' }).click();
  await expect(page).not.toHaveURL('https://www.imdb.com/search/title/?moviemeter=%2C10&ref_=hm_tenup_sm');
});


// //13
// test('In theaters navigation', async ({ page }) => {

//   const inTheatersLink = page.getByRole('link', { name: /In theaters/i }).first();
//   await inTheatersLink.click();

//   await expect(page).toHaveURL(/.*browse\/cinema/);
// });

// //14
// test('Born today page navigation', async ({ page }) => {
//   await page.getByRole('link', { name: 'Born today' }).click();
//   const heading = page.getByRole('heading', { name: 'Born today', exact: true });
//   await expect(heading).toBeVisible();
// });

// //15
// test('Sign in', async ({ page }) => {
//   // await page.getByRole('link', { name: 'Sign in', exact: true }).click();
//   // await page.getByTestId('create_account_aap').click();
//   // await page.getByRole('heading', { name: 'Sign in to IMDb using your' }).click();

//   await page.getByRole('link', { name: 'Sign in', exact: true }).click();

//   const signInHeading = page.getByRole('heading', { name: /Sign in/i });
//   await expect(signInHeading).toBeVisible();
// });

});