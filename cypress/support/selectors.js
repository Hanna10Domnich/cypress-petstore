// Centralized selectors for Cypress tests

module.exports = {
  login: {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
    errorMessage: '[data-test="error"]',
  },
  inventory: {
    item: '.inventory_item',
    addToCartButton: '.btn_inventory',
    cartBadge: '.shopping_cart_badge',
  },
  cart: {
    cartItem: '.cart_item',
    checkoutButton: '[data-test="checkout"]',
  },
  // Add more selectors as needed for your app
};
