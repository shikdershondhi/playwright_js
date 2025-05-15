import { test } from '@playwright/test';
import { AdminPage } from '../../pages/adminPage';
import * as testData from '../../fixtures/testdata.json';
// Use test.describe to group related tests
test.describe('Admin Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto(testData.login.Homepage);
  });

  test('Navigate from admin dashboard', async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.navigateToAdminDashboard();
    await adminPage.searchAndSelectUser();
    await adminPage.selectUserPermission();
    await page.pause(); // Wait for 5 seconds to ensure the page is loaded
    await page.screenshot({ path: 'downloads/screenshot/screenshot.png' }); // Take a screenshot
  });
});