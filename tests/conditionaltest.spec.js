
import { test, expect } from '@playwright/test';

test('conditional test', async ({ page }) => {
  await page.goto('web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  const menuitems = await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents()
  console.log(menuitems)

  await expect(menuitems.includes("PIM")).toBes(true)
  

});