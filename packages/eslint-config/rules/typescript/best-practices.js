const {tsRule} = require('../../utils/ruleUtils')
const coreBasePractices = require('../best-practices').rules

module.exports = {
    rules: {
        // Disallow empty functions
        // The TS rule allows constructors with parameter properties
        ...tsRule(coreBasePractices, 'no-empty-function'),
    },
}
