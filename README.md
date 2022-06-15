<p align="center"><img width="160" src="./logo.svg" alt="Vue logo"></p>

<h1 align="center">
  Baloise - Vue Starter Kit
  <br />
  <small>(Vue 3 + Typescript + Vite)</small>
</h1>

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Plugins

- Component library: [Baloise Design System](https://design.baloise.dev/)
- Router: [Vue Router](https://next.router.vuejs.org/)
- State Management: [Pinia](https://pinia.vuejs.org/)
- Form Validation: [VeeValidate](https://vee-validate.logaretm.com/v4/)
- Internationalization: [Vue i18n](https://vue-i18n.intlify.dev/)
- Http client: [Axios](https://www.npmjs.com/package/axios)
- Testing: [Vitest](https://vitest.dev/)
- E2E Testing: [Cypress](https://www.cypress.io/)
- Linting: [ESlint](https://eslint.org/)
- Formatting: [Prettier](https://prettier.io/)
- Documentation: [Storybook](https://storybook.js.org/)

## Recommended Utilities

- JavaScript utility library: [Lodash](https://lodash.com/)
- JavaScript date library: [date-fns](https://date-fns.org/)

## Recommended IDE Setup

- Install the IDE [VSCode](https://code.visualstudio.com/).
- Install all recommended extensions.

## Recommended Documentations

- [Vue 3](https://v3.vuejs.org/)
- Learing Platform: [Vue Mastery](https://www.vuemastery.com/)

## Getting started

To get stared clone the vue-starter-kit repository to you machine. Then navigate into the root folder of the project and install the npm dependencies.

```bash
git clone git@github.com:baloise/vue-starter-kit.git
cd vue-starter-kit
npm install
```

After setting up the project we can serve our application with:

```bash
npm run dev
```

The development sever runs at `http://localhost:3000/`.

## NPM Scripts

### install

Installs all the dependencies, which are listed in the `package.json`.

```bash
npm install
```

### serve

Serves the application on the development server, which runs at `http://localhost:3000/`.

```bash
npm run dev
```

### docs

Starts the local storybook server at `http://localhost:6006/`.

```bash
npm run docs
```

### test

### Unit

Run unit tests with vitest.

```bash
npm run test

# or run test with a watcher and a nice ui
npm run test:ui
```

### End 2 End

Starts the development server and runs the cypress E2E test against it.

```bash
npm run test:e2e
```

### build

Build the application for production release. The builded application will be in the `dist` folder.

```bash
npm run build
```

### lint

Lints the whole src folder. Linting is also executed before the build.

```bash
npm run lint
```

### format

With the help of the tool prettier we format all our source files.

```bash
npm run format
```

## License

Apache-2.0 Licensed | Copyright © 2021-present Gery Hirschfeld & Contributors