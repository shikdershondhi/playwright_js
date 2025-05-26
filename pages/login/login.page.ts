import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';
import * as testData from '../../fixtures/testdata.json';
// This class represents the login page of the application.
// It contains methods to interact with the login form and perform login actions.

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByRole('textbox', { name: 'Username:' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }
  async navigate() {
    await this.page.goto(`${testData.url.baseurl}`);
  }

  async login() {
    await this.usernameInput.fill(`${testData.credentials.validUser.username}`);
    await this.passwordInput.fill(`${testData.credentials.validUser.password}`);
    await this.loginButton.click();
    await this.waitForLoadState();
  }
}