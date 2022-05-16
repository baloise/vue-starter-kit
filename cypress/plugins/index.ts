/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import * as installLogsPrinterPlugin from 'cypress-terminal-report/src/installLogsPrinter'

export default function configurePlugins(
  on: Cypress.PluginEvents,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config: Cypress.PluginConfigOptions,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const installLogsPrinter = installLogsPrinterPlugin as any
  installLogsPrinter(on)
  on('task', {
    log(message) {
      console.log(message)
      return null
    },
    table(message) {
      console.table(message)
      return null
    },
  })
}
