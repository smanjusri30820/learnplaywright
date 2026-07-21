import { test, expect } from '@playwright/test';

import demoqa from "../../learnplaywright/Testdata/demoqa.json"
//import { faker } from '@faker-js/faker';

test('Verify logo vissible', async ({ page }) => {

    await page.goto('https://demoqa.com/')
    await page.locator("//a[@href='https://demoqa.com']//img").click()
    page.getByText('Elements', { exact: true }).click()
});

test('Verify Textbox details', async ({ page }) => {

    // await page.goto('https://demoqa.com/')
    // await page.locator('.category-cards /> a:nth-child(1)').click();
    // page.getByText('Elements', { exact: true }).click()
    // await page.locator("header-text").click()
    //await page.waitForTimeout(5000);
    //await page.locator("//span[text()='Text Box']").click();
    //await page.locator("li.btn.btn-light.active").click()
    // await page.locator("router-link").click()
    // await page.locator("input[placeholder='Full Name']").fill("arun")
    // await page.locator("input[placeholder='name@example.com']").fill("arun@example.com")
    // await page.locator("textarea[placeholder='Current Address']").fill("123 Main St")
    // await page.locator("#permanentAddress").fill("456 Oak Ave")

  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Elements' }).click();
  await page.getByText('Elements').click();
  await page.getByRole('link', { name: 'Text Box' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill(demoqa.fullname);
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(demoqa.email);
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill(demoqa.current_address);
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill(demoqa.permanent_address);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading', { name: 'Text Box' })).toBeVisible();
});

test.only('Verify check box details', async ({ page }) => {
 await page.goto('https://demoqa.com/')
await page.locator("//a[@href='https://demoqa.com']//img").click()
await page.getByRole('heading', { name: 'Elements' }).click()
await page.getByText('Elements').click();
// await page.getByText('Elements', { exact: true }).click()
await page.getByText('Check Box', { exact: true }).click()
await page.getByText('Home', { exact: true }).click()

});
