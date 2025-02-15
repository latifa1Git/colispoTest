import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import seeAnnouncementElements from '../page_objects/seeAnnouncementElements';
import { beforeEach } from 'mocha';


beforeEach(() => {
    cy.intercept('GET', 'https://api.colispo.com/trajets?page=1&filter[from_address][name]=&filter[to_address][name]=').as('getTrajets');
    cy.intercept('GET', 'https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true').as('map')
});

When(`I navigate to the announcement page`, () => {
    cy.visit(seeAnnouncementElements.announcementUrl);
    cy.wait(2000);
    cy.wait('@getTrajets', {timeout: 10000}).then((interception) => {
        expect(interception.response.statusCode).to.eq(200)
    });
    cy.wait('@map').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    });
});

Then(`I see the announcement`, () => {
    cy.get(seeAnnouncementElements.sideBar).should('be.visible').should('contain.html', 'col');
    cy.get(seeAnnouncementElements.map).should('be.visible');
    //capture d'écran
    cy.screenshot();
    
        /*const trajets = interception.response.body;
        const trajet1 = trajets[2];
        const trajet2 = trajets[3];
        //verification premier trajet
        expect(trajet1._id).to.exist;
        expect(trajet1.date_creation).to.exist;
        expect(trajet1.etat).to.exist;
        expect(trajet1.prix).to.exist;
        expect(trajet1.from_address.name).to.exist;
        expect(trajet1.to_address.name).to.exist;})
        /*verification second trajet
        expect(trajet2.prix).to.eq(234);
        expect(trajet2.from_address.name).to.eq('Toronto');
        cy.wait(2000);
        expect(trajet2.to_address.name).to.eq('Tucson');})*/
});