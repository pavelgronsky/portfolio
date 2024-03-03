module.exports = {
    extends: [
        './rules/react',
        './rules/react-jsx',
        './rules/react-a11y',
    ],
    rules: {
        // TEMPORARY OVERRIDES
        'react/jsx-sort-props': 'off', // TODO: change to 'warn' in the future
        'react/jsx-props-no-spreading': 'warn', // TODO: remove to enforce reserved props being firsts
        'react/jsx-equals-spacing': 'warn', // TODO: remove this line as by default it's an error
        'react/jsx-closing-tag-location': 'warn', // TODO: remove this line as by default it's an error

        'react/forbid-component-props': 'off', // TODO: change to "react/forbid-component-props": ["warn", {"forbid": ["style"]}],
        'react/no-access-state-in-setstate': 'warn', // TODO: remove this line as by default it's an error
        'react/no-array-index-key': 'warn', // TODO: remove this line as by default it's an error
        'react/no-did-mount-set-state': 'warn', // TODO: remove this line as by default it's an error
        'react/no-did-update-set-state': 'warn', // TODO: remove this line as by default it's an error
        'react/no-unused-prop-types': 'warn', // TODO: remove this line as by default it's an error
        'react/no-unused-state': 'warn', // TODO: remove this line as by default it's an error
        'react/prefer-stateless-function': 'off', // TODO: remove this line as by default it's an error

        // END OF TEMPORARY OVERRIDES
        
        // ACCESSIBILTY OVERRIDES
        // TODO: Review the accessibility settings (part of MAC-49)
        'jsx-a11y/alt-text': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/control-has-associated-label': 'warn',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/mouse-events-have-key-events': 'warn',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-tabindex': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/tabindex-no-positive': 'off',
        // END OF ACCESSIBILTY OVERRIDES
    },
}
