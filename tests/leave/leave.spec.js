import { test, expect } from '@playwright/test';
test('Verify leave details page', async ({ page }) => {
  await page.goto('web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.getByRole('listitem').filter({ hasText: 'My Leave' }).click();
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.locator('.oxd-icon.bi-calendar').first().click();
  await page.getByText('2', { exact: true }).click();
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  await page.getByRole('option', { name: 'US - Personal' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('div').filter({ hasText: /^My Leave List$/ }).first()).toBeVisible();
});

//commit