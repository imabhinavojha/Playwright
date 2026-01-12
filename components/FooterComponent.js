
/**
 * FooterComponent - Component Object Model
 * Reusable footer component that appears across multiple pages
 */
class FooterComponent {
  constructor(page) {
    this.page = page;
    this.footer = page.locator('footer');
    this.footerLinks = page.locator('footer a');
    this.copyrightText = page.locator('footer').getByText(/copyright|©/i);
    this.socialLinks = page.locator('footer [data-testid*="social"]');
  }

  /**
   * Click a footer link
   * @param {string} linkText - Text of the footer link
   */
  async clickLink(linkText) {
    const link = this.footerLinks.filter({ hasText: linkText });
    if (await link.count() > 0) {
      await link.click();
    }
  }

  /**
   * Get copyright text
   */
  async getCopyrightText() {
    if (await this.copyrightText.count() > 0) {
      return await this.copyrightText.textContent();
    }
    return null;
  }

  /**
   * Click social media link
   * @param {string} platform - Social media platform (e.g., 'facebook', 'twitter')
   */
  async clickSocialLink(platform) {
    const socialLink = this.socialLinks.filter({ hasText: new RegExp(platform, 'i') });
    if (await socialLink.count() > 0) {
      await socialLink.click();
    }
  }

  /**
   * Check if footer is visible
   */
  async isVisible() {
    return await this.footer.isVisible().catch(() => false);
  }

  /**
   * Get all footer links
   */
  async getAllLinks() {
    const count = await this.footerLinks.count();
    const links = [];
    for (let i = 0; i < count; i++) {
      const text = await this.footerLinks.nth(i).textContent();
      links.push(text);
    }
    return links;
  }
}

module.exports = { FooterComponent };

