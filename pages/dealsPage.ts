import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class DealsPage extends BasePage {
  readonly dealsMenuItem: Locator;
  readonly repositorySubmenu: Locator;
  readonly draftRadio: Locator;
  readonly dealLink: Locator;

  constructor(page: Page) {
    super(page);
    this.dealsMenuItem = page.getByRole('listitem').filter({ hasText: 'Deals Dashboard Repository' }).locator('span');
    this.repositorySubmenu = page.locator('li:nth-child(2) > .sidebar__submenu > li:nth-child(2) > .sidebar__submenu-link');
    this.draftRadio = page.getByRole('radio', { name: 'Draft 4' });
    this.dealLink = page.getByRole('cell', { name: '682 ' }).getByRole('link');
  }

  async navigateToDealsRepository() {
    await this.dealsMenuItem.click();
    await this.repositorySubmenu.click();
    await this.draftRadio.check();
  }
}