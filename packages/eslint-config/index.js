module.exports = {
    reportUnusedDisableDirectives: true,
    extends: [
        './rules/airbnb',
        './rules/style',
        './rules/best-practices',
    ],
    rules: {
        'space-before-function-paren': ['error', {
            anonymous: 'ignore', // TODO: always
            named: 'ignore', // TODO: always
            asyncArrow: 'always',
        }],
        'max-len': ['warn', 160], // TODO: ["error", 160]
        'no-underscore-dangle': 'off', // TODO: change to warn?
        'no-param-reassign': 'warn', // TODO: remove this line as by default it's an error
        'no-restricted-syntax': 'warn', // TODO: remove this line as by default it's an error
        'class-methods-use-this': 'warn', // TODO: remove this line as by default it's an error
    },
}
