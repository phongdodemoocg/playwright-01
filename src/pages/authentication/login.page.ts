import { Locator, Page } from "@playwright/test";

export class LoginPage{
    page: Page;
    inputUsername: Locator;
    inputPassword: Locator;
    buttonLogin: Locator;

    constructor(page: Page){
        this.page = page;
        this.inputUsername = page.locator("//input[@id='email']");
        this.inputPassword = page.locator("//input[@id='password']")
        this.buttonLogin = page.locator("//button[@type='submit']");
    }

    async login(){
        await this.page.goto("https://accounts.shopbase.com/sign-in?return_url=https%3A%2F%2Fshopbase-truongnx.onshopbase.com%2Fadmin%2F")
        await this.inputUsername.fill("tuyetle+1@beeketing.net");
        await this.inputPassword.fill("123456");
        await this.buttonLogin.click();
    }
    
}
