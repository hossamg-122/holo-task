# Holo GitHub Search

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Project Overview

Holo GitHub searcher is a web application that allows users to search in github users and repositories.

### Key Features

- UI Components: Followed atomic design principles for building reusable UI components with conventional naming for the components related to Holo.
- Styling: Utilized Vanilla CSS and Sass to build a Sass module for each component.
- State Management: Employed Redux toolkit and Redux persist to manage app state.
- Routing: Utilized React Router to manage routing the user across the app.
- API Integration: Built an API controller with Axios and Axios interceptors.
- Localization: Implemented i18n for localization support.
- Icon Library: Created a custom icon library named HIcon for improved performance.
- Pull Request Template: Developed a pull request template to provide clear details about each pull request.
- Unit Testing: Utilized jest for unit testing for most of the components.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname
  }
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
