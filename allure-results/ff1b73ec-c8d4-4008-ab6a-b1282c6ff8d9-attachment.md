# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_homepage.spec.js >> IMDb Homepage >> play trailer
- Location: tests\imdb_homepage.spec.js:24:5

# Error details

```
Test timeout of 90000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 90000ms exceeded.
Call log:
  - navigating to "https://www.imdb.com/", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('IMDb Homepage', () => {
  4   | 
  5   | test.beforeEach(async ({ page }) => {
> 6   |   await page.goto('https://www.imdb.com/');
      |              ^ Error: page.goto: Test timeout of 90000ms exceeded.
  7   | });
  8   | 
  9   | test.afterEach(async ({ page }) => {
  10  |     console.log('Test completed');
  11  | });
  12  | 
  13  | //1
  14  | test('suggestion search', async ({ page }) => {
  15  | //   await page.goto('https://www.imdb.com/');
  16  |   await page.getByTestId('suggestion-search').click();
  17  |   await page.getByTestId('suggestion-search').fill('The Prestige');
  18  | 
  19  |   await expect(page.getByTestId('suggestion-search'))
  20  |     .toHaveValue('The Prestige');
  21  | });
  22  | 
  23  | //2
  24  | test('play trailer', async ({ page }) => {
  25  | //   await page.goto('https://www.imdb.com/');
  26  |   const page2Promise = page.waitForEvent('popup');
  27  |   await page.locator('iframe[name="inline20"]').contentFrame().getByRole('link', { name: 'Sponsored Content' }).click();
  28  |   const page2 = await page2Promise;
  29  |   await expect(page2).toHaveTitle(/.*/);
  30  | });
  31  | 
  32  | //3
  33  | test('open navigation drawer', async ({ page }) => {
  34  |   
  35  |   await page.getByLabel('Open navigation drawer').click();
  36  |   await expect(page.locator('body')).toContainText('IMDb');
  37  | });
  38  | 
  39  | //4
  40  | test('watchlist', async ({ page }) => {
  41  |   await page.getByRole('link', { name: 'Watchlist' }).click();
  42  |   await expect(page).toHaveURL(/watchlist/);
  43  | 
  44  | });
  45  | 
  46  | //5
  47  | test('summer watch guide', async ({ page }) => {
  48  |   await page.getByRole('link', { name: 'Summer Watch Guide' }).first().click();
  49  |   await page.getByRole('link', { name: 'Mortal Kombat II', exact: true }).click();
  50  |   await expect(page).toHaveURL(/title|movie/i);
  51  | });
  52  | 
  53  | //6
  54  | test('most popular celebrities', async ({ page }) => {
  55  |   await page.getByRole('link', { name: 'Most popular celebrities' }).click();
  56  |   await page.locator('a').filter({ hasText: 'Anne Hathaway' }).click();
  57  |   await expect(page.locator('body')).toContainText('Anne Hathaway');
  58  | });
  59  | 
  60  | //7
  61  | test('language selection', async ({ page }) => {
  62  |   await page.getByText('EN', { exact: true }).click();
  63  |   await page.getByRole('menuitem', { name: 'हिंदी (भारत)' }).click();
  64  |   await expect(page.getByText('मेनू')).toBeVisible();
  65  | });
  66  | 
  67  | //8
  68  | test('imdb pro', async ({ page }) => {
  69  |   await page.getByRole('link', { name: 'Go To IMDb Pro' }).click();
  70  |   await expect(page).toHaveURL(/pro/);
  71  | });
  72  | 
  73  | //9
  74  | test('fan favorites', async ({ page }) => {
  75  |   await page.getByRole('link', { name: 'Fan favorites' }).click();
  76  |   await page.getByRole('link', { name: 'View title page for Dacoit: A' }).first().click();
  77  | await expect(page).toHaveURL(/fan|favorite/i);
  78  | });
  79  | 
  80  | //10
  81  | test('test', async ({ page }) => {
  82  |   await page.getByRole('link', { name: 'Cannes Red Carpet' }).click();
  83  |   await expect(page).toHaveURL(/cannes/);
  84  | });
  85  | 
  86  | //11
  87  | test('Mobile apps', async ({ page }) => {
  88  |   await page.getByRole('link', { name: 'For Android and iOS' }).click();
  89  |   await page.goto('https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525');
  90  |   await expect(page).toHaveURL(/apple/);
  91  | });
  92  | 
  93  | //12
  94  | test('Top 10 on IMDb this week', async ({ page }) => {
  95  |   await page.goto('https://www.imdb.com/');
  96  |   await page.getByRole('link', { name: 'Top 10 on IMDb this week' }).click();
  97  |   await expect(page).toHaveURL('https://www.imdb.com/search/title/?moviemeter=%2C10&ref_=hm_tenup_sm');
  98  | });
  99  | 
  100 | 
  101 | //13
  102 | test('In theaters navigation', async ({ page }) => {
  103 | 
  104 |   const inTheatersLink = page.getByRole('link', { name: /In theaters/i }).first();
  105 |   await inTheatersLink.click();
  106 | 
```