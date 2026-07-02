# Playwright Automation Project

This project contains Playwright-based UI automation tests for the OrangeHRM demo application.

## Project Structure
- tests/ - main test suite
  - login.spec.js - login page scenarios
  - addemployee.spec.js - employee-related scenarios
  - Admin/jobtittle.spec.js - admin job title flow
  - leave/leave.spec.js - leave module scenarios
  - example.spec.js - sample test
- Testdata/ - JSON test data files such as login.json and addjobtittle.json
- playwright.config.js - default Playwright configuration
- uat.playwright.config.js - UAT-specific configuration
- prepro.playwright.config.js - pre-production configuration
- playwright-report/ - generated HTML report output
- test-results/ - execution artifacts such as screenshots and traces

## Prerequisites
- Node.js
- npm

## Setup
Install dependencies:

`ash
npm install
`

## Run Tests
Run the full suite:

`ash
npx playwright test
`

Run a specific test file:

`ash
npx playwright test tests/login.spec.js
`

## View Report
Open the HTML report after a test run:

`ash
npx playwright show-report
`

## Notes
- The tests are configured to run against the OrangeHRM demo website.
- Screenshots, traces, and videos are captured on failure.
- Chrome and Edge browsers are configured in the main Playwright setup.
