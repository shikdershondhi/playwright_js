import { test } from '@playwright/test';
import { BudgetPage } from '../../../pages/budgets/budget.page';
import { HOME_URL} from "../../../utils/env";
// Use test.describe to group related tests
test.describe('Budget Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto(`${HOME_URL}`);
  });

  test('Navigate from Budget dashboard', async ({ page }) => {
    const budgetPage = new BudgetPage(page);
    await budgetPage.navigateToBudgetDashboard();
  });
});