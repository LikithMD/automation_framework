import { Page, Locator } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string = '/') {
    await this.page.goto(url);
  }

  async click(locator: string | Locator) {
    typeof locator === 'string' ? await this.page.click(locator) : await locator.click();
  }

  async fill(locator: string | Locator, value: string) {
    typeof locator === 'string' ? await this.page.fill(locator, value) : await locator.fill(value);
  }

  async check(locator: string | Locator) {
    typeof locator === 'string' ? await this.page.check(locator) : await locator.check();
  }

  async uncheck(locator: string | Locator) {
    typeof locator === 'string' ? await this.page.uncheck(locator) : await locator.uncheck();
  }

  async selectOption(locator: string | Locator, value: string) {
    typeof locator === 'string' ? await this.page.selectOption(locator, value) : await locator.selectOption(value);
  }

  async getText(locator: string | Locator): Promise<string> {
    return typeof locator === 'string' ? await this.page.textContent(locator) || '' : await locator.textContent() || '';
  }

  async isVisible(locator: string | Locator): Promise<boolean> {
    return typeof locator === 'string' ? await this.page.isVisible(locator) : await locator.isVisible();
  }

}