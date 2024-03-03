const regularizeRule = rule => {
    if (Array.isArray(rule)) {
        return rule
    }

    return [rule]
}

const mergeOptions = (...options) => options.reduce((prev, next) => {
    if (!next) {
        return prev
    }

    const changedOptions = Object.keys(next)

    const newOptions = Object.fromEntries(
        changedOptions.map(key => [key,
            next[key](prev[key]),
        ]),
    )

    return {...prev, ...newOptions}
}, {})

const mergeSimpleRule = (rule, options) => {
    const parent = regularizeRule(rule)

    const enabled = parent[0] || 'off'

    return [enabled, mergeOptions(
        parent[1],
        options,
    )]
}

const extendList = (list, ...extensions) => (list || []).concat(extensions)

const tsRule = (core, rule) => ({
    [rule]: 'off',
    [`@typescript-eslint/${rule}`]: core[rule],
})

module.exports = {
    extendList,
    mergeOptions,
    mergeSimpleRule,
    regularizeRule,
    tsRule,
}
