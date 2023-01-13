import test from "@playwright/test";
import { LoginPage } from "../../src/pages/authentication/login.page";
import { ProductPage } from "../../src/pages/dashboard/product.page";

test('test_create_product', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    test.beforeEach(async () => {
        // Login vao dashboard -> LoginPage
        await loginPage.login();

        // Chon menu product -> Viet o trong DashboardPage
        await productPage.navigateToMenu("Products")
        await productPage.page.waitForTimeout(5 * 1000);
    })


    // Click button create product -> Viet o trong ProductPage
    await test.step('Click button create product', async () => {
        await productPage.clickButtonCreateProduct();
        await productPage.page.waitForTimeout(5 * 1000);
    })


    test.afterEach(() => {
        // Delete product
    })
})