import {test, expect, Locator} from '@playwright/test';

test('Single Select Dropdown test', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    expect(page.url()).toBe('https://testautomationpractice.blogspot.com/');

    const singleSelectOptions: Locator = page.locator("#country option");
    const singleSelectOptionsCount: number = await singleSelectOptions.count();
    expect(singleSelectOptionsCount).toBeGreaterThan(0);

    await page.locator("#country").selectOption('India');
    await expect(page.locator("#country")).toHaveValue('india');

    await page.locator("#country").selectOption({value: 'australia'});
    await expect(page.locator("#country")).toHaveValue('australia');

    await page.locator("#country").selectOption({label: 'United States'});
    await expect(page.locator("#country")).toHaveValue('usa');

    await page.locator("#country").selectOption({index: 3});
    await expect(page.locator("#country")).toHaveValue('germany');
});

test('Multi Select Dropdown test', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    expect(page.url()).toBe('https://testautomationpractice.blogspot.com/');

    const multiSelectOptions: Locator = page.locator("#colors option");
    const multiSelectOptionsCount: number = await multiSelectOptions.count();
    expect(multiSelectOptionsCount).toBeGreaterThan(0);

    await page.locator("#colors").selectOption(['White', 'Blue']);

    await page.locator("#colors").selectOption([{label: 'White'}, {label: 'Green'}]);

    await page.locator("#colors").selectOption([{value: 'white'}, {value: 'green'}]);

    await page.locator("#colors").selectOption([{index: 0}, {index: 2}]);
});


test('Sorted and Duplicate Dropdown test', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    expect(page.url()).toBe('https://testautomationpractice.blogspot.com/');

    const colorsDropdownOptions: Locator = page.locator("#colors option");
    const animalsDropdownOptions: Locator = page.locator("#animals option");

    const colorsDropdownOptionsCount: number = await colorsDropdownOptions.count();
    const animalsDropdownOptionsCount: number = await animalsDropdownOptions.count();

    expect(colorsDropdownOptionsCount).toBeGreaterThan(0);
    expect(animalsDropdownOptionsCount).toBeGreaterThan(0);

    const colorsDropdownOptionsText: string[] = (await colorsDropdownOptions.allTextContents()).map(option => option.trim());
    const animalsDropdownOptionsText: string[] = (await animalsDropdownOptions.allTextContents()).map(option => option.trim());

    const originalColorsDropdownOptionsText: string[] = [...colorsDropdownOptionsText];
    const sortedColorsDropdownOptionsText: string[] = [...colorsDropdownOptionsText].sort();

    expect(originalColorsDropdownOptionsText).not.toEqual(sortedColorsDropdownOptionsText);

    const originalAnimalsDropdownOptionsText: string[] = [...animalsDropdownOptionsText];
    const sortedAnimalsDropdownOptionsText: string[] = [...animalsDropdownOptionsText].sort();

    expect(originalAnimalsDropdownOptionsText).toEqual(sortedAnimalsDropdownOptionsText);

    const uniqueColorsDropdownOptionsText: string[] = [...new Set(colorsDropdownOptionsText)];
    const uniqueAnimalsDropdownOptionsText: string[] = [...new Set(animalsDropdownOptionsText)];

    expect(colorsDropdownOptionsText).not.toEqual(uniqueColorsDropdownOptionsText);
    expect(animalsDropdownOptionsText).toEqual(uniqueAnimalsDropdownOptionsText);
});