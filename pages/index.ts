import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { AdminPage } from '../pages/adminpanel/admin.page';
import { LoginPage } from './login/login.page';
import { DealsPage } from './deals/deals.page';
import { BudgetPage } from './budgets/budget.page';

export class AppPages { 
   
    loginPage: LoginPage;
    adminPage: AdminPage;
    dealsPage: DealsPage;
    budgetPage: BudgetPage;
    basePage: BasePage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.adminPage = new AdminPage(page);
    this.dealsPage = new DealsPage(page);
    this.budgetPage = new BudgetPage(page);
    this.basePage = new BasePage(page);
  }
}