/// <reference types="cypress" />

describe("Home page",() => {

    beforeEach('',()=>{
      cy.visit("http://localhost:3000");
    })
  
      context('Hero section', () =>{
        it("Test h1", () => {
          cy.get("[data-test='hero-heading']").contains(
            "Testing Next.js Applications with Cypress"
          )
        })
      
        it("Test des Itèms", () => {
            cy.get('dt').eq(0).contains('4 Courses');
            cy.get('dt').eq(1).contains('25+ Lessons');
            cy.get('dt').eq(2).contains('Free and Open Source');
        })
      })
  
      context.only('Courses section', () =>{
        it("Course: Testing Your First Next.js Application", () => {
          cy.get('div[data-test="course-0"]').find('a').eq(3).click();
          cy.location("pathname").should("eq", "/testing-your-first-application");
          cy.get('a[data-test="next-lesson-button"]').click();
          cy.location('pathname').should("eq","/testing-your-first-application/app-install-and-overview");
          cy.get('#answer-0').click();
          cy.get('a[href="installing-cypress-and-writing-our-first-test"]').click();
          cy.location('pathname').should("eq","/testing-your-first-application/installing-cypress-and-writing-our-first-test");
          cy.get('#answer-0').click();
          cy.get('a[href="setting-up-data-before-each-test"]').click();
          cy.location('pathname').should("eq","/testing-your-first-application/setting-up-data-before-each-test");
          cy.get('#answer-0').click();
          cy.get('div[data-test="next-lesson-button"] a').click();
          cy.get("h1").contains("Testing Next.js Applications with Cypress");
          
        })
  
        it("Course: Testing Foundations", () => {
          cy.get('div[data-test="course-1"]').find('a').eq(3).click();
          cy.location("pathname").should("eq", "/testing-foundations");
          cy.get('a[data-test="next-lesson-button"]').click();
          cy.location('pathname').should("eq","/testing-foundations/testing-is-a-mindset");
          cy.get("#answer-0").click();
          cy.get('a[href="knowing-what-to-test"]').click();
          cy.url().should("include","/testing-foundations/knowing-what-to-test");
          cy.get("#answer-0").click();
          cy.get('a[href="manual-vs-automated-testing"]').click();
          cy.url().should("include","/testing-foundations/manual-vs-automated-testing");
          cy.get("#answer-0").click();
          cy.get('div[data-test="next-lesson-button"] a').click();
          cy.get("h1").contains("Testing Next.js Applications with Cypress");
        })
      });
  
  })
  