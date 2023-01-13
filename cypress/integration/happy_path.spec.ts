/// <reference types="cypress" />

import { TABLE_HEADERS } from '../../src/constants/verbiage';
import { TPolicyholder } from '../../src/types/policyholder';

describe('happy path', () => {
  it('runs happy path successfully', () => {
    cy.visit('/');
    cy.getTestEl('table_link').should('be.visible');
    cy.getTestEl('you_go_link').should('be.visible');
    cy.getTestEl('policyholders_link').should('be.visible');
  });

  it('renders PolicyholdersView', () => {
    cy.visit('/');
    cy.intercept('/api/policyholders').as('getPolicyholders');
    cy.getTestEl('policyholders_link').click();
    cy.wait('@getPolicyholders').should(({ request, response }) => {
      expect(request.url).to.match(/\/policyholders$/);
      expect(request.method).to.equal('GET');
      const data = response.body;

      cy.get('h5').contains(TABLE_HEADERS.POLICYHOLDER);
      data.policyHolders.forEach((ph: TPolicyholder) => {
        cy.get('td').contains(ph.name);
        cy.get('td').contains(ph.age);
        cy.get('td').contains(ph.phoneNumber);
        cy.get('td').contains(ph.address.line1);
        cy.get('td').contains(ph.address.line2);
        cy.get('td').contains(ph.address.city);
        cy.get('td').contains(ph.address.state);
        cy.get('td').contains(ph.address.postalCode);
        cy.get('td').contains(ph.isPrimary ? 'Yes' : 'No');
      });
    });
  });
});
