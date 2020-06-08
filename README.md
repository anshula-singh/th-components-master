## Getting started

```bash
yarn install
```

## Storybook

We use Storybook to preview and develop components. To simulate how the components will actually be used, we have configured Storybook to load the components directly in the browser instead running them through Webpack which would require extra and duplicated configuration. This means that the browser only refreshes automatically when a story changes.

```bash
yarn storybook
```

## CLI

### Create Component

```bash
yarn cli component:create <namespace>/<name>
```

**Arguments**

- `--module`: Create a top level module file (see below)
- `--story`: Create a storybook story for the component
- `--test`: Create a `__tests__` directory with a test file

### Delete Component

```bash
yarn cli component:delete <namespace>/<name>
```

### Rename Component

```bash
yarn cli component:rename <prevNamespace>/<prevName> <nextNamespace>/<nextName>
```

## Directory Structure

### `/jest`

Contains Jest related setup files such as:

- Additional expect assertions (`@testing-library/jest-dom`)
- Fetch mocking (`jest-fetch-mock`)

### `/public`

Contains static files that will be copied over to the `.dist` directory during build.

### `/server`

Contains a small `connect` sever that is used to restrict ips and serve the `.dist` directory on Heroku.

### `/src/elements`

Contains the top level namespaces for the LWC components.

### `/src/elements/*`

Contains all the LWC components for the namespace.

### `/src/modules`

Contains the top level modules that are considered the public API. These files import the necessary LWC components and register them in the `customElements` registry.Not every file in `src/elements/*` has a corresponding module because many of those components are pieces composed into a larger component.

```html
<script src="/modules/th-header.js" type="module"></script>
```

### `/src/scripts`

Contains the top level scripts that are also considered part of the public API. The only difference is that these are NOT modules. They will get wrapped in an IIFE and can be loaded synchronously.

### `/src/shared`

Contains generic code that is shared across components.

### `scripts/cli`

Contains a `commander` CLI program that can be used to create/delete components. (see above)

### `/stories`

Contains Storybook stories that are compositions of many components.

### `/___fixures___`

Contains data that can be used for non-network related mocks.

### `/.storybook`

Contains Storybook related setup and configuration files.

## LWC Namespaces

### `tds`

This namespace contains composable pure view components representative of design patterns for Trailhead.

### `th`

This namespace contains components that are embeddable Trailhead applications.

### `tm`

This namespace contains composable pure view components representative of design patterns for Trailhead Marketing.

### `ui`

This namespaces contains components that are purely functional and don't have
anything to do with Trailhead.

## Theme

This project is working to establish a new baseline for styling that does not rely on SLDS. (https://salesforce.quip.com/YNMNAmenbqGf)

The `theme.js` file generates custom properties that components can use to
match the look and feel of Trailhead. Once this project matures, we will look at moving this
into the `trailhead-design-system` repo.
