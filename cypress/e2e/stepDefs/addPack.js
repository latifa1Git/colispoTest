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
    cy.get(addPackElements.quantity).eq(1).type('1')
    cy.get(addPackElements.name).eq(2).type('Test')
    cy.get(addPackElements.length).eq(3).type('250')
    cy.get(addPackElements.width).eq(4).type('250')
    cy.get(addPackElements.height).eq(5).type('250')
    cy.get(addPackElements.weight).click()
    const filePath = 'pack.jpg';
    cy.xpath(addPackElements.selectPhoto).attachFile(filePath);
    cy.get(addPackElements.next1).click()
    cy.get(addPackElements.city1).eq(0).type('Tunis')
    cy.wait(2000)
    cy.get(addPackElements.dropDownCity1).eq(4).click()
    cy.get(addPackElements.city2).eq(1).type('France', {delay: 300});
    cy.get(addPackElements.dropDownCity2, {timeout: 10000}).eq(4).click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
    });
    cy.get(addPackElements.date1).eq(1).type('2025-12-30');
    cy.get(addPackElements.date2).eq(0).type('2025-12-29');
    cy.get(addPackElements.next2).click()
    cy.get(addPackElements.price).eq(1).type('100');
    cy.get(addPackElements.next3).click()
    
});

Then(`I see the confirmation message`, () => {
    cy.get(addPackElements.confirmationMessage).eq(1).should('be.visible').and('contain', 'Votre annonce a été ajoutée avec succès !')
});