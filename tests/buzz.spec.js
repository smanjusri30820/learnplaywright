const { test, expect } = require('@playwright/test');

test('Login to OrangeHRM and post a message on Buzz', async ({ page }) => {
  await page.goto('web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Buzz' }).click();

  await page.getByRole('textbox', { name: "What's on your mind?" }).fill('Hello from Playwright automation');
  await page.getByRole('button', { name: 'Post' }).click();

  await expect(page.getByText('Successfully Saved')).toBeVisible();
});
