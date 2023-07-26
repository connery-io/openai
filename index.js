const CreateChatCompletion = require("./actions/CreateChatCompletion.js");
const SampleAction = require("./actions/SampleAction");

module.exports = {
    title: 'OpenAI',
    description: 'OpenAI connector for Connery',
    actions: [
		CreateChatCompletion,
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
