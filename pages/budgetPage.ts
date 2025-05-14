import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';


export class BudgetPage extends BasePage {
  readonly budgetMenuItem: Locator;
  readonly dashboardLink: Locator;

  constructor(page: Page) {
    super(page);
    // this.dashboardLink = page.locator("body > div.b-content > nav > ul:nth-child(1) > li:nth-child(3) > ul > li:nth-child(2)");
    this.dashboardLink = page.getByRole('listitem').filter({ hasText: 'Budget Dashboard Repository' }).getByRole('link').first();
  }

  async navigateToBudgetDashboard() {
    await this.dashboardLink.click({ force: true });
    // await this.budgetMenuItem.click({ force: true });
    await this.waitForLoadState();
  }
}