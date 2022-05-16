// ***********************************************************
// This example support/index.js is processed and
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
import './commands'
import 'cypress-file-upload'
import '@baloise/design-system-testing'

import * as installLogsCollector from 'cypress-terminal-report/src/installLogsCollector'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const installLogs = installLogsCollector as any
installLogs()
