// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const envFile = `.env.${process.env.NODE_ENV || 'dev'}`;
dotenv.config({ path: path.resolve(__dirname, 'env', envFile) });

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 0 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use */
  reporter: 'html',
  
  /* Shared settings for all the projects below */
  use: {
    /* Collect trace when retrying the failed test */
    baseURL: process.env.BASEURL,
    ignoreHTTPSErrors: true,
    headless: true,
    trace: 'on-first-retry',
    video: 'on',
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 5000,
  },

  /* Configure projects for major browsers */
  projects: [
    // Setup project - runs once to authenticate
    {
      name: 'setup',
      testMatch: '**/setup/*.setup.ts',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 }
      }
    },

    // Main test projects - depend on setup and use saved auth state
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        storageState: 'fixtures/auth/userAuthState.json'
      },
      dependencies: ['setup']
    },

    // Add additional browser configurations as needed
    // {
    //   name: 'firefox',
    //   use: { 
    //     ...devices['Desktop Firefox'],
    //     storageState: 'fixtures/auth/userAuthState.json'
    //   },
    //   dependencies: ['setup']
    // },
    
    // Add mobile or other browser projects here following same pattern
  ],

  /* Optional: Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});