import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://monitor.onshopbase.com/');
  await page.getByText('Roller is next generation ecommerce at its best: an incredibly flexible and soph').click();
});