const { test, expect } = require('@playwright/test');


test.describe('two annotated tests', {
    annotation: {
      type: 'issue',
      description: 'https://github.com/microsoft/playwright/issues/23180',
    },
  }, () => {
    test('one', async ({ page }) => {
      // ...
    });
  
    test('two', async ({ page }) => {
      // ...
    });
  });