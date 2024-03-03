// FIXME: Review the config and merge it to `rules/react.js`

module.exports = {
    rules: {
        // AIRBNB DEFAULTS

        // Prevent missing displayName in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
        'react/display-name': ['off', {ignoreTranspilerName: false}],

        // Forbid certain props on DOM Nodes
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-dom-props.md
        'react/forbid-dom-props': ['off', {forbid: []}],

        // Enforce boolean attributes notation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        'react/jsx-boolean-value': ['error', 'never', {always: []}],

        // Enforce event handler naming conventions in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        'react/jsx-handler-names': ['off', {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on',
        }],

        // Validate JSX has key prop when in array or iterator
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        'react/jsx-key': 'off',

        // Prevent usage of .bind() in JSX props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        'react/jsx-no-bind': ['error', {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowFunctions: false,
            allowBind: false,
            ignoreDOMComponents: true,
        }],

        // Prevent duplicate props in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}],

        // Disallow undeclared variables in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
        'react/jsx-no-undef': 'error',

        // Enforce PascalCase for user-defined JSX components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        'react/jsx-pascal-case': ['error', {
            allowAllCaps: true,
            ignore: [],
        }],

        // Enforce defaultProps declarations alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-sort-default-props.md
        'react/jsx-sort-default-props': ['off', {
            ignoreCase: true,
        }],

        // Prevent React to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        'react/jsx-uses-react': ['error'],

        // Prevent variables used in JSX to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        'react/jsx-uses-vars': 'error',

        // Prevent usage of dangerous JSX properties
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        'react/no-danger': 'warn',

        // Prevent usage of deprecated methods
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
        'react/no-deprecated': ['error'],

        // Prevent direct mutation of this.state
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        'react/no-direct-mutation-state': 'off',

        // Prevent usage of isMounted
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
        'react/no-is-mounted': 'error',

        // Prevent usage of setState
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
        'react/no-set-state': 'off',

        // Prevent using string references
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
        'react/no-string-refs': 'error',

        // Prevent usage of unknown DOM property
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
        'react/no-unknown-property': 'error',

        // Require ES6 class declarations over React.createClass
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
        'react/prefer-es6-class': ['error', 'always'],

        // Prevent missing React when using JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        'react/react-in-jsx-scope': 'error',

        // Require render() methods to return something
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
        'react/require-render-return': 'error',

        // Prevent extra closing tags for components without children
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        'react/self-closing-comp': 'error',

        // Require that the first prop in a JSX element be on a new line when the element is multiline
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

        // Disallow target="_blank" on links
        // https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-no-target-blank.md
        'react/jsx-no-target-blank': ['error', {enforceDynamicLinks: 'always'}],

        // Prevent accidental JS comments from being injected into JSX as text
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
        'react/jsx-no-comment-textnodes': 'error',

        // Disallow using React.render/ReactDOM.render's return value
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
        'react/no-render-return-value': 'error',

        // Require a shouldComponentUpdate method, or PureRenderMixin
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
        'react/require-optimization': ['off', {allowDecorators: []}],

        // Warn against using findDOMNode()
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
        'react/no-find-dom-node': 'error',

        // Forbid certain elements
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
        'react/forbid-elements': ['off', {forbid: []}],

        // Prevent problem with children and props.dangerouslySetInnerHTML
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
        'react/no-danger-with-children': 'error',

        // Require style prop value be an object or var
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
        'react/style-prop-object': 'error',

        // Prevent passing of children as props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
        'react/no-children-prop': 'error',

        // Validate whitespace in and around the JSX opening and closing brackets
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-tag-spacing.md
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never',
        }],

        // Enforce spaces before the closing bracket of self-closing JSX elements
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
        // Deprecated in favor of jsx-tag-spacing
        'react/jsx-space-before-closing': ['off', 'always'],

        // Forbids using non-exported propTypes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
        // this is intentionally set to "warn". it would be "error",
        // but it's only critical if you're stripping propTypes in production.
        'react/forbid-foreign-prop-types': ['warn', {allowInPropTypes: true}],

        // Prevent void DOM elements from receiving children
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
        'react/void-dom-elements-no-children': 'error',

        // Enforce all defaultProps have a corresponding non-required PropType
        // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/default-props-match-prop-types.md
        'react/default-props-match-prop-types': ['error', {allowRequiredDefaults: false}],

        // Prevent usage of shouldComponentUpdate when extending React.PureComponent
        // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/no-redundant-should-component-update.md
        'react/no-redundant-should-component-update': 'error',

        // Enforces consistent naming for boolean props
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/boolean-prop-naming.md
        'react/boolean-prop-naming': ['off', {
            propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
            rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
            message: '',
        }],

        // Prevents common casing typos
        // https://github.com/yannickcr/eslint-plugin-react/blob/73abadb697034b5ccb514d79fb4689836fe61f91/docs/rules/no-typos.md
        'react/no-typos': 'error',

        // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
        'react/jsx-curly-brace-presence': ['error', {props: 'never', children: 'never'}],

        // Prevent usage of button elements without an explicit type attribute
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/button-has-type.md
        'react/button-has-type': ['error', {
            button: true,
            submit: true,
            reset: false,
        }],

        // Ensures inline tags are not rendered without spaces between them
        'react/jsx-child-element-spacing': 'off',

        // Prevent this from being used in stateless functional components
        // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-this-in-sfc.md
        'react/no-this-in-sfc': 'error',

        // Validate JSX maximum depth
        // https://github.com/yannickcr/eslint-plugin-react/blob/abe8381c0d6748047224c430ce47f02e40160ed0/docs/rules/jsx-max-depth.md
        'react/jsx-max-depth': 'off',

        // Disallow multiple spaces between inline JSX props
        // https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-props-no-multi-spaces.md
        'react/jsx-props-no-multi-spaces': 'error',

        // Prevent usage of UNSAFE_ methods
        // https://github.com/yannickcr/eslint-plugin-react/blob/157cc932be2cfaa56b3f5b45df6f6d4322a2f660/docs/rules/no-unsafe.md
        'react/no-unsafe': 'off',

        // Enforce linebreaks in curly braces in JSX attributes and expressions.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
        'react/jsx-curly-newline': ['error', {
            multiline: 'consistent',
            singleline: 'consistent',
        }],

        // Enforce that props are read-only
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
        'react/prefer-read-only-props': 'off',

        // Prevent usage of `javascript:` URLs
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
        // TODO: enable, semver-major
        'react/jsx-no-script-url': ['off', [
            {
                name: 'Link',
                props: ['to'],
            },
        ]],

        // Disallow unnecessary fragments
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
        // TODO: enable, semver-major
        'react/jsx-no-useless-fragment': 'off',

        // Prevent adjacent inline elements not separated by whitespace
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
        // TODO: enable? semver-major
        'react/no-adjacent-inline-elements': 'off',

        // Enforce a specific function type for function components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
        // TODO: enable! semver-minor, but do it in a major to be safe
        // TODO: investigate if setting namedComponents to expression vs declaration is problematic
        'react/function-component-definition': ['off', {
            namedComponents: 'function-expression',
            unnamedComponents: 'function-expression',
        }],

        // Enforce a new line after jsx elements and expressions
        // https://github.com/yannickcr/eslint-plugin-react/blob/e2eaadae316f9506d163812a09424eb42698470a/docs/rules/jsx-newline.md
        'react/jsx-newline': 'off',

        // Prevent react contexts from taking non-stable values
        // https://github.com/yannickcr/eslint-plugin-react/blob/e2eaadae316f9506d163812a09424eb42698470a/docs/rules/jsx-no-constructed-context-values.md
        // TODO: enable, semver-minor
        'react/jsx-no-constructed-context-values': 'off',

        // Prevent creating unstable components inside components
        // https://github.com/yannickcr/eslint-plugin-react/blob/c2a790a3472eea0f6de984bdc3ee2a62197417fb/docs/rules/no-unstable-nested-components.md
        // TODO: enable, semver-major
        'react/no-unstable-nested-components': 'off',

        // END OF AIRBNB DEFAULTS
    },
}
