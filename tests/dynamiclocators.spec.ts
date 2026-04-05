import {test, expect, Locator} from '@playwright/test'

test('Dynamic locators test', async ({page}) => {
    test.setTimeout(60000);

    await page.goto('https://testautomationpractice.blogspot.com/');

    expect(page.url()).toBe('https://testautomationpractice.blogspot.com/');

    for(let i=0; i<5; i++) {
        await page.locator("//button[@name='start' or @name='stop']").click();
        await page.waitForTimeout(2000);
    }

    for(let i=0; i<5; i++) {
        await page.locator("button[name^='st']").click();
        await page.waitForTimeout(2000);
    }

    for(let i=0; i<5; i++) {
        await page.getByRole('button', {name: 'start'}).or(page.getByRole('button', {name: 'stop'})).click();
        await page.waitForTimeout(2000);
    }
});