// TODO: Review the accessibility settings (part of MAC-49)

module.exports = {
    plugins: [
        'jsx-a11y',
    ],
    extends: [
        './react-a11y-inherited',
    ],
    rules: {
        // Enforce that all elements that require alternative text have meaningful information
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
        'jsx-a11y/alt-text': ['error', {
            elements: ['img', 'object', 'area', 'input[type="image"]'],
            img: [],
            object: [],
            area: [],
            'input[type="image"]': [],
        }],

        // Ensure <a> tags are valid
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
        'jsx-a11y/anchor-is-valid': ['error', {
            components: ['Link'],
            specialLink: ['to'],
            aspects: ['noHref', 'invalidHref', 'preferButton'],
        }],

        // Require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
        'jsx-a11y/click-events-have-key-events': 'error',

        // Enforce that a control (an interactive element) has a text label.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
        'jsx-a11y/control-has-associated-label': ['warn', {
            labelAttributes: ['label'],
            controlComponents: [],
            ignoreElements: [
                'audio',
                'canvas',
                'embed',
                'input',
                'textarea',
                'tr',
                'video',
            ],
            ignoreRoles: [
                'grid',
                'listbox',
                'menu',
                'menubar',
                'radiogroup',
                'row',
                'tablist',
                'toolbar',
                'tree',
                'treegrid',
            ],
            depth: 5,
        }],

        // Enforce that a label tag has a text label and an associated control.
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        'jsx-a11y/label-has-associated-control': ['error', {
            labelComponents: [],
            labelAttributes: [],
            controlComponents: [],
            assert: 'both',
            depth: 25,
        }],

        // Require that mouseover/out come with focus/blur, for keyboard-only users
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
        'jsx-a11y/mouse-events-have-key-events': 'error',

        // Prohibit autoFocus prop
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
        'jsx-a11y/no-autofocus': ['error', {ignoreNonDOM: true}],

        // A non-interactive element does not support event handlers (mouse and key handlers)
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
        'jsx-a11y/no-noninteractive-element-interactions': ['warn', {
            handlers: [
                'onClick',
                'onMouseDown',
                'onMouseUp',
                'onKeyPress',
                'onKeyDown',
                'onKeyUp',
            ],
        }],

        // Tab key navigation should be limited to elements on the page that can be interacted with.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md
        'jsx-a11y/no-noninteractive-tabindex': ['error', {
            tags: [],
            roles: ['tabpanel'],
        }],

        // Enforce that DOM elements without semantic behavior not have interaction handlers
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        'jsx-a11y/no-static-element-interactions': ['error', {
            handlers: [
                'onClick',
                'onMouseDown',
                'onMouseUp',
                'onKeyPress',
                'onKeyDown',
                'onKeyUp',
            ],
        }],

        // Enforce tabIndex value is not greater than zero.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
        'jsx-a11y/tabindex-no-positive': 'error',
    },
}
