// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

const l10n = require('./l10n.json');
const reqs = require('./requirements');
const urls = require('./urls');
const selectors = require('./selectors');

// Example: Make globals available via Cypress.env
Cypress.env('l10n', l10n);
Cypress.env('reqs', reqs);
Cypress.env('urls', urls);
Cypress.env('selectors', selectors);
