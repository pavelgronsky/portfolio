module.exports = {
    plugins: [
        'jsonc',
    ],
    extends: [
        'plugin:jsonc/recommended-with-json',
    ],
    rules: {
        // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html
        'jsonc/indent': ['error', 2, {}],

        // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html
        'jsonc/object-curly-newline': ['error', {
            consistent: true,
        }],

        // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html
        'jsonc/object-curly-spacing': ['error', 'never'],

        // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html
        'jsonc/object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: true,
        }],

        // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html
        'jsonc/no-irregular-whitespace': ['error', {
            skipStrings: true,
            skipComments: false,
            skipRegExps: false,
            skipTemplates: false,
        }],

        // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html
        'jsonc/array-bracket-spacing': ['error', 'never'],

        // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html
        'jsonc/key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }],

        // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html
        'jsonc/comma-style': ['error',
            'last',
        ],
    },
}
