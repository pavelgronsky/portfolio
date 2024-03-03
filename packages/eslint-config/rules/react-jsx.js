module.exports = {
    rules: {
        // Specify whether double or single quotes should be used in JSX attributes
        // https://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': ['error', 'prefer-double'],

        // Validate closing bracket location in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],

        // Validate closing tag location in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
        'react/jsx-closing-tag-location': 'error',

        // Enforce or disallow spaces inside of curly braces in JSX attributes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        'react/jsx-curly-spacing': ['warn', {
            when: 'never',
            children: true,
            allowMultiline: true,
        }],

        // Enforce spacing around jsx equals signs
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        'react/jsx-equals-spacing': ['error', 'never'],

        // Enforce shorthand or standard form for React fragments
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
        'react/jsx-fragments': ['warn', 'syntax'],

        // Only .tsx, .jsx and test files may have JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': ['warn', {
            extensions: ['.tsx', '.jsx', 'test.ts', '.test.js'],
        }],

        // Enforce JSX indentation
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': ['warn', 4],

        // Validate props indentation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': ['warn', 4],

        // Limit maximum of props on a single line in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        'react/jsx-max-props-per-line': ['warn', {maximum: 2}],

        // Prevent usage of unwrapped JSX strings
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
        'react/jsx-no-literals': 'off',

        // One JSX Element Per Line
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
        'react/jsx-one-expression-per-line': 'off',

        // Disallow JSX props spreading
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
        'react/jsx-props-no-spreading': ['warn', {
            html: 'enforce',
            custom: 'enforce',
            explicitSpread: 'ignore',
            exceptions: [],
        }],

        // Deprecated in favor of react/jsx-sort-props
        'react/jsx-sort-prop-types': 'off',

        // Enforce props alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        'react/jsx-sort-props': ['off', {
            ignoreCase: true,
            callbacksLast: false,
            shorthandFirst: false,
            shorthandLast: false,
            noSortAlphabetically: false,
            reservedFirst: true,
        }],
        
        // Prevent missing parentheses around multilines JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-wrap-multilines.md
        'react/jsx-wrap-multilines': ['warn', {
            arrow: 'parens-new-line',
            assignment: 'parens-new-line',
            condition: 'ignore',
            declaration: 'parens-new-line',
            logical: 'ignore',
            prop: 'ignore',
            return: 'parens-new-line',
        }],
    },
}
