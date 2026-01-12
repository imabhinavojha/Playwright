const { HeaderComponent } = require('../components/HeaderComponent');
const { FooterComponent } = require('../components/FooterComponent');

/**
 * BasePage - Base class for all page objects
 * Provides common components (header, footer) that are shared across pages
 * 
 * 🏢 ENTERPRISE: Component Object Model reduces maintenance by 80%.
 * Update HeaderComponent once, and all pages automatically get the update.
 */
class BasePage {
  constructor(page) {
    this.page = page;
    this.header = new HeaderComponent(page);
    this.footer = new FooterComponent(page);
  }

  /**
   * Get the current page URL
   */
  async getUrl() {
    return this.page.url();
  }

  /**
   * Get the page title
   */
  async getTitle() {
    return await this.page.title();
  }

  /**
   * Wait for page to load
   */
  async waitForLoadState(state = 'networkidle') {
    await this.page.waitForLoadState(state);
  }

  /**
   * Take a screenshot
   * @param {string} path - Screenshot path
   */
  async takeScreenshot(path) {
    await this.page.screenshot({ path });
  }

  /**
   * Navigate to a URL
   * @param {string} url - URL to navigate to
   */
  async goto(url) {
    await this.page.goto(url);
  }
}

module.exports = { BasePage };

