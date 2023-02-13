// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
  })

Cypress.Commands.add("getByData2", () => {
    return cy.get(`#answer-0`)
  })
  