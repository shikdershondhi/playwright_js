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
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('rowheader', { name: 'Users', exact: true }).click();
    await page.getByRole('link', { name: 'Users', exact: true }).click();
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('shikder');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('link', { name: 'shikder' }).click();
    // await page.locator('#id_groups_from', { hasText: 'AREX1' }).click();
    await page.locator('#id_groups_from').scrollIntoViewIfNeeded
    await page.locator('#id_groups_from',{hasText:'AREX1'}).selectOption('41');
    await page.locator('#id_groups_add_link').click();
    await page.waitForTimeout(5000); // Wait for 5 seconds to ensure the page is loaded
    // await page.pause() // Wait for 5 seconds to ensure the page is loaded
  });
});