import { test } from '@playwright/test';
import { AppPages } from '../../../pages/index';
import {HOME_URL} from "../../../utils/env";

// Use test.describe to group related tests
test.describe('Create New Deal', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto(`${HOME_URL}`);
  });

    test('Navigate from Deals to Budget dashboard', async ({ page }) => {
        const app = new AppPages(page);
        await app.dealsPage.CreateNewDeal();
      });

      test('Navigate from Budget dashboard', async ({ page }) => {
    const app = new AppPages(page);
    await app.budgetPage.navigateToBudgetDashboard(); // Wait for 5 seconds to ensure the page is loaded
  });
});
