import { test, expect } from '@playwright/test';
import logindata from "../../Testdata/login.json"
import addjobtittle from "../../Testdata/addjobtittle.json"

import { faker } from '@faker-js/faker';

test('Verify Addjobtittle', async ({ page }) => {

  console.log('Step 1: Navigate to login page');
  await page.goto('web/index.php/auth/login');

  console.log('Step 2: Verify company branding is visible');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();

  console.log('Step 3: Click username field');
  await page.getByRole('textbox', { name: 'Username' }).click();

  console.log('Step 4: Fill username');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);

  console.log('Step 5: Click password field');
  await page.getByRole('textbox', { name: 'Password' }).click();

  console.log('Step 6: Fill password');
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);

  console.log('Step 7: Click login button');
  await page.getByRole('button', { name: 'Login' }).click();

  console.log('Step 8: Click Admin link');
  await page.getByRole('link', { name: 'Admin' }).click();

  console.log('Step 9: Expand Job menu');
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();

  console.log('Step 10: Click Job Titles menu item');
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();

  console.log('Step 11: Click Job menu again');
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();

  console.log('Step 12: Click Job Titles menu item again');
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();

  console.log('Step 13: Click Add button');
  await page.getByRole('button', { name: ' Add' }).click();

  console.log('Step 14: Click job title textbox');
  await page.getByRole('textbox').nth(1).click();

  console.log('Step 15: Fill job title');
  await page.getByRole('textbox').nth(1).fill('QA taesting');

  console.log('Step 16: Click description textbox');
  await page.getByRole('textbox', { name: 'Type description here' }).click();

  console.log('Step 17: Fill job description');
  await page.getByRole('textbox', { name: 'Type description here' }).fill(addjobtittle.jobdescription);

  console.log('Step 18: Click Save button');
  await page.getByRole('button', { name: 'Save' }).click();

  console.log('Step 19: Verify Job Titles heading is visible');
  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
});
