import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://monitor.onshopbase.com/collections/all');
  await page.getByRole('link', { name: 'Ombre Jumbo Braids Hair 24inch 100g Synthetic Braiding Hair Crochet Braid Hair Extension for Women Blond Brown Pink Purple Ombre Jumbo Braids Hair 24inch 100g Synthetic Braiding Hair Crochet Braid Hair Extension for Women Blond Brown Pink Purple $1.20' }).click();
  await page.locator('img:nth-child(20)').click();
  await page.locator('img:nth-child(20)').click();
  await page.locator('img:nth-child(20)').click();
  await page.locator('img:nth-child(20)').click();
  await page.locator('#sticky-add-to-cart').click();
});