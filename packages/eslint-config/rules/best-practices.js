module.exports = {
    rules: {
        // Disallow unused variables
        // https://eslint.org/docs/rules/no-unused-vars
        'no-unused-vars': ['error', {
            // Allow directly specifying unused variables and/or arguments using `_` prefix
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',

            // Allow unused rest variables, e.g `const [a, ...rest] = list`
            ignoreRestSiblings: true,
        }],

        // Disallow usage of console calls
        // https://eslint.org/docs/latest/rules/no-console
        'no-console': 'error',

        // Disallow usage of undefined variables
        // https://eslint.org/docs/latest/rules/no-undef
        'no-undef': 'error',

        // Disallow use of optional chaining in places where the undefined value is not allowed
        // https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
        'no-unsafe-optional-chaining': 'error',

        // SECTION
        // AirBnb rules imported for TS extension:

        // Disallow empty functions
        // https://eslint.org/docs/latest/rules/no-empty-function
        'no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods',
            ],
        }],
    },
}
