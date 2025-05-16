import { test as setup } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import * as testData from '../../fixtures/testdata.json';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  // await loginPage.page.goto(testData.login.url);
  await loginPage.navigate();
  await loginPage.login(testData.login.username, testData.login.password);

    // Wait for navigation to complete after login
  await page.waitForURL(/worldmap/);
  
  // Save authenticated state to a file
  await page.context().storageState({ 
    path: 'fixtures/auth/userAuthState.json'
  });
});