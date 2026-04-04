import {test, expect, Locator} from '@playwright/test';

test('', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const heading: Locator = page.locator("//h1[@class='title']");

    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Test Automation Practice');

    const subHeading: Locator = page.locator("p[class='description'] span");

    await expect(subHeading).toBeVisible();
    await expect(subHeading).toHaveText('For Selenium, Cypress & Playwright');
});