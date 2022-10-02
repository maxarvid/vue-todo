import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:5173',
    video: false,
    screenshotOnRunFailure: false,
    excludeSpecPattern: process.env.CI ? ['cypress/e2e/all.cy.ts'] : [],
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    }
  }
})
