# eslint-config-pg

This repository contains common configuration for ESLint used in PG.

## Exported configs

### `eslint-config`

Default config, contains rules enforcing basic styleguide and best practices.

### `eslint-config/react`

Config extension containing rules related to usage of React framework and JSX.

### `eslint-config/typescript`

Config extension containing rules and overrides related to usage of TypeScript.

### `eslint-config/import` and `eslint-config/import-ts`

Config extension containing rules related to imports.

### `eslint-config/jest`

Config extension for test files.

## `eslint-config/json`

Config containing rules for json files.

**Note**: If you have already specified a parser in your .eslintrc, you will also need to manually configure the parser for JSON files (your parser config takes priority over that defined by extends shared configs).

---
**NOTE**

If you want to properly apply linter to TypeScript files, you need to use `--ext .js,.ts` option (add `.jsx` and `.tsx` where applicable).

---

### `eslint-config/import`, `eslint-config/import-ts`

Config extensions related to the `eslint-plugin-import`.

### `eslint-config/jest`

Config extension containing rules related to Jest files and specifications.

## Usage

- Add package to list of devDependencies in `package.json`.
- In the `.eslintrc` file in the project add desired configs in the `extends` section, for example:

```
...
"extends": [
    "@eslint-config-eu",
    "@eslint-config-eu/eslint-config/typescript"
],
...
```

It's important to note that the `eslint-config` part in `@eslint-config-eu/eslint-config/typescript` is required, as `@eslint-config-eu/typescript` would resolve to `@eslint-config-eu/eslint-config-typescript`

Make sure that the base config is the first one included, as the other configs may override the rules, and rely on plugins imported in the base config.

- If needed, you can apply local overrides in the `rules` section in project's `.eslintrc`. That being said, please be very cautious about introducing local overrrides, as it may cause major differences across all of the components. Each of local rules should be annotated with a `// TODO:` comment describing what is the expected behaviour of the rule, possibly best to add a task, which further describes what needs to be done.

### Improving performance

#### TypeScript parser

TypeScript parser by default runs in a continuous mode, which causes an overhead that is not needed in the CLI/script context. To enable detection, you can add following option to the `parserOptions`:

```
allowAutomaticSingleRunInference: true,
```

## Debugging and profiling

To show timers per file use:
```
Powershell:
$env:DEBUG="eslint:cli-engine"

Bash:
DEBUG="eslint:cli-engine"
```

To show a table of time spent per rule use:
```
Powershell:
$env:TIMING="all"
or
$env:TIMING=<number>

Bash:
TIMING=all
or
TIMING=<number>
```
where `<number>` is number of top results you wish to see
