const { BasePage } = require('./BasePage');

/**
 * ProductPage - Page Object that extends BasePage
 * Demonstrates inheritance pattern with component reuse
 * 
 * 🏢 ENTERPRISE: By extending BasePage, ProductPage automatically
 * gets HeaderComponent and FooterComponent without duplicating code.
 */
class ProductPage extends BasePage {
  constructor(page) {
    super(page); // Call parent constructor to initialize header and footer
    this.addToCartBtn = page.getByRole('button', { name: /add to cart|add to bag/i });
    this.productTitle = page.locator('h1, [data-testid="product-title"]');
    this.productPrice = page.locator('[data-testid="price"], .price');
    this.productDescription = page.locator('[data-testid="description"], .product-description');
    this.quantityInput = page.locator('input[type="number"], [data-testid="quantity"]');
    this.sizeSelector = page.locator('select[name="size"], [data-testid="size-select"]');
    this.colorSelector = page.locator('[data-testid="color-select"], .color-selector');
    this.reviewsSection = page.locator('.reviews, [data-testid="reviews"]');
  }

  /**
   * Navigate to product page
   * @param {string} productId - Product ID or slug
   * @param {string} baseUrl - Base URL of the application
   */
  async goto(productId = '', baseUrl = 'https://the-internet.herokuapp.com/') {
    const url = productId ? `${baseUrl}products/${productId}` : baseUrl;
    await this.page.goto(url);
  }

  /**
   * Add product to cart
   */
  async addToCart() {
    if (await this.addToCartBtn.count() > 0) {
      await this.addToCartBtn.click();
    }
  }

  /**
   * Add product to cart with options
   * @param {Object} [options] - Product options
   * @param {number} [options.quantity] - Quantity to add
   * @param {string} [options.size] - Product size
   * @param {string} [options.color] - Product color
   */
  async addToCartWithOptions(options = {}) {
    if (options.quantity && await this.quantityInput.count() > 0) {
      await this.quantityInput.fill(options.quantity.toString());
    }

    if (options.size && await this.sizeSelector.count() > 0) {
      await this.sizeSelector.selectOption(options.size);
    }

    if (options.color && await this.colorSelector.count() > 0) {
      const colorOption = this.colorSelector.locator(`[data-color="${options.color}"]`);
      if (await colorOption.count() > 0) {
        await colorOption.click();
      }
    }

    await this.addToCart();
  }

  /**
   * Get product title
   */
  async getProductTitle() {
    if (await this.productTitle.count() > 0) {
      return await this.productTitle.textContent();
    }
    return null;
  }

  /**
   * Get product price
   */
  async getProductPrice() {
    if (await this.productPrice.count() > 0) {
      return await this.productPrice.textContent();
    }
    return null;
  }

  /**
   * Get product description
   */
  async getProductDescription() {
    if (await this.productDescription.count() > 0) {
      return await this.productDescription.textContent();
    }
    return null;
  }

  /**
   * Search for product using header search
   * @param {string} query - Search query
   */
  async searchProduct(query) {
    await this.header.search(query);
  }

  /**
   * Navigate to reviews section
   */
  async scrollToReviews() {
    if (await this.reviewsSection.count() > 0) {
      await this.reviewsSection.scrollIntoViewIfNeeded();
    }
  }

  /**
   * Check if product page is loaded
   */
  async isLoaded() {
    return await this.productTitle.isVisible().catch(() => false);
  }
}

module.exports = { ProductPage };

