const { test: base, expect } = require('@playwright/test');

class AmazonHomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('#twotabsearchtextbox');
    this.searchButton = page.locator('#nav-search-submit-button');
    this.resultsQueryText = page.locator('span.a-color-state.a-text-bold');
  }

  async goto() {
    await this.page.goto('https://www.amazon.in/');
  }

  /**
   * @param {string} query
   */
  async search(query) {
    await this.searchBox.fill(query);
    await Promise.all([
      this.page.waitForURL(/\/s\?/),
      this.searchButton.click(),
    ]);
  }
}

/** @typedef {{ amazon: AmazonHomePage }} AmazonFixtures */

/** @typedef {import('@playwright/test').PlaywrightTestArgs} PWTestArgs */
/** @typedef {import('@playwright/test').PlaywrightWorkerArgs} PWWorkerArgs */

/** @type {import('@playwright/test').TestType<AmazonFixtures & PWTestArgs, PWWorkerArgs>} */
const test = base.extend(
  // /** @type {import('@playwright/test').Fixtures<AmazonFixtures, {}, PWTestArgs, PWWorkerArgs>} */ 
  ({
    amazon: async ({ page }, use) => {
      const amazon = new AmazonHomePage(page);
      await use(amazon);
    },
  })
);

module.exports = { test, expect, AmazonHomePage };

