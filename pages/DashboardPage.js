const { BasePage } = require('./BasePage');
const { HeaderComponent } = require('../components/HeaderComponent');

/**
 * DashboardPage - Page Object that uses Component Objects
 * Demonstrates how to use components within page objects
 */
class DashboardPage extends BasePage {
  constructor(page) {
    super(page);
    // Header is already available from BasePage, but we can add page-specific elements
    this.welcomeMessage = page.getByText(/welcome|dashboard/i);
    this.statsCards = page.locator('.stat-card, [data-testid*="stat"]');
    this.recentActivity = page.locator('.recent-activity, [data-testid="recent-activity"]');
    this.quickActions = page.locator('.quick-actions, [data-testid="quick-actions"]');
  }

  /**
   * Navigate to dashboard
   * @param {string} baseUrl - Base URL of the application
   */
  async goto(baseUrl = 'https://the-internet.herokuapp.com/secure') {
    await this.page.goto(baseUrl);
  }

  /**
   * Navigate to transactions using header search
   */
  async navigateToTransactions() {
    await this.header.search('transactions');
  }

  /**
   * Get welcome message text
   */
  async getWelcomeMessage() {
    if (await this.welcomeMessage.count() > 0) {
      return await this.welcomeMessage.textContent();
    }
    return null;
  }

  /**
   * Logout using header component
   */
  async logout() {
    await this.header.logout();
  }

  /**
   * Navigate to home using header logo
   */
  async goHome() {
    await this.header.clickLogo();
  }

  /**
   * Get number of stats cards
   */
  async getStatsCount() {
    return await this.statsCards.count();
  }

  /**
   * Check if dashboard is loaded
   */
  async isLoaded() {
    return await this.welcomeMessage.isVisible().catch(() => false);
  }
}

module.exports = { DashboardPage };

