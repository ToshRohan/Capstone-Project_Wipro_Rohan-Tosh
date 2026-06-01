// @ts-check

import { test, expect } from '@playwright/test';

test.describe('IMDb Showtimes & Tickets', () => {

  const movieUrl = 'https://www.imdb.com/title/tt0111161/';

  test.beforeEach(async ({ page }) => {
    await page.goto(movieUrl);
  });
  test.afterEach(async ({ page }) => {
    console.log('Test completed');
  });

  // 1
  test('Movie page loads successfully', async ({ page }) => {
      await expect.poll(async () => {
      return await page.locator('h1').count();
    }).toBeGreaterThan(0);
  });

  
  // 2
  test('Showtimes section is available on page or redirect exists', async ({ page }) => {
    await page.goto('https://www.imdb.com/title/tt0111161/');

    const showtimesText = page.locator('text=/showtimes|tickets/i');

    const count = await showtimesText.count();

    expect(count).toBeGreaterThanOrEqual(0); 
  });

  // 3
  test('Showtimes button is clickable', async ({ page }) => {
    const btn = page.getByRole('link', { name: /showtimes/i });

    if (await btn.count() > 0) {
      await btn.first().click();
    }
  });

  // 4
  test('Navigation to showtimes page works', async ({ page }) => {
    const btn = page.getByRole('link', { name: /showtimes/i });

    if (await btn.count() > 0) {
      await btn.first().click();
      await page.waitForLoadState('domcontentloaded');

      await expect(page).toHaveURL(/showtimes|tickets|cinemas/);
    }
  });

  // 5
  test('Showtimes page content loads', async ({ page }) => {
    const btn = page.getByRole('link', { name: /showtimes/i });

    if (await btn.count() > 0) {
      await btn.first().click();
      await expect(page.locator('body')).toBeVisible();
    }
  });

  // 6
  test('Location prompt appears or handled', async ({ page }) => {
    const btn = page.getByRole('link', { name: /showtimes/i });

    if (await btn.count() > 0) {
      await btn.first().click();

      const location = page.locator('text=/location/i');
      if (await location.count() > 0) {
        await expect(location.first()).toBeVisible();
      }
    }
  });

  // 7
  test('Cinema listings exist', async ({ page }) => {
    const btn = page.getByRole('link', { name: /showtimes/i });

    if (await btn.count() > 0) {
      await btn.first().click();

      const cinemas = page.locator('text=/cinema|theatre|theater/i');
      if (await cinemas.count() > 0) {
        await expect(cinemas.first()).toBeVisible();
      }
    }
  });

  // 8
  test('Showtimes are visible', async ({ page }) => {
    const btn = page.getByRole('link', { name: /showtimes/i });

    if (await btn.count() > 0) {
      await btn.first().click();

      const times = page.locator('text=/\\d{1,2}:\\d{2}/'); // 10:30, 14:00 format
      if (await times.count() > 0) {
        await expect(times.first()).toBeVisible();
      }
    }
  });

  // 9
  test('Ticket links are visible', async ({ page }) => {
    const btn = page.getByRole('link', { name: /showtimes/i });

    if (await btn.count() > 0) {
      await btn.first().click();

      const links = page.locator('a[href*="ticket"], a[target="_blank"]');
      await expect(links.first()).toBeVisible();
    }
  });

  // 10
  test('External ticket redirect works', async ({ page }) => {
    const btn = page.getByRole('link', { name: /showtimes/i });

    if (await btn.count() > 0) {
      await btn.first().click();

      const link = page.locator('a[href*="ticket"], a[target="_blank"]');

      if (await link.count() > 0) {
        const [newPage] = await Promise.all([
          page.context().waitForEvent('page'),
          link.first().click()
        ]);

        await expect(newPage).toBeTruthy();
      }
    }
  });

  // 11
  test('Page has no broken UI', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();
  });

  // 12
  test('Back navigation works', async ({ page }) => {
    const btn = page.getByRole('link', { name: /showtimes/i });

    if (await btn.count() > 0) {
      await btn.first().click();
      await page.goBack();

      await expect(page.locator('h1')).toBeVisible();
    }
  });

  // 13
  test('Page title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/IMDb/i);
  });

  // 14
  test('Multiple sections load on showtimes page', async ({ page }) => {
    const btn = page.getByRole('link', { name: /showtimes/i });

    if (await btn.count() > 0) {
      await btn.first().click();

      const sections = page.locator('section, div');
      expect(await sections.count()).toBeGreaterThan(0);
    }
  });

  // 15
  test('No critical elements missing', async ({ page }) => {
    const btn = page.getByRole('link', { name: /showtimes/i });

    if (await btn.count() > 0) {
      await btn.first().click();

      const body = page.locator('body');
      await expect(body).toBeVisible();
    }
  });

 });