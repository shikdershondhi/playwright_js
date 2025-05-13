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

    // Navigate to deals repository
    await dealsPage.navigateToDealsRepository();

    // Open deal in new tab
    const newTabPromise = page.waitForEvent('popup');
    await dealsPage.dealLink_682.click();
    const newTab = await newTabPromise;

    // Work with new tab
    await newTab.getByRole('button', { name: 'Save' }).click();
    await newTab.close();
    await page.pause() // Wait for 5 seconds to ensure the page is loaded
  });
});