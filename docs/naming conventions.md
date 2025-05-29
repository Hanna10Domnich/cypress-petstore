# Naming Conventions for Pages and Components

This document defines the naming conventions to be used for pages and components in this project to ensure consistency and clarity.

## Pages

- Page objects and selectors should be named using camelCase.
- Page files should be named using kebab-case (e.g., `login-page.js`).
- Page variables should be descriptive and end with `Page` (e.g., `loginPage`, `cartPage`).
- Use singular form for page names (e.g., `inventoryPage`, not `inventoriesPage`).

## Components

- Component objects and selectors should be named using camelCase.
- Component files should be named using kebab-case (e.g., `cart-item.js`).
- Component variables should be descriptive and end with `Component` (e.g., `cartItemComponent`).
- Use singular form for component names (e.g., `buttonComponent`).

## Selectors

- Group selectors by page or component in `selectors.js`.
- Use descriptive keys for selectors (e.g., `usernameInput`, `addToCartButton`).
- Prefix selectors with the page or component name if needed for clarity (e.g., `loginUsernameInput`).

## Example

```js
// selectors.js
const selectors = {
  loginPage: {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
  },
  cartPage: {
    continueShopping: '[data-test="continue-shopping"]',
  },
  cartItemComponent: {
    itemName: '.cart_item .inventory_item_name',
  },
};
```

---

Following these conventions will make your codebase easier to read, maintain, and scale.
