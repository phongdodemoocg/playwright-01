import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.shopbase.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ShopBase/);
});

test('add to cart 02', async ({ page }) => {
  await page.goto('https://hiendo2.sbprod.tk/products/lee-straight-jean');

  await page.waitForTimeout(5 * 1000);

  // Click add to cart
  await page.click("//button[@id='add-to-cart']");

  console.log('Add to cart success');
  await page.waitForTimeout(5 * 1000);

  // Get cart number
  const cartNumber = await page.locator("//span[@class='cart-number']").textContent();
  console.log(cartNumber);

  // Expect cart number is 01
  expect(cartNumber).toEqual("01");
});
