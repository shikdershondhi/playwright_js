import { test } from '@playwright/test';
import { BudgetPage } from '../../pages/budgetPage';
import * as testData from '../../fixtures/testdata.json';
// Use test.describe to group related tests
test.describe('Budget Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto(testData.login.Homepage);
  });

  test('Navigate from Budget dashboard', async ({ page }) => {
    const budgetPage = new BudgetPage(page);
    await budgetPage.navigateToBudgetDashboard();
    await page.pause() // Wait for 5 seconds to ensure the page is loaded
  });
});