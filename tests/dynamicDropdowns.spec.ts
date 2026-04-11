import {test, expect, Locator} from '@playwright/test';

test('Dynamic Dropdown test', async ({page}) => {
    await page.goto('https://www.amazon.com/');

    expect(page.url()).toBe('https://www.amazon.com/');

    await page.waitForTimeout(5000);

    await page.getByPlaceholder('Search Amazon').click();
    await page.getByPlaceholder('Search Amazon').fill('smart');

    const allOptions: Locator = page.getByRole('row');

    await expect(allOptions).toHaveCount(10);

    const optionsText: string[] = (await allOptions.allTextContents()).map(option => option.trim());

    console.log(optionsText);

    for(let i = 0; i < optionsText.length; i++) {
        if(optionsText[i] === 'smart watches for men') {
            await allOptions.nth(i).click();
            break;
        }
    }

    await expect(page.getByRole('heading', {name: 'Results', exact: true})).toBeVisible();
});