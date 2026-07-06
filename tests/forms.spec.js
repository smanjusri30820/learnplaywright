import { test, expect } from '@playwright/test';

import forms from "../../learnplaywright/Testdata/forms.json";

test('Verify forms page', async ({ page }) => {

    await page.goto('https://demoqa.com/')
    await page.locator("//a[@href='https://demoqa.com']//img").click()
    await page.getByText('Elements', { exact: true }).click()
    await page.getByText('Forms').click()
    await page.getByRole('link', { name: 'Practice Form' }).click()
    await page.getByRole('heading', { name: 'Student Registration Form' }).click()
    await page.getByRole('textbox', { name: 'First Name' }).fill(forms.Firstname)
    await page.getByRole('textbox', { name: 'Last Name' }).fill(forms.Lastname)
    await page.getByRole('textbox', { name: 'name@example.com' }).fill(forms.email)
    await page.getByRole('radio', { name: 'Female' }).click()
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(forms.MobileNumber)
    await page.getByRole('button', { name: 'Submit' }).click()
})