import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.imdb.com/chart/starmeter/?ref_=hm_mpc_sm');
});

//1
test('heading', async ({ page }) => {
  await page.getByRole('heading', { name: 'Most popular celebs' }).click();
});

//2
test('Ryan Gosling profile', async ({ page }) => {
  await page.getByLabel('Ryan Gosling').click();
  await page.getByTestId('hero__placeholder').getByRole('link', { name: 'Ryan Gosling at an event for' }).click();
});

//3
test('Share', async ({ page }) => {
  await page.locator('div').filter({ hasText: /^Share$/ }).click();
});

//4
test('Sydney Sweeney biography', async ({ page }) => {
  await page.goto('https://www.imdb.com/chart/starmeter/?ref_=hm_mpc_sm');
  await page.locator('a').filter({ hasText: 'Sydney Sweeney' }).click();
  await page.getByRole('link', { name: 'Biography' }).click();
  await page.getByText('Mini bioSydney Sweeney (born').click();
});