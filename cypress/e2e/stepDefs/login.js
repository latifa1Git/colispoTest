import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginElements from '../page_objects/loginElements';


Given(`I visit the login page`, () => {
    cy.wait(2000)
    cy.visit(loginElements.loginURL);
    cy.get(loginElements.titlecnx).should('contain', 'Connexion').should('be.visible');
});

When(`I enter valid credentials`, () => {
    cy.get(loginElements.email).type('particulier@gmail.com')
    cy.get(loginElements.password).type('0000')
    cy.get(loginElements.submit).click()
});

Then(`I should see the dashboard`, () => {
    cy.get(loginElements.MenuElement).should('contain', 'Mon compte').should('be.visible')
});

When(`I enter invalid credentials`, () => {
    cy.get(loginElements.email).type('particulier@gmail.com')
    cy.get(loginElements.password).type('000')
    cy.get(loginElements.submit).click()
});

Then(`I should see an error message`, () => {
    cy.get(loginElements.Alert).should('contain', 'Veuillez saisir un mot de passe valide').should('be.visible')

});

