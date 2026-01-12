# Playwright Test Automation Framework

A comprehensive Playwright testing framework covering UI testing, API testing, visual regression, accessibility testing, and enterprise patterns.

## 📋 Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Test Types & Functionality](#test-types--functionality)
- [Running Tests](#running-tests)
- [CI/CD Integration](#cicd-integration)
- [Enterprise Directory Structure](#enterprise-directory-structure)

## 🎯 Overview

This project demonstrates a complete Playwright testing framework with:

- **UI Testing** - Element finding, interactions, and assertions
- **API Testing** - REST API and GraphQL testing
- **Visual Regression** - Screenshot comparison and visual testing
- **Accessibility Testing** - WCAG compliance with axe-core
- **Page Object Model (POM)** - Traditional page object pattern
- **Component Object Model (COM)** - Enterprise component-based architecture
- **API Interception** - Request/response mocking and validation
- **Browser Context** - Advanced browser and context management

## 🚀 Installation

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Install accessibility testing tool (optional but recommended)
npm install -D @axe-core/playwright
```

## 📁 Project Structure

```
playwright/
├── e2e/                          # End-to-end test files
│   ├── api-requests.spec.js     # REST API testing
│   ├── graphql-api.spec.js      # GraphQL API testing
│   ├── finding-elements.spec.js  # Element locator strategies
│   ├── context-examples.spec.js  # Browser context management
│   ├── interceptor-examples.spec.js  # API interception & mocking
│   ├── extended.spec.js          # Extended UI testing examples
│   ├── pom-com-examples.spec.js  # Page Object & Component Model
│   ├── visual-regression-accessibility.spec.js  # Visual & accessibility
│   ├── axe-core-accessibility.spec.js  # axe-core accessibility
│   └── solid-principles-examples.spec.js  # SOLID principles in testing
├── pages/                        # Page Object Model
│   ├── BasePage.js              # Base page class
│   ├── LoginPage.js             # Login page object
│   ├── DashboardPage.js         # Dashboard page object
│   └── ProductPage.js           # Product page object
├── components/                   # Component Object Model
│   ├── HeaderComponent.js       # Reusable header component
│   └── FooterComponent.js      # Reusable footer component
├── playwright.config.js          # Playwright configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🧪 Test Types & Functionality

### 1. **Element Finding & Locators** (`finding-elements.spec.js`)

Comprehensive examples of all Playwright locator strategies:

- **Role-Based Locators** (Recommended)
  - `getByRole('button', { name: 'Submit' })`
  - `getByRole('link', { name: 'Contact' })`
  - `getByRole('textbox', { name: 'Email' })`

- **Text-Based Locators**
  - `getByText('Sign up')`
  - `getByText(/sign up/i)` (regex)

- **Label-Based Locators**
  - `getByLabel('Email address')`
  - `getByLabel('Password')`

- **Test ID Locators**
  - `getByTestId('submit-btn')`

- **Multiple Elements**
  - `.count()` - Count elements
  - `.first()` - Get first element
  - `.nth(2)` - Get element by index

- **Chaining Locators**
  - `page.locator('.container').getByRole('button')`

- **Filtering**
  - `.filter({ hasText: 'Product 1' })`

**Common Actions:**
- Click, double-click, right-click
- Type, fill, keyboard.press
- Check/uncheck, select dropdown
- Hover, drag and drop

**Assertions:**
- Page: `toHaveTitle()`, `toHaveURL()`
- Element: `toBeVisible()`, `toHaveText()`, `toHaveValue()`
- State: `toBeEnabled()`, `toBeChecked()`
- Count: `toHaveCount()`
- Attributes: `toHaveAttribute()`, `toHaveClass()`

### 2. **REST API Testing** (`api-requests.spec.js`)

Complete REST API testing examples:

- **HTTP Methods**
  - GET, POST, PUT, PATCH, DELETE requests
  - Query parameters
  - Request headers
  - Request payloads

- **Response Validation**
  - Status code assertions
  - Response body validation
  - Response headers
  - Response time
  - JSON structure validation

- **Error Handling**
  - 404 Not Found
  - Validation errors
  - Timeout handling

- **Advanced Features**
  - Sequential requests
  - Request/response interception
  - Complex JSON validation

### 3. **GraphQL API Testing** (`graphql-api.spec.js`)

Comprehensive GraphQL testing:

- **Basic Queries**
  - Simple queries
  - Queries with variables
  - Nested queries

- **Advanced Features**
  - Query aliases
  - Fragments
  - Mutations (template)
  - Error handling
  - Batch queries

- **Validation**
  - Response structure validation
  - Variable type validation
  - Performance testing

### 4. **API Interception & Mocking** (`interceptor-examples.spec.js`)

Request/response interception and mocking:

- **Route Interception**
  - Mock API responses
  - Modify requests
  - Block requests
  - Conditional routing

- **Request Validation**
  - Validate request payloads
  - Check request headers
  - Verify request methods

- **Response Mocking**
  - Mock successful responses
  - Mock error responses
  - Custom response data

- **Real-World Examples**
  - Login API mocking
  - Order confirmation mocking
  - Dynamic response generation

### 5. **Browser Context Management** (`context-examples.spec.js`)

Advanced browser and context features:

- **Context Creation**
  - Custom contexts
  - Multiple contexts
  - Context isolation

- **Permissions**
  - Geolocation
  - Clipboard access
  - Notifications
  - Camera/Microphone

- **Cookies & Storage**
  - Cookie management
  - Local storage
  - Session storage

- **Viewport & Device**
  - Custom viewports
  - Device emulation
  - Mobile/tablet/desktop

- **Network Conditions**
  - Offline mode
  - Slow 3G/4G
  - Custom network conditions

### 6. **Page Object Model (POM)** (`pom-com-examples.spec.js`)

Traditional Page Object Pattern:

- **Page Objects**
  - `LoginPage` - Login functionality
  - `DashboardPage` - Dashboard interactions
  - `ProductPage` - Product page actions

- **Benefits**
  - Code reusability
  - Maintainability
  - Separation of concerns

### 7. **Component Object Model (COM)** (`pom-com-examples.spec.js`)

Enterprise component-based architecture:

- **Components**
  - `HeaderComponent` - Reusable header
  - `FooterComponent` - Reusable footer
  - `BasePage` - Base class with components

- **Benefits**
  - 80% reduction in maintenance
  - Update once, use everywhere
  - Perfect for component-based apps

- **Inheritance**
  - Pages extend `BasePage`
  - Automatic component access
  - DRY principle

### 8. **Visual Regression Testing** (`visual-regression-accessibility.spec.js`)

Screenshot comparison and visual testing:

- **Basic Screenshots**
  - Page screenshots
  - Element screenshots
  - Full page screenshots

- **Advanced Configuration**
  - Masking dynamic content
  - Custom thresholds
  - Animation disabling
  - Caret hiding

- **Responsive Testing**
  - Mobile viewports
  - Tablet viewports
  - Desktop viewports

- **Best Practices**
  - Baseline creation
  - Screenshot updates
  - Multi-browser support

### 9. **Accessibility Testing** (`visual-regression-accessibility.spec.js` & `axe-core-accessibility.spec.js`)

WCAG compliance and accessibility testing:

- **Manual Accessibility Checks**
  - Keyboard navigation
  - ARIA attributes
  - Color contrast
  - Form labels
  - Semantic HTML

- **axe-core Integration** (`axe-core-accessibility.spec.js`)
  - Automated accessibility scanning
  - WCAG 2.1 Level A compliance
  - WCAG 2.1 Level AA compliance (Banking standard)
  - Critical WCAG criteria testing

- **Banking Compliance**
  - ADA compliance
  - WCAG 2.1 Level AA standards
  - Critical success criteria:
    - 1.1.1: Text Alternatives
    - 1.3.1: Info and Relationships
    - 1.4.3: Contrast (Minimum)
    - 2.1.1: Keyboard
    - 2.4.7: Focus Visible
    - 3.3.2: Labels or Instructions

- **Features**
  - Exclude third-party widgets
  - Disable specific rules
  - Detailed violation reporting
  - CI/CD integration

### 10. **Extended UI Testing** (`extended.spec.js`)

Additional UI testing scenarios:

- **File Upload**
  - File input handling
  - Upload verification

- **Iframe Interaction**
  - Frame switching
  - Frame element interaction

- **Dialog Handling**
  - Alert dialogs
  - Confirm dialogs
  - Prompt dialogs

- **New Window/Tab**
  - Popup handling
  - Tab management

- **Navigation**
  - Back/forward
  - Reload
  - URL navigation

- **Screenshots**
  - Page screenshots
  - Evidence collection

### 11. **SOLID Principles** (`solid-principles-examples.spec.js`)

Object-oriented design principles applied to test automation:

- **S - Single Responsibility Principle**
  - Each class has one reason to change
  - Separate concerns (validation, reporting, navigation)
  - Example: `LoginValidator` only validates, doesn't report

- **O - Open/Closed Principle**
  - Open for extension, closed for modification
  - Extend base classes without modifying them
  - Example: `BaseValidator` extended by `LoginPageValidator`

- **L - Liskov Substitution Principle**
  - Subtypes must be substitutable for base types
  - Derived classes replace base classes seamlessly
  - Example: `LoginPage` and `DashboardPage` both extend `BasePage`

- **I - Interface Segregation Principle**
  - Clients shouldn't depend on unused interfaces
  - Create specific, focused interfaces
  - Example: `Clickable`, `Typable`, `Validatable` as separate interfaces

- **D - Dependency Inversion Principle**
  - Depend on abstractions, not concretions
  - High-level modules depend on interfaces
  - Example: `LoginFlow` depends on `AuthenticationService` abstraction

- **Complete Example**
  - Full login system demonstrating all SOLID principles
  - Practical, real-world implementation
  - Best practices for enterprise test automation

## 🏃 Running Tests

### Run All Tests

```bash
# Run all tests
npm test

# Or
npx playwright test
```

### Run Specific Test Files

```bash
# Run specific test file
npx playwright test finding-elements

# Run multiple files
npx playwright test finding-elements api-requests

# Run with pattern
npx playwright test --grep "accessibility"
```

### Run in Specific Browser

```bash
# Run in Chromium only
npx playwright test --project=chromium

# Run in Firefox only
npx playwright test --project=firefox

# Run in WebKit only
npx playwright test --project=webkit
```

### Run in UI Mode

```bash
# Interactive UI mode
npx playwright test --ui
```

### Run in Debug Mode

```bash
# Debug mode with inspector
npx playwright test --debug
```

### Update Screenshots

```bash
# Update all screenshot baselines
npx playwright test --update-snapshots

# Update specific test
npx playwright test visual-regression --update-snapshots
```

### View Test Report

```bash
# Open HTML report
npx playwright show-report
```

## 🔄 CI/CD Integration

### GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/playwright.yml`) that:

- Runs tests on push and pull requests
- Installs dependencies and Playwright browsers
- Executes all tests
- Uploads test reports as artifacts
- Supports multiple Node.js versions

### CI/CD Best Practices

- **Accessibility Testing**: Fail builds on accessibility violations
- **Visual Regression**: Compare screenshots in CI
- **Parallel Execution**: Run tests in parallel for faster execution
- **Retry Logic**: Automatic retries on flaky tests
- **Artifact Storage**: Store test reports and screenshots

## 🏢 Enterprise Directory Structure

The project follows enterprise-grade directory structure for scalability and maintainability:

![Enterprise Directory Structure](./Enterprise%20Directory%20Structure.png)

### Key Features of Enterprise Structure:

1. **Separation of Concerns**
   - Tests organized by type (e2e, unit, integration)
   - Page objects in dedicated `pages/` directory
   - Components in `components/` directory

2. **Reusability**
   - Base classes for common functionality
   - Component objects for shared UI elements
   - Utility functions and helpers

3. **Maintainability**
   - Clear file naming conventions
   - Logical directory structure
   - Easy to navigate and update

4. **Scalability**
   - Easy to add new test files
   - Simple to extend page objects
   - Component model reduces duplication

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [axe-core Documentation](https://github.com/dequelabs/axe-core)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)

## 🤝 Contributing

1. Follow the existing code structure
2. Add tests for new functionality
3. Update README with new features
4. Ensure all tests pass before submitting

## 📝 License

ISC

---

**Note**: This framework is designed for enterprise use with focus on maintainability, scalability, and compliance (especially for banking/financial applications requiring WCAG 2.1 Level AA compliance).
