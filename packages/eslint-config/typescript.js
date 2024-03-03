module.exports = {
    plugins: ['@typescript-eslint'],
    overrides: [{
        files: ['*.ts', '*.tsx'],
        extends: [
            'plugin:@typescript-eslint/recommended',
            './rules/typescript/best-practices',
            './rules/typescript/style',
        ],
        rules: {},
    }],
}
