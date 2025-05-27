import { test } from '@playwright/test';
import { AppPages } from '../../../pages/index';
import {HOME_URL} from "../../../utils/env";
// Use test.describe to group related tests
test.describe('Admin Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto(`${HOME_URL}`);
  });

  test.skip('Navigate from admin dashboard', async ({ page }) => {
    const app = new AppPages(page);
    await app.adminPage.navigateToAdminDashboard();
    await app.adminPage.searchAndSelectUser();
    await app.adminPage.selectUserPermission();
    await page.pause(); // Wait for 5 seconds to ensure the page is loaded
    await page.screenshot({ path: 'downloads/screenshot/screenshot.png' }); // Take a screenshot
  });
});