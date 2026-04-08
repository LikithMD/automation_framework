import {test, expect, Locator} from '@playwright/test';

test('Form actions test', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    expect(page.url()).toBe('https://testautomationpractice.blogspot.com/');

    // To be continued tomorrow
});
