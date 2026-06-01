//https://www.imdb.com/name/nm0006249/

import { test, expect } from '@playwright/test';

test.describe('IMDb Satyajit Ray - Functional Tests', () => { 
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.imdb.com/name/nm0006249/');
    });
    test.afterEach(async () => {
        console.log('Test completed');
     });

 //1
    test('Heading is visible', async ({ page }) => {
        await expect(page).toHaveURL(/nm0006249/);
        await expect(page.locator('main')).toBeVisible();
        await expect(page.getByText('Satyajit Ray(1921-1992)WriterComposerDirectorIMDbProStarmeterSee rank')).toBeVisible();    
    });

//2
    test('Personal details are visible correctly', async ({ page }) => {
        await page.getByRole('link', { name: 'Personal details' }).click();
        await expect(page.getByRole('link', { name: 'Calcutta, Bengal Presidency,' })).toBeVisible();
        await expect(page.getByTestId('nm_pd_pa').getByRole('link', { name: 'Sukumar Ray' })).toBeVisible();

    });

//3
    test('Known for section is working correctly', async ({ page }) => {
        await page.goto('https://www.imdb.com/name/nm0006249/#personalDetails');
        await page.getByTestId('nm_kwn_for_0').getByText('Pather Panchali').click();
        await expect(page.getByRole('link', { name: 'Satyajit Ray' }).first()).toBeVisible();
    });
//4
    test('Awards and nominations', async ({ page }) => {
        await page.goto('https://www.imdb.com/name/nm0006249/');
        await page.getByText('wins & 23 nominations total').click();
        await expect(page.locator('ul').filter({ hasText: '1992 Winner Honorary AwardFor' })).toBeVisible();
});


});