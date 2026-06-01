// import { test, expect } from '@playwright/test';

// test.describe('IMDb Events - Functional Tests', () => { 
//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://www.imdb.com/event/all/');
//     });

//     test.afterEach(async () => {
//         console.log('Test completed');
//     }); 

// //1
//     test('Page loads with main UI components', async ({ page }) => {
//         await expect(page).toHaveURL(/event/);
//         await expect(page.locator('main')).toBeVisible();
//     });

// //2
//     test('12 months film festival event loads correctly', async ({ page }) => {
//         await page.getByTestId('event-link-ev0004280').click();
//         await expect(page.getByRole('heading', { name: 'Months Film Festival' })).toBeVisible();
//     });

// //3
//     test('Event links are functional', async ({ page }) => {
//         const eventLinks = page.locator('a').filter({ hasText: /Award|Festival|Film|TV/i });
//         if (await eventLinks.count() > 0) {
//             await eventLinks.first().click();
//             await page.waitForLoadState('domcontentloaded');
//             await expect(page).toHaveURL(/event/);
//         }
//     });

// //4
//     test('Search bar accepts input', async ({ page }) => {
//         const search = page.getByPlaceholder(/Search IMDb/i);
//         await expect(search).toBeVisible();
//         await search.fill('Oscars');
//         await expect(search).toHaveValue('Oscars');
//     });

// //5
//     test('Event details page loads', async ({ page }) => {
//         const eventLinks = page.locator('a').filter({ hasText: /Award|Festival|Film|TV/i });
//         if (await eventLinks.count() > 0) {
//             await eventLinks.first().click();
//             await page.waitForLoadState('domcontentloaded');
//             await expect(page.locator('main')).toBeVisible();
//         }
//     });

// //6
//     test('Mobile view works', async ({ page }) => {
//         await page.setViewportSize({ width: 375, height: 812 });
//         await expect(page.locator('main')).toBeVisible();
//     });

// //7
//     test('Academy Awards winner info is correct', async ({ page }) => {
//         await page.locator('[data-test-id="right-rail-content-block"]').getByRole('link', { name: 'Academy Awards, USA' }).click();
//         await page.goto('https://www.imdb.com/event/ev0000003/2026/1/');
//         await page.getByRole('link', { name: 'Best Motion Picture of the' }).click();
//         await expect(page.getByTestId('BestMotionPictureoftheYear').getByText('WinnerOne Battle After')).toBeVisible();
//      });

// // //8
// //     test('year wise navigation is working correctly', async ({ page }) => {
// //         await page.getByRole('link', { name: 'Academy Awards, USA' }).click();
// //         await page.getByRole('tab', { name: '2000s' }).click();
// //         await page.getByRole('link', { name: '2003' }).click();
// //         await expect(page.getByTestId('BestPicture').getByText('WinnerChicago7.2 (257K)Rate')).toBeVisible();
// //     });

// //9
//     test('test', async ({ page }) => {
//         await page.goto('https://www.imdb.com/event/all/');
//         await page.getByTestId('event-link-ev0006330').click();
//         await page.getByRole('link', { name: 'Best Horror Baddy' }).first().click();
//         await expect(page.getByText('WinnerDollhouse9.0 (9)Rate')).toBeVisible();
//     });

// // //10
//     test('test', async ({ page }) => {
//         await page.goto('https://www.imdb.com/event/all/');
//         await page.locator('[data-test-id="right-rail-content-block"]').getByRole('link', { name: 'Cannes Film Festival' }).click();
//         await page.goto('https://www.imdb.com/event/ev0000147/2026/1/');
//         await expect(page.getByText('Palme d\'OrEdit')).toBeVisible();
//     });

// });