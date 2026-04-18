
const { test, expect } = require("@playwright/test");
const { beforeEach } = require("node:test");

test.beforeEach( async ({ page }) => {
    await page.goto("https://www.flipkart.com");

    const pageTitle = await page.title();
    await expect(pageTitle).toContain("Online Shopping Site");

    await page.waitForTimeout(3000);
});

test('create account', async ({page})=>{

    await page.locator("//a[@class='FWBvOe']").click();

    const input = await await page.getByLabel("Enter Email/Mobile number");
    await input.click();
    await input.fill("neha@yopmail.com");

    
})