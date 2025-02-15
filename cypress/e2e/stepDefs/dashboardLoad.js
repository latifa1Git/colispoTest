import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginElements from '../page_objects/loginElements';
import dashboardElements from '../page_objects/dashboardElements';

Given(`I Login to the application`, () => {
    /*cy.visit(loginElements.loginURL);
    cy.get(loginElements.titlecnx).should('contain', 'Connexion').should('be.visible');
    cy.get(loginElements.email).type('particulier@gmail.com')
cy.get(loginElements.password).type('0000')
cy.get(loginElements.submit).click()
cy.contains(/Mon compte|My account/)*/
cy.visit('https://www.colispo.com/');
});

When(`I navigate to the dashboard`, () => {
    cy.title().should('eq', 'Accueil');
});

Then(`I see the dashboard elements`, () => {
    cy.get(dashboardElements.topcontainer).should('have.text', 'Transporteur nécessaire ?Voulez-vous devenir transporteur ?').should('be.visible');
    cy.get(dashboardElements.Aproposdenous).should('contain', 'À propos de nous').should('be.visible');
    cy.get(dashboardElements.EnvoyerUnemail).should('contain', 'Envoyer un e-mail').should('be.visible');
    cy.get(dashboardElements.ContactezNous).should('contain', 'Contactez-nous').should('be.visible');
    cy.get(dashboardElements.Footercontainer).should('have.text', "Comment ça marche ?Comment ça marche ?Prix négociablesLes particuliers décident du prix correct pour expédier ou transporter les colis.Service 24h/24Notre service offre la possibilité de faire des annonces et de transporter les colis à tout moment.Facile à utiliserFacilité d'ajouter votre colis ou de faire des offres pour transporter des colisPrix négociablesLes particuliers décident du prix correct pour expédier ou transporter les colis.Service 24h/24Notre service offre la possibilité de faire des annonces et de transporter les colis à tout moment.Facile à utiliserFacilité d'ajouter votre colis ou de faire des offres pour transporter des colis Qui sommes-nous?Découvrez notre histoire, nos valeurs et notre vision.Pourquoi nous choisir ?Découvrez les avantages d'expédier avec nous, de la transparence aux tarifs compétitifs.  ServicesDécouvrez les services que nous offrons, de l'envoi de colis à la gestion des formalités douanières.Actualités & notificationsDernières nouvellesRestez informé avec les dernières nouvelles et mises à jour de notre entreprise.NotificationsSoyez averti des changements importants, des offres exclusives et des nouvelles destinations disponibles.DernièresConsultez les dernières annoncesVoir les dernières annoncesÀ propos de nousColispo est la première plateforme au monde dédiée au covoiturage de colis entre particuliers. Notre service met en relation des personnes souhaitant expédier des colis à moindre coût et des conducteurs prêts à transporter ces envois lors de leurs trajets.Contactez-nousParis, Francecolispo_team@colispo.com+ 01 234 567 88+ 01 234 567 89Envoyer un e-mailEnvoyer").should('be.visible');
    cy.log('Dashboard elements are visible');
});