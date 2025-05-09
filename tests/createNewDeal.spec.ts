import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DealsPage } from '../pages/dealsPage';
import * as testData from '../fixture/testdata.json';

// Use test.describe to group related tests
test.describe('Deals to Budget Flow', () => {
    // This will run before all tests in this describe block
    test.beforeEach(async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.page.goto(testData.login.url);
      await loginPage.login(testData.login.username, testData.login.password);
      await page.context().storageState({ path: 'auth.json' });
    });
    

    test('Navigate from Deals to Budget dashboard', async ({ page }) => {
        const dealsPage = new DealsPage(page);
        await dealsPage.CreateNewDeal();
        await dealsPage.page.waitForTimeout(5000); // Wait for 2 seconds to ensure the page is loaded
      });
});