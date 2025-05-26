import { test as setup } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

setup('authenticate with valid user login with session', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login();
  // Wait for navigation to complete after login
  await page.waitForURL(/worldmap/);
  // Save authenticated state to a file
  await page.context().storageState({ 
    path: 'fixtures/auth/userAuthState.json' 
  });
});