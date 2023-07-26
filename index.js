const SampleAction = require("./actions/SampleAction");

module.exports = {
    title: 'OpenAI',
    description: 'OpenAI connector for Connery',
    actions: [
        SampleAction,
    ],
    configurationParameters: [],
    maintainers: [
        {
            name: 'Connery',
            email: 'contact@connery.io',
        }
    ]
};
