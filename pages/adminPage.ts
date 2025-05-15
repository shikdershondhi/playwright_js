import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';


export class AdminPage extends BasePage {
//   readonly budgetMenuItem: Locator;


  constructor(page: Page) {
    super(page);
   
  }

  async navigateToBudgetDashboard() {
    
    
  }
}