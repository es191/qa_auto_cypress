﻿# Automation with Cypress

## Overview

This project demonstrates the use of Cypress for automating QA processes with a focus on backend testing. Written in TypeScript, the project integrates modern testing practices to ensure reliability, scalability, and ease of maintenance for automated test suites.

## Features

-   Cypress Framework: A robust, developer-friendly end-to-end testing tool.
-   TypeScript Integration: Ensures type safety and better code maintainability.
-   GitHub Actions Integration: Automates test execution, ensuring all tests are run before merging feature branches into the main branch.
-   Modular Test Structure: Organized test cases for backend testing.
-   Reusable Components: Custom commands and utilities for streamlined testing.
-   CI/CD Ready: Designed to integrate easily with continuous integration pipelines.
-   API Testing: Includes examples of testing complex API responses, including assertions for nested fields and payload validations.

## Project Structure
```
qa_auto_cypress/
├── .github/workflows/ # GitHub Actions workflows
│ └── cypress.yml # Workflow for running Cypress tests
├── cypress/
│ ├── e2e/ # End-to-end test cases
│ │ └── api/ # API-specific test cases
│ │ └── regression.spec.cy.ts # Regression tests for API
│ ├── fixtures/ # Test data and mock responses
│ │ ├── data_1.json # JSON file with test data
│ │ └── data.ts # Test data in TypeScript format
│ ├── functions/ # Utility functions
│ │ ├── apiCalls.ts # Functions for API calls
│ │ └── custom.ts # Custom utility functions
│ ├── plugins/ # Cypress plugins
│ │ └── index.js # Plugin configuration
│ └── support/ # Custom commands and reusable utilities
│ ├── commands.ts # Custom Cypress commands
│ └── e2e.ts # Setup file for end-to-end tests
├── node_modules/ # Project dependencies
├── .gitignore # Git ignore file
├── .prettierignore # Prettier ignore file
├── .prettierrc # Prettier configuration
├── cypress.config.ts # Cypress configuration
├── package-lock.json # Locked dependency versions
├── package.json # Project dependencies and scripts
├── README.md # Project documentation
└── tsconfig.json # TypeScript configuration
```


## Installation

1. Clone the repository: `git clone https://github.com/es191/qa_auto_cypress.git`
2. Install dependencies: `npm install`

## Running Tests

-   To run the tests, use the following command: `npm run api:browser`
-   For headless mode: `npm run api:headless`

## CI/CD Workflow

GitHub Actions:
The project includes a GitHub Actions workflow that automatically runs all tests whenever a pull request is created. This ensures that no code can be merged into the main branch without passing all tests.
