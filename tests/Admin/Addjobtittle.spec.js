import { test, expect } from '@playwright/test';
import logindata from "../../Testdata/login.json"
import addjobtittle from "../../Testdata/addjobtittle.json"
test('Verify Addjobtittle', async ({ page }) => {

  console.log('Navigating to login page');
  await page.goto('web/index.php/auth/login');

  console.log('Checking company branding image is visible');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();

  console.log('Clicking username textbox');
  await page.getByRole('textbox', { name: 'Username' }).click();

  console.log('Filling username');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);

  console.log('Clicking password textbox');
  await page.getByRole('textbox', { name: 'Password' }).click();

  console.log('Filling password');
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);

  console.log('Clicking login button');
  await page.getByRole('button', { name: 'Login' }).click();

  console.log('Navigating to Admin section');
  await page.getByRole('link', { name: 'Admin' }).click();

  console.log('Expanding Job menu');
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();

  console.log('Selecting Job Titles');
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();

  console.log('Clicking Job menu again for navigation');
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();

  console.log('Selecting Job Titles again');
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();

  console.log('Clicking Add button');
  await page.getByRole('button', { name: ' Add' }).click();

  console.log('Clicking job title textbox');
  await page.getByRole('textbox').nth(1).click();

  console.log('Filling job title');
  await page.getByRole('textbox').nth(1).fill('QA taesting');

  console.log('Clicking description textbox');
  await page.getByRole('textbox', { name: 'Type description here' }).click();

  console.log('Filling job description');
  await page.getByRole('textbox', { name: 'Type description here' }).fill(addjobtittle.jobdescription);

  console.log('Clicking save button');
  await page.getByRole('button', { name: 'Save' }).click();

  console.log('Verifying Job Titles heading is visible');
  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
});
