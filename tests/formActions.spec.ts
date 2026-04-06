import {test, expect, Locator} from '@playwright/test';

test('Form actions test', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    expect(page.url()).toBe('https://testautomationpractice.blogspot.com/');

    await page.getByPlaceholder('Enter Name').fill('John Doe');

    await page.getByPlaceholder('Enter Email').fill('johndoe@gmail.com');

    await page.getByPlaceholder('Enter Phone').fill('9876543210');

    await page.getByLabel('Address:').fill('India');

    await page.getByLabel('Male', {exact: true}).check();

    await page.getByLabel('Monday').check();
    await page.getByLabel('Wednesday').check();
    await page.getByLabel('Friday').check();

    await expect(page.getByPlaceholder('Enter Name')).toHaveValue('John Doe');
    await expect(page.getByPlaceholder('Enter Email')).toHaveValue('johndoe@gmail.com');
    await expect(page.getByPlaceholder('Enter Phone')).toHaveValue('9876543210');
    await expect(page.getByLabel('Address:')).toHaveValue('India');
    await expect(page.getByLabel('Male', {exact: true})).toBeChecked();
    await expect(page.getByLabel('Monday')).toBeChecked();
    await expect(page.getByLabel('Wednesday')).toBeChecked();
    await expect(page.getByLabel('Friday')).toBeChecked();

    await page.getByLabel('Female', {exact: true}).check();

    await page.getByLabel('Monday').uncheck();
    await page.getByLabel('Wednesday').uncheck();
    await page.getByLabel('Friday').uncheck();

    await expect(page.getByLabel('Female', {exact: true})).toBeChecked();
    await expect(page.getByLabel('Monday')).not.toBeChecked();
    await expect(page.getByLabel('Wednesday')).not.toBeChecked();
    await expect(page.getByLabel('Friday')).not.toBeChecked();
});