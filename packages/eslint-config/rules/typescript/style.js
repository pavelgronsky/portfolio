const {tsRule} = require('../../utils/ruleUtils')
const coreStyle = require('../style').rules

module.exports = {
    rules: {
        // SECTION:
        // Extensions of the JS rules for the TS features

        // Enforce "one true brace style"
        // https://typescript-eslint.io/rules/brace-style/
        ...tsRule(coreStyle, 'brace-style'),

        // Require trailing comma in multiline objects, arrays and functions
        // https://typescript-eslint.io/rules/comma-dangle/
        ...tsRule(coreStyle, 'comma-dangle'),

        // Enforce spacing before and after comma
        // https://typescript-eslint.io/rules/comma-spacing/
        ...tsRule(coreStyle, 'comma-spacing'),

        // Enforce spacing between function and invocation
        // https://typescript-eslint.io/rules/func-call-spacing/
        ...tsRule(coreStyle, 'func-call-spacing'),

        // Enforce a space before and after keywords
        // https://typescript-eslint.io/rules/keyword-spacing/
        ...tsRule(coreStyle, 'keyword-spacing'),

        // Disallow use of the Array constructor
        // https://typescript-eslint.io/rules/no-array-constructor/
        ...tsRule(coreStyle, 'no-array-constructor'),

        // Disallow variable declarations from shadowing variables declared in the outer scope
        // https://typescript-eslint.io/rules/no-shadow/
        ...tsRule(coreStyle, 'no-shadow'),

        // Require consistent spacing withing object literals and object types.
        // https://typescript-eslint.io/rules/object-curly-spacing/
        ...tsRule(coreStyle, 'object-curly-spacing'),

        // Enforces consistent spacing before function parenthesis
        // https://typescript-eslint.io/rules/space-before-function-paren/
        ...tsRule(coreStyle, 'space-before-function-paren'),

        // Require spaces around operators
        // https://typescript-eslint.io/rules/space-infix-ops/
        ...tsRule(coreStyle, 'space-infix-ops'),

        // Disallow usage of optional semicolons in favor of ASI
        // https://typescript-eslint.io/rules/semi/
        ...tsRule(coreStyle, 'semi'),

        // Disallow useless constructors
        // The TS rule allows constructors with only parameter properties
        // https://typescript-eslint.io/rules/no-useless-constructor/
        ...tsRule(coreStyle, 'no-useless-constructor'),

        // SECTION:
        // TypeScript-specific rules

        // Bans TS directive comments from being used or requires descriptions after directive.
        // true -> ban the directive completely
        // 'allow-with-description' -> require a comment as why it's needed
        // false -> allow the use of directive
        // https://typescript-eslint.io/rules/ban-ts-comment/
        '@typescript-eslint/ban-ts-comment': ['error', {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': true,
            'ts-check': false,
        }],

        // Require consistent delimiters in type and interface definitions
        // https://typescript-eslint.io/rules/member-delimiter-style
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'semi',
                requireLast: true,
            },
            singleline: {
                delimiter: 'semi',
                requireLast: false,
            },
            multilineDetection: 'brackets',
        }],

        // Require consistent spacing around type annotations
        // https://typescript-eslint.io/rules/type-annotation-spacing
        '@typescript-eslint/type-annotation-spacing': ['error', {
            before: false,
            after: true,
            overrides: {
                arrow: {before: true},
            },
        }],
    },
}
