import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.imdb.com/');
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
// });

// //3
// test('open navigation drawer', async ({ page }) => {
  
//   await page.getByLabel('Open navigation drawer').click();
// });

// //4
// test('watchlist', async ({ page }) => {
//   await page.getByRole('link', { name: 'Watchlist' }).click();
// });

// //5
// test('summer watch guide', async ({ page }) => {
//   await page.getByRole('link', { name: 'Summer Watch Guide' }).first().click();
//   await page.getByRole('link', { name: 'Mortal Kombat II', exact: true }).click();
// });

// //6
// test('most popular celebrities', async ({ page }) => {
//   await page.getByRole('link', { name: 'Most popular celebrities' }).click();
//   await page.locator('a').filter({ hasText: 'Anne Hathaway' }).click();
// });

// //7
// test('language selection', async ({ page }) => {
//   await page.goto('https://www.imdb.com/');
//   await page.getByText('EN', { exact: true }).click();
// });

// //8
// test('imdb pro', async ({ page }) => {
//   await page.getByRole('link', { name: 'Go To IMDb Pro' }).click();
// });

// //9
// test('fan favorites', async ({ page }) => {
//   await page.getByRole('link', { name: 'Fan favorites' }).click();
//   await page.getByRole('link', { name: 'View title page for Dacoit: A' }).first().click();
// });

// //10
// test('help', async ({ page }) => {
//   await page.getByRole('link', { name: 'Help' }).click();
//   const page1 = await page1Promise;
//   await page1.getByRole('searchbox', { name: 'How can we help?' }).click();
//   await page1.getByRole('searchbox', { name: 'How can we help?' }).fill('what is the process to rate a movie');
//   await page1.getByRole('searchbox', { name: 'How can we help?' }).press('Enter');
// });

// //11
// test('Mobile apps', async ({ page }) => {
//   await page.getByRole('link', { name: 'For Android and iOS' }).click();
//   await page.goto('https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525');
// });

// //12
// test('Top 10 on IMDb this week', async ({ page }) => {
//   await page.goto('https://www.imdb.com/');
//   await page.getByRole('link', { name: 'Top 10 on IMDb this week' }).click();
// });

// //13
// test('In theaters', async ({ page }) => {
//   await page.getByRole('link', { name: 'In theaters' }).click();
//   await page.getByRole('link', { name: 'View title page for Michael' }).click();
// });

// //14
// test('Born today', async ({ page }) => {
//   await page.getByRole('link', { name: 'Born today' }).click();
//   await page.getByTestId('accordion-item-nameTextAccordion').click();
//   await page.getByTestId('test-nametext').click();
//   await page.getByTestId('test-nametext').fill('salman khan');
//   await page.getByTestId('test-nametext').press('Enter');
//   await page.getByText('No results foundPlease adjust').click();
// });

//15
test('Sign in', async ({ page }) => {
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.getByTestId('create_account_aap').click();
  await page.getByRole('heading', { name: 'Sign in to IMDb using your' }).click();
});