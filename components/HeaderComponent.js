
/**
 * HeaderComponent - Component Object Model
 * Reusable header component that appears across multiple pages
 */
class HeaderComponent {
  constructor(page) {
    this.page = page;
    this.logo = page.getByTestId('logo').or(page.locator('header').getByRole('link').first());
    this.searchInput = page.getByTestId('search').or(page.locator('input[type="search"]').or(page.getByPlaceholder('Search')));
    this.userMenu = page.getByTestId('user-menu').or(page.locator('[data-testid="user-menu"]'));
    this.logoutBtn = page.getByTestId('logout').or(page.getByRole('button', { name: /logout/i }));
    this.navigationLinks = page.locator('header nav a');
  }

  /**
   * Click the logo to navigate to home
   */
  async clickLogo() {
    await this.logo.click();
  }

  /**
   * Perform a search
   * @param {string} query - Search query
   */
  async search(query) {
    if (await this.searchInput.count() > 0) {
      await this.searchInput.fill(query);
      await this.page.keyboard.press('Enter');
    }
  }

  /**
   * Open user menu
   */
  async openUserMenu() {
    if (await this.userMenu.count() > 0) {
      await this.userMenu.click();
    }
  }

  /**
   * Logout user
   */
  async logout() {
    await this.openUserMenu();
    if (await this.logoutBtn.count() > 0) {
      await this.logoutBtn.click();
    }
  }

  /**
   * Navigate using header navigation
   * @param {string} linkText - Text of the navigation link
   */
  async navigateTo(linkText) {
    const link = this.navigationLinks.filter({ hasText: linkText });
    if (await link.count() > 0) {
      await link.click();
    }
  }

  /**
   * Check if header is visible
   */
  async isVisible() {
    return await this.logo.isVisible().catch(() => false);
  }
}

module.exports = { HeaderComponent };

