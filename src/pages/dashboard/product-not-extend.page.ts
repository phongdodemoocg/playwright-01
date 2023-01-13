import { Page } from "@playwright/test";

export class Product2 {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}