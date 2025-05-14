import { test } from '@playwright/test';
import { BudgetPage } from '../../pages/budgetPage';

// Use test.describe to group related tests
test.describe('Budget Flow', () => {
  
  test('Navigate from Budget dashboard', async ({ page }) => {
    const budgetPage = new BudgetPage(page);
    await budgetPage.navigateToBudgetDashboard();
    await page.pause() // Wait for 5 seconds to ensure the page is loaded
  });
});