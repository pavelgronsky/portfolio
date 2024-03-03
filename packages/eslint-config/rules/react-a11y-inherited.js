// TODO: Review the accessibility settings (part of MAC-49)
// FIXME: Review the config and merge it to `rules/react-a11y.js`

module.exports = {
    rules: {
        // AIRBNB DEFAULTS

        // Ensure emoji are accessible
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
        // disabled; rule is deprecated
        'jsx-a11y/accessible-emoji': 'off',

        // Enforce that anchors have content
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
        'jsx-a11y/anchor-has-content': ['error', {components: []}],

        // elements with aria-activedescendant must be tabbable
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

        // Enforce all aria-* props are valid.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
        'jsx-a11y/aria-props': 'error',

        // Enforce ARIA state and property values are valid.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
        'jsx-a11y/aria-proptypes': 'error',

        // Require ARIA roles to be valid and non-abstract
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
        'jsx-a11y/aria-role': ['error', {ignoreNonDOM: false}],

        // Enforce that elements that do not support ARIA roles, states, and
        // properties do not have those attributes.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
        'jsx-a11y/aria-unsupported-elements': 'error',

        // Ensure the autocomplete attribute is correct and suitable for the form field it is used with
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md
        'jsx-a11y/autocomplete-valid': ['off', {
            inputComponents: [],
        }],

        // Ensure <hX> tags have content and are not aria-hidden
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
        'jsx-a11y/heading-has-content': ['error', {components: ['']}],

        // Require HTML elements to have a "lang" prop
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
        'jsx-a11y/html-has-lang': 'error',

        // Ensure iframe elements have a unique title
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
        'jsx-a11y/iframe-has-title': 'error',

        // Prevent img alt text from containing redundant words like "image", "picture", or "photo"
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
        'jsx-a11y/img-redundant-alt': 'error',

        // Elements with an interactive role and interaction handlers must be focusable
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md
        'jsx-a11y/interactive-supports-focus': 'error',

        // Require HTML element's lang prop to be valid
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
        'jsx-a11y/lang': 'error',

        // Media elements must have captions
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
        'jsx-a11y/media-has-caption': ['error', {
            audio: [],
            video: [],
            track: [],
        }],

        // Prevent use of `accessKey`
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
        'jsx-a11y/no-access-key': 'error',

        // Prevent distracting elements, like <marquee> and <blink>
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
        'jsx-a11y/no-distracting-elements': ['error', {
            elements: ['marquee', 'blink'],
        }],

        // WAI-ARIA roles should not be used to convert an interactive element to non-interactive
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md
        'jsx-a11y/no-interactive-element-to-noninteractive-role': ['error', {
            tr: ['none', 'presentation'],
        }],

        // WAI-ARIA roles should not be used to convert a non-interactive element to interactive
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
        'jsx-a11y/no-noninteractive-element-to-interactive-role': ['error', {
            ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
            ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
            li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
            table: ['grid'],
            td: ['gridcell'],
        }],

        // Require onBlur instead of onChange
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
        'jsx-a11y/no-onchange': 'off',

        // Ensure HTML elements do not specify redundant ARIA roles
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
        'jsx-a11y/no-redundant-roles': 'error',

        // Enforce that elements with ARIA roles must have all required attributes
        // for that role.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
        'jsx-a11y/role-has-required-aria-props': 'error',

        // Enforce that elements with explicit or implicit roles defined contain
        // only aria-* properties supported by that role.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
        'jsx-a11y/role-supports-aria-props': 'error',

        // Only allow <th> to have the "scope" attr
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
        'jsx-a11y/scope': 'error',

        // END OF AIRBNB DEFAULTS
    },
}
