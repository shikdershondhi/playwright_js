import { test as setup } from '@playwright/test';
import { AppPages } from '../../pages/index';

setup('authenticate with valid user login with session', async ({ page }) => {
  const app = new AppPages(page);
  await app.loginPage.navigate();
  await app.loginPage.login();
  // Wait for navigation to complete after login
  await page.waitForURL(/worldmap/);
  // Save authenticated state to a file
  await page.context().storageState({ 
    path: 'fixtures/auth/userAuthState.json'
  });
});