import { test, expect } from '@playwright/test';
import logindata from "../../learnplaywright/Testdata/login.json"

import addjobtitte from "../../learnplaywright/Testdata/addjobtittle.json"
import negativelogin from "../../learnplaywright/Testdata/negativelogin.json"


test('Verify logo vissible', async ({ page }) => {

  await page.goto('web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();

});
test('Verify login with valid credentials', async ({ page }) => {
  await page.goto('web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
});
test('Verify login with valid username and invalid password', async ({ page }) => {
  await page.goto('web/index.php/auth/login');
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(negativelogin.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(negativelogin.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('Verify login without entering username and pasword', async ({ page }) => {
  await page.goto('web/index.php/auth/login');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Required').first()).toBeVisible();
  await expect(page.getByText('Required').nth(1)).toBeVisible();
});
