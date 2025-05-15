import { test } from '@playwright/test';
import { DealsPage } from '../../pages/dealsPage';
import * as testData from '../../fixtures/testdata.json';

// Use test.describe to group related tests
test.describe('Deals to Budget Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto(testData.login.Homepage);
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
    await page.bringToFront();
  });
});