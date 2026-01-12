/**
 * LoginPage - Traditional Page Object Pattern
 * Represents the login page and its interactions
 */
class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByLabel('Email').or(page.locator('input[type="email"]'));
    this.passwordInput = page.getByLabel('Password').or(page.locator('input[type="password"]'));
    this.submitButton = page.getByRole('button', { name: /log in|login|sign in|signin/i });
    this.errorMessage = page.locator('.error, [role="alert"], .alert-danger');
    this.forgotPasswordLink = page.getByRole('link', { name: /forgot password|forgot/i });
    this.rememberMeCheckbox = page.getByRole('checkbox', { name: /remember me|remember/i });
  }

  /**
   * Navigate to login page
   * @param {string} baseUrl - Base URL of the application
   */
  async goto(baseUrl = 'https://the-internet.herokuapp.com/login') {
    await this.page.goto(baseUrl);
  }

  /**
   * Perform login
   * @param {string} email - User email
   * @param {string} password - User password
   */
  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  /**
   * Login with remember me checked
   * @param {string} email - User email
   * @param {string} password - User password
   */
  async loginWithRememberMe(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    
    if (await this.rememberMeCheckbox.count() > 0) {
      await this.rememberMeCheckbox.check();
    }
    
    await this.submitButton.click();
  }

  /**
   * Click forgot password link
   */
  async clickForgotPassword() {
    if (await this.forgotPasswordLink.count() > 0) {
      await this.forgotPasswordLink.click();
    }
  }

  /**
   * Get error message text
   */
  async getErrorMessage() {
    if (await this.errorMessage.count() > 0) {
      return await this.errorMessage.textContent();
    }
    return null;
  }

  /**
   * Check if error message is visible
   */
  async hasErrorMessage() {
    return await this.errorMessage.isVisible().catch(() => false);
  }

  /**
   * Fill email field
   * @param {string} email - Email address
   */
  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  /**
   * Fill password field
   * @param {string} password - Password
   */
  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  /**
   * Check if login form is visible
   */
  async isFormVisible() {
    return await this.emailInput.isVisible().catch(() => false);
  }
}

module.exports = { LoginPage };

