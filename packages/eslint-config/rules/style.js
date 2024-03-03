// FIXME: Review basic style rules

module.exports = {
    rules: {
        // Enforce "one true brace style"
        // https://eslint.org/docs/rules/brace-style/
        'brace-style': ['error', '1tbs', {allowSingleLine: true}],

        // Require trailing comma in multiline objects, arrays and functions
        // https://eslint.org/docs/rules/comma-dangle/
        'comma-dangle': ['error', 'always-multiline'],

        // Enforce spacing before and after comma
        // https://eslint.org/docs/rules/comma-spacing/
        'comma-spacing': ['error', {before: false, after: true}],

        // Enforce spacing between function and invocation
        // https://eslint.org/docs/rules/func-call-spacing/
        'func-call-spacing': ['error', 'never'],

        // Ignore warnings regarding newlines before arrow shorthand body
        // Removed after discussion on #dev-convo
        // https://eslint.org/docs/rules/implicit-arrow-linebreak/
        'implicit-arrow-linebreak': 'off',

        // Require consistent indentation
        // https://eslint.org/docs/rules/indent/
        indent: ['error', 4, {SwitchCase: 1}],

        // Disallow usage of optional semicolons in favor of ASI
        // https://eslint.org/docs/rules/semi/
        semi: ['error', 'never'],

        // Disallow multiple empty lines in code and padding at start and end of file
        // https://eslint.org/docs/rules/no-multiple-empty-lines/
        'no-multiple-empty-lines': ['warn', {
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
        }],

        // Require consistent spacing in object literals
        // https://eslint.org/docs/rules/object-curly-spacing/
        'object-curly-spacing': ['error', 'never'],

        // Enforce newline before return statement if it's not the only statement in a block
        // https://eslint.org/docs/rules/padding-line-between-statements/
        'padding-line-between-statements': ['error',
            {blankLine: 'always', prev: '*', next: 'return'},
        ],

        'prefer-const': ['warn', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        }],

        // Enforce consistent style of strings
        // https://eslint.org/docs/rules/quotes/
        quotes: ['error', 'single', {allowTemplateLiterals: true, avoidEscape: true}],

        // Enforces consistent spacing before function parenthesis.
        // https://eslint.org/docs/rules/space-before-function-paren/
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        
        // Require spaces around operators
        // https://eslint.org/docs/rules/space-infix-ops/
        'space-infix-ops': 'error',

        // SECTION
        // AirBnb rules imported for TS extension:

        // Enforce a space before and after keywords
        // https://eslint.org/docs/rules/keyword-spacing/
        'keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                return: {after: true},
                throw: {after: true},
                case: {after: true},
            },
        }],

        // Disallow use of the Array constructor
        // https://eslint.org/docs/rules/no-array-constructor/
        'no-array-constructor': 'error',

        // Disallow unnecessary constructor
        // https://eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 'error',

        // SECTION
        // TODO: Test section, check, document then move above
        'no-trailing-spaces': ['warn', {
            skipBlankLines: true,
        }],
        'no-unneeded-ternary': 'warn',
        'no-unexpected-multiline': 'warn',
        'no-shadow': 'warn',

        // SECTION
        // TODO: Review following rules
        'arrow-parens': ['warn', 'as-needed'],
        'consistent-return': 'off',
        'default-case': 'error',
        'default-param-last': 'warn',
        'function-paren-newline': 'off',
        'function-call-argument-newline': 'off',
        'id-length': ['warn', {min: 2, exceptions: ['_', 'i', 'j', 'k', 'n', 'm']}],
        'linebreak-style': 'off',
        'no-async-promise-executor': 'off',
        'no-case-declarations': 'warn',
        'no-confusing-arrow': 'warn',
        'no-mixed-operators': 'off',
        'no-plusplus': 'off',
        'no-return-assign': 'off',
        'no-use-before-define': 'off',
        'object-shorthand': 'warn',
        'operator-linebreak': ['error', 'after'],
        'prefer-destructuring': 'warn',
        'prefer-promise-reject-errors': 'warn',
        'space-unary-ops': ['warn', {words: true, nonwords: false}],
    },
}
