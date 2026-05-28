// import { test, expect } from '@playwright/test';

// test.describe('IMDb Popular Celebs', () => {

// test.beforeEach(async ({ page }) => {
//   await page.goto('https://www.imdb.com/chart/starmeter/?ref_=hm_mpc_sm');
// });

// test.afterEach(async ({ page }) => {
//     console.log('Test completed');
// });

// //1
// test('IMDb popular celebs page launched', async ({ page }) => {

//   await expect(page).toHaveURL('https://www.imdb.com/chart/starmeter/?ref_=hm_mpc_sm');
// });

// //2
// test('Anne Hathaway profile', async ({ page }) => {
//   await page.locator('a').filter({ hasText: 'Anne Hathaway' }).click();
//   await expect(page.locator('body')).toContainText('Anne Hathaway');
// });

// //3
// test('navigation bar', async ({ page }) => {
//    await page.getByLabel('Open navigation drawer').click();
//    await expect(page.getByLabel('Go to Top 250 movies')).toBeVisible();
// });

// //4
// test('test', async ({ page }) => {
//   await page.locator('a').filter({ hasText: 'Sally Field' }).click();
//   await page.getByRole('link', { name: 'Biography' }).click();
//   await expect(page.getByText('BornNovember 6, 1946 ·')).toBeVisible();
// });

// //5
// test('search bar', async ({ page }) => {
//   await page.getByTestId('suggestion-search').click();
//   await page.getByTestId('suggestion-search').press('CapsLock');
//   await page.getByTestId('suggestion-search').fill('S');
//   await page.getByTestId('suggestion-search').press('CapsLock');
//   await page.getByTestId('suggestion-search').fill('Salman ');
//   await page.getByTestId('suggestion-search').press('CapsLock');
//   await page.getByTestId('suggestion-search').fill('Salman K');
//   await page.getByTestId('suggestion-search').press('CapsLock');
//   await page.getByTestId('suggestion-search').fill('Salman Khan');
//   await page.goto('https://www.imdb.com/name/nm0006795/?ref_=nv_sr_srsg_0_tt_5_nm_3_in_0_q_Salman%20Khan');
//   await expect(page.locator('body')).toContainText('Salman Khan');
// });

// //6
// test('Sydney Sweeney awards', async ({ page }) => {
//   await page.locator('a').filter({ hasText: 'Sydney Sweeney' }).click();
//   await page.getByTestId('hero-subnav-bar-topic-links').getByRole('link', { name: 'Awards' }).click();
//   await expect(page.getByRole('link', { name: 'Nominee Primetime Emmy' }).nth(1)).toBeVisible();
// });

// //7
// test('test', async ({ page }) => {
//   await page.getByLabel('Christopher Nolan').click();
//   await page.getByRole('link', { name: 'Known for' }).click();
//   await page.getByTestId('nm_kwn_for_3').getByText('The Prestige').click();
//   await expect(page.locator('body')).toContainText('The Prestige');
// });

// //8
// test('test', async ({ page }) => {
//   await page.getByText('More to explorePopular').click();
//   await expect(page.getByText('IMDb ChartsShare')).toBeVisible();
// });

// //9
// test('sally field profile', async ({ page }) => {
//   await page.getByLabel('Sally Field').click();
//   await expect(page.getByTestId('hero__placeholder').getByRole('link', { name: 'Sally Field' })).toBeVisible();
// });

// //10
// test('grid', async ({ page }) => {
//   await page.getByRole('button', { name: 'Grid view' }).click();
//   await expect(page.getByRole('button', { name: 'Detailed view' })).toBeVisible();
// });

// //11
// test('Emily Blunt profile picture', async ({ page }) => {
//   await page.locator('a').filter({ hasText: 'Emily Blunt' }).click();
//   await expect(page.getByTestId('mosaic-img-0-0')).toBeVisible();
// });

// //12
// test('most popular celebs heading', async ({ page }) => {
//   await page.getByRole('heading', { name: 'Most popular celebs' }).click();
//   await expect(page.getByRole('heading', { name: 'Most popular celebs' })).toBeVisible();
// });

// //13
// test("detailed view", async ({ page }) => {
//   await page.getByRole('button', { name: 'Detailed view' }).click();
//   await expect(page.getByRole('button', { name: 'Grid view' })).toBeVisible();
// });

// //14
// test('test', async ({ page }) => {
//   await page.locator('.ipc-icon.ipc-icon--arrow-drop-down.ipc-btn__icon').first().click();
//   await page.locator('#nav-search-form').getByText('Celebs').click();
//   await expect(page.getByTestId('category-selector-button').getByText('Celebs')).toBeVisible(); 
// });

// //15
// test('celeb news', async ({ page }) => {
//   await page.getByRole('link', { name: 'Celebrity news' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Taylor Swift & Travis Kelce' }).click();
//   const page1 = await page1Promise;
//   await expect(
//   page1.getByRole('img', {
//     name: 'Taylor Swift and Travis Kelce hold hands in NYC'
//   })
// ).toBeVisible();
// });

// });
