const {
    mergeSimpleRule,
    extendList,
} = require('../utils/ruleUtils')
const baseRules = require('./style').rules

module.exports = {
    plugins: [
        'react',
        'react-hooks',
    ],
    extends: [
        'plugin:react/recommended',
        './react-inherited',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        // EXTENSIONS OF BASIC RULES
        'no-underscore-dangle': mergeSimpleRule(baseRules['no-underscore-dangle'], {
            allow: prev => extendList(prev,
                '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
            ),
        }),

        'class-methods-use-this': mergeSimpleRule(baseRules['class-methods-use-this'], {
            exceptMethods: prev => extendList(prev,
                'render',
                'getInitialState',
                'getDefaultProps',
                'getChildContext',
                'componentWillMount',
                'UNSAFE_componentWillMount',
                'componentDidMount',
                'componentWillReceiveProps',
                'UNSAFE_componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentWillUpdate',
                'UNSAFE_componentWillUpdate',
                'componentDidUpdate',
                'componentWillUnmount',
                'componentDidCatch',
                'getSnapshotBeforeUpdate',
            ),
        }),
        // END OF EXTENSIONS OF BASIC RULES

        // Enforce consistent usage of destructuring assignment of props, state, and context
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',

        // Forbid certain props on Components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
        'react/forbid-component-props': ['off', {forbid: []}],

        // Forbid certain propTypes (any, array, object)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        'react/forbid-prop-types': ['warn', {forbid: ['any']}],

        // Prevent using this.state within a this.setState
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
        'react/no-access-state-in-setstate': 'error',

        // Prevent usage of Array index in keys
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
        'react/no-array-index-key': 'error',

        // Prevent usage of setState in componentDidMount
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        'react/no-did-mount-set-state': 'error',

        // Prevent usage of setState in componentDidUpdate
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
        'react/no-did-update-set-state': 'error',

        // Prevent multiple component definition per file
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        'react/no-multi-comp': ['warn', {ignoreStateless: true}],

        // Prevent invalid characters from appearing in markup
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
        'react/no-unescaped-entities': 'warn',

        // Prevent unused propType definitions
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
        'react/no-unused-prop-types': ['error', {
            customValidators: [],
            skipShapeProps: true,
        }],

        // Prevent unused state values
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
        'react/no-unused-state': 'error',

        // Prevent usage of setState in componentWillUpdate
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
        'react/no-will-update-set-state': 'error',

        // Require stateless functions when not using lifecycle methods, setState or ref
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        'react/prefer-stateless-function': ['error', {ignorePureComponents: true}],

        // Prevent missing props validation in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': ['warn', {
            ignore: [],
            customValidators: [],
            skipUndeclared: false,
        }],

        // Enforce a defaultProps definition for every prop that is not a required prop
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        'react/require-default-props': ['off', {
            forbidDefaultForRequired: true,
        }],

        // Enforce component methods order
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        'react/sort-comp': ['warn', {
            order: [
                'static-variables',
                'static-methods',
                'instance-variables',
                'lifecycle',
                '/^handle.+$/',
                '/^on.+$/',
                'getters',
                'setters',
                '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                'instance-methods',
                'everything-else',
                'rendering',
            ],
            groups: {
                lifecycle: [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics',
                    'defaultProps',
                    'constructor',
                    'getDefaultProps',
                    'getInitialState',
                    'state',
                    'getChildContext',
                    'getDerivedStateFromProps',
                    'componentWillMount',
                    'UNSAFE_componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'UNSAFE_componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'UNSAFE_componentWillUpdate',
                    'getSnapshotBeforeUpdate',
                    'componentDidUpdate',
                    'componentDidCatch',
                    'componentWillUnmount',
                ],
                rendering: [
                    '/^render.+$/',
                    'render',
                ],
            },
        }],

        // Enforce propTypes declarations alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
        'react/sort-prop-types': ['warn', {
            ignoreCase: true,
            callbacksLast: false,
            requiredFirst: false,
            sortShapeProp: true,
        }],

        // Enforce state initialization style
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
        'react/state-in-constructor': 'off',

        // Enforces where React component static properties should be positioned
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
        'react/static-property-placement': ['warn', 'property assignment'],

        // Enforces rules of React Hooks
        // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },

    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
        propWrapperFunctions: [
            'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
            'exact', // https://www.npmjs.com/package/prop-types-exact
            'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
        ],
    },
}
