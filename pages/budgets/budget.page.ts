import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';
import {BASE_URL} from "../../utils/env";

// example of a module

export class BudgetPage extends BasePage {
  // readonly budgetMenuItem: Locator;
  // readonly dashboardLink: Locator;
  constructor(page: Page) {
    super(page);
   
    // If you want to navigate, call page.goto() in a method, not in the constructor.
  }

  async navigateToBudgetDashboard() {
    await this.page.goto(`${BASE_URL}`+'/budget/dashboard/');
    await this.waitForLoadState();
  }
}