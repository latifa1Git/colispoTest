import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import suggestRouteElements from '../page_objects/suggestRouteElements';

/*Given(`I Login the application`, () => {
    // [Given] Sets up the initial state of the system.
});*/

beforeEach(() => {
    cy.intercept('POST', '/t_trajets').as('addRoute')
    });
When(`I navigate to the suggest route page`, () => {
    cy.wait(5000);
    cy.get(suggestRouteElements.suggestRouteButton).eq(3).click();
});

When(`I suggest a route`, () => {
    cy.get(suggestRouteElements.city1).eq(0).type('Paris', {delay: 100});
    cy.get(suggestRouteElements.clickCity1).eq(0).click();
    cy.get(suggestRouteElements.city2).eq(1).type('Lyon', {delay: 100});
    cy.wait(3000);
    cy.get(suggestRouteElements.clickCity2).eq(0).scrollIntoView().click();
    cy.wait(2000);
    cy.get(suggestRouteElements.date1).eq(0).type('2025-12-29', {delay: 100});
    cy.get(suggestRouteElements.time1).click();
    cy.get(suggestRouteElements.date2).eq(1).type('2025-12-30', {delay: 100});
    cy.get(suggestRouteElements.time2).click();
    cy.get(suggestRouteElements.transport).click();
    cy.get(suggestRouteElements.reservation).type('X3Y7Z9', {delay: 100});
    cy.get(suggestRouteElements.volNumber).type('123-0123456789', {delay: 100});
    cy.get(suggestRouteElements.lengthMax).type('100', {delay: 100});
    cy.get(suggestRouteElements.widthMax).type('100', {delay: 100});
    cy.get(suggestRouteElements.heightMax).type('100', {delay: 100});
    cy.get(suggestRouteElements.weightMax).click();
    cy.get(suggestRouteElements.radioButton1).eq(0).click();
    cy.get(suggestRouteElements.radioButton2).eq(0).click();
    cy.get(suggestRouteElements.radioButton3).eq(0).click();
    cy.get(suggestRouteElements.radioButton4).eq(0).click();
    cy.get(suggestRouteElements.submitButton).click();
    cy.wait(2000);

});

Then(`I should see the success message`, () => {
    //cy.get(suggestRouteElements.alertSuccess).eq(4).should('be.visible');
    cy.wait('@addRoute').then((interception) => {
        expect(interception.response.statusCode).to.eq(201)
        expect(interception.response.body).to.have.property('go_time')
        expect(interception.response.body).to.have.property('max_length').eq(100)
    })
});