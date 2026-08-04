import { test, expect } from '@playwright/test';
//import { allowedNodeEnvironmentFlags } from 'node:process';


test('Verify login', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const usernametext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').textContent()

  console.log(usernametext)

  const username = usernametext.split(" ")[2]

  await page.locator('//input[@name="username"]').fill(username)

  const passwordtext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').textContent()

  console.log(passwordtext)

  const password = passwordtext.split(" ")[2]

  //await page.locator('//input[@type="password"]').fill(password)
    await page.locator('//input[@type="password"]').fill(password)
    await page.close()

})
test('verify products', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')
  const vegs = await page.locator('//h4[@class="product-name"]').allTextContents()
  console.log(vegs)
  await page.locator('//input[@Brocolli - 1 Kg]').fill()


})

