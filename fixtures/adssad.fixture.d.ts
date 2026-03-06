import type {
  Locator,
  Page,
  PlaywrightTestArgs,
  PlaywrightWorkerArgs,
  TestType,
  expect as pwExpect,
} from '@playwright/test';

export class AmazonHomePage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly resultsQueryText: Locator;

  constructor(page: Page);
  goto(): Promise<void>;
  search(query: string): Promise<void>;
}

export type AmazonFixtures = {
  amazon: AmazonHomePage;
};

export const test: TestType<AmazonFixtures & PlaywrightTestArgs, PlaywrightWorkerArgs>;
export const expect: typeof pwExpect;

