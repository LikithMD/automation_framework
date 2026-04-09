import {test, expect, Locator} from '@playwright/test';

test('Hidden Dropdown test', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();

    await page.getByText('PIM', { exact: true }).click();

    await page.locator("form i").nth(2).click();

    await page.waitForTimeout(5000);

    const jobOptions: Locator = page.locator("div[role='listbox'] span");

    const jobOptionsText: string[] = (await jobOptions.allTextContents()).map(option => option.trim());

    console.log(jobOptionsText);

    const jobOptionsCount: number = await jobOptions.count();

    expect(jobOptionsCount).toBeGreaterThan(0);

    for(let i = 0; i < jobOptionsText.length; i++) {
        if(jobOptionsText[i] === 'IT Manager') {
            await jobOptions.nth(i).click();
            break;
        }
    }
});
