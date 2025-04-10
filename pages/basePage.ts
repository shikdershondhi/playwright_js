import { Page, Locator } from '@playwright/test';
import * as testData from '../fixture/testdata.json';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForLoadState(state: 'load' | 'domcontentloaded' | 'networkidle' = 'networkidle') {
    await this.page.waitForLoadState(state);
  }
}