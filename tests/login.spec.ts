import {test, expect} from '@playwright/test';

test('Login test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page.getByText('Swag Labs')).toBeVisible();

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByText('Products')).toBeVisible();
});