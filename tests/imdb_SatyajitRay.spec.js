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
    test('Awards and nominations contain correct information', async ({ page }) => {
        await page.getByText('wins & 23 nominations total').click();
        await expect(page.locator('ul').filter({ hasText: '1992 Winner Honorary AwardFor' })).toBeVisible();
    });

//5
    test('Biography section is visible', async ({ page }) => {
        await page.getByRole('link', { name: 'Biography' }).click();
        await expect(page.getByText('BiographySatyajit Ray')).toBeVisible();
    });

//6
    test('Writer section is visible', async ({ page }) => {
        await page.getByRole('heading', { name: 'Writer' }).click();
        await expect(page.getByText('Bankubabur Bandhu')).toBeVisible();
    });

//7   
    test('Trivia section is visible', async ({ page }) => {
        await page.getByRole('link', { name: 'Trivia' }).click();
        await expect(page.locator('div').filter({ hasText: /^Was very fond of actor Nana Patekar\. Wanted to direct him before he died\.$/ }).nth(2)).toBeVisible();
    });

//8
    test('Quotes section contains correct information', async ({ page }) => {
        await page.getByTestId('faq-title').getByRole('link', { name: 'FAQ' }).click();
        await expect(page.getByText('When was Satyajit Ray born?')).toBeVisible();
        await expect(page.getByTestId('faq_md_list_4').getByText('May 2,')).toBeVisible();
     });

//9
    test('Photos section loads correctly', async ({ page }) => {
        await page.getByRole('link', { name: 'Photos' }).click();
        await page.getByTestId('mv-gallery-button').click();
        await expect(page.getByTestId('mosaic-img-1-1').getByRole('img')).toBeVisible();
});
//10
    test('Composer section is visible', async ({ page }) => {
        await page.getByRole('heading', { name: 'Composer' }).click();
        await page.getByTestId('accordion-item-amzn1.imdb.concept.name_credit_category.00f5faa0-5f76-4eb5-87a1-ec8d484d1779-Previous').click();
        await expect(page.getByTestId('cred_amzn1.imdb.concept.name_credit_category.00f5faa0-5f76-4eb5-87a1-ec8d484d1779_10').getByText('An Enemy of the People')).toBeVisible();
    });
});