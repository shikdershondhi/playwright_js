import { test } from '@playwright/test';
import { DealsPage } from '../../pages/deals.page';
import { BudgetPage } from '../../pages/budget.page';
import * as testData from '../../fixtures/testdata.json';

// Use test.describe to group related tests
test.describe('Create New Deal', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto(testData.login.Homepage);
  });

    test('Navigate from Deals to Budget dashboard', async ({ page }) => {
        const dealsPage = new DealsPage(page);
        await dealsPage.CreateNewDeal();
      });

      test('Navigate from Budget dashboard', async ({ page }) => {
    const budgetPage = new BudgetPage(page);
    await budgetPage.navigateToBudgetDashboard(); // Wait for 5 seconds to ensure the page is loaded
  });
});
