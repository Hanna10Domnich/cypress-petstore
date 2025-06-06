// UI Login Page Test Suite (Use Cases Only, No Implementation)
// Refer to /docs/test-writing-guideline.md for structure and conventions

describe('Login Page UI', { testIsolation: false }, () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  context('Valid Login', () => {
    it('Should log in successfully with valid credentials', () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
      cy.contains('Products').should('be.visible');
    });
    it('Should log in successfully with problem_user', () => {
      cy.get('#user-name').type('problem_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
      cy.contains('Products').should('be.visible');
    });
    it('Should log in successfully with performance_glitch_user', () => {
      cy.get('#user-name').type('performance_glitch_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
      cy.contains('Products').should('be.visible');
    });
  });

  context('Invalid Login', () => {
    it('Should display error for invalid username', () => {
      cy.get('#user-name').type('invalid_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
    });
    it('Should display error for invalid password', () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('wrong_password');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
    });
    it('Should display error for empty username', () => {
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('contain', 'Username is required');
    });
    it('Should display error for empty password', () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('contain', 'Password is required');
    });
    it('Should display error for locked out user', () => {
      cy.get('#user-name').type('locked_out_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out.');
    });
  });

  context('UI Elements', () => {
    it('Should display username and password fields', () => {
      cy.get('#user-name').should('be.visible');
      cy.get('#password').should('be.visible');
    });
    it('Should display login button', () => {
      cy.get('#login-button').should('be.visible');
    });
    it('Should display logo and branding', () => {
      cy.get('.login_logo').should('be.visible');
    });
    it('Should display error message area after failed login', () => {
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('be.visible');
    });
    it('Should display the bot image', () => {
      cy.get('.bot_column').find('img').should('be.visible');
    });
    it('Should have a footer with copyright', () => {
      cy.get('.login_wrapper').parent().find('footer').should('be.visible');
    });
  });

  context('Security', () => {
    it('Should not allow more than max login attempts (demo, not enforced)', () => {
      for (let i = 0; i < 3; i++) {
        cy.get('#user-name').clear().type('invalid_user');
        cy.get('#password').clear().type('wrong');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible');
      }
    });
    it('Should mask password input', () => {
      cy.get('#password').should('have.attr', 'type', 'password');
    });
    it('Should not expose password in error message', () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('not.contain', 'secret_sauce');
    });
  });
});
