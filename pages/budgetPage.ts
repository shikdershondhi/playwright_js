import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';


export class BudgetPage extends BasePage {
  readonly budgetMenuItem: Locator;
  readonly dashboardLink: Locator;

  constructor(page: Page) {
    super(page);
    this.budgetMenuItem = page.getByRole('listitem').filter({ hasText: 'Budget' });
    this.dashboardLink = page.getByRole('link', { name: 'Create budget' })
  }

  async navigateToBudgetDashboard() {
    await this.dashboardLink.click({ force: true });
    await this.waitForLoadState();
  }
}