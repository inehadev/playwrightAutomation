// const {test , except, expect}=require("@playwright/test")
// const { title } = require("node:process")

// test('has title' , async ({page})=>{
//     await page.goto("https://flipkart.com")
//     await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books &amp; More. Best Offers!")
//     await page.waitForTimeout(3000)
//     console.log(title);
// })

const { test, expect } = require("@playwright/test");

test('has title', async ({ page }) => {
    await page.goto("https://www.flipkart.com");

    const pageTitle = await page.title();
await expect(pageTitle).toContain("Online Shopping Site");

    await page.waitForTimeout(3000);
});