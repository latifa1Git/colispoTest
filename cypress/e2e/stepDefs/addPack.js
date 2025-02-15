import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import loginElements from '../page_objects/loginElements';
import addPackElements from '../page_objects/addPackElements';
require('cypress-xpath')
import 'cypress-file-upload';

Given(`I Login the application`, () => {
    cy.wait(2000)
    cy.visit(loginElements.loginURL);
    cy.get(loginElements.titlecnx).should('contain', 'Connexion').should('be.visible');
    cy.get(loginElements.email).type('particulier@gmail.com')
    cy.get(loginElements.password).type('0000')
    cy.get(loginElements.submit).click()
    cy.get(loginElements.MenuElement).should('contain', 'Mon compte').should('be.visible')
});

When(`I navigate to the add pack page`, () => {
    cy.xpath(addPackElements.addPackButton).click();
});

When(`I add a pack`, () => {
    cy.xpath(addPackElements.quantity).type('1')
    cy.xpath(addPackElements.name).type('Test')
    cy.xpath(addPackElements.length).type('250')
    cy.xpath(addPackElements.width).type('250')
    cy.xpath(addPackElements.height).type('250')
    cy.xpath(addPackElements.weight).click()
    const filePath = 'pack.jpg';
    cy.xpath(addPackElements.selectPhoto).attachFile(filePath);
    cy.xpath(addPackElements.next1).click()
    cy.xpath(addPackElements.city1).type('Tunis')
    cy.wait(2000)
    cy.xpath(addPackElements.dropDownCity1).click()
    cy.xpath(addPackElements.city2).type('France')
    cy.xpath(addPackElements.dropDownCity2).click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
    });
    cy.get(addPackElements.date1).eq(0).type('2025-01-28');
    cy.xpath(addPackElements.date2).type('2025-01-29');
    cy.xpath(addPackElements.next2).click()
    cy.xpath(addPackElements.price).type('100');
    cy.xpath(addPackElements.next3).click()
    
});

Then(`I see the confirmation message`, () => {
    cy.xpath(addPackElements.confirmationMessage).should('contain', 'Votre annonce a été ajoutée avec succès !').should('be.visible')
});