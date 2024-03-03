module.exports = {
    plugins: [
        'import',
    ],
    rules: {
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
        'import/extensions': 'off',

        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
        'import/namespace': 'warn',

        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
        'import/order': ['warn', {
            'newlines-between': 'always',
            groups: [
                'builtin',
                'external',
                'internal',
                ['parent', 'sibling'],
                'index',
            ],
            pathGroups: [
                {
                    pattern: '@pg/**',
                    group: 'external',
                    position: 'after',
                },
            ],
        }],

        'import/no-extraneous-dependencies': ['error'],

        // SECTION
        // TODO: Review following rules
        'import/no-named-as-default': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
    },
}
