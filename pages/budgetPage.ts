import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';


export class BudgetPage extends BasePage {
  readonly budgetMenuItem: Locator;
  readonly dashboardLink: Locator;
  constructor(page: Page) {
    super(page);
   
    // If you want to navigate, call page.goto() in a method, not in the constructor.
  }

  async navigateToBudgetDashboard() {
    await this.page.goto('https://nsdev24.neustring.com/budget/dashboard/');
    await this.waitForLoadState();
  }
}