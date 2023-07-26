const CreateChatCompletion = require("./actions/CreateChatCompletion.js");

module.exports = {
    title: 'OpenAI',
    description: 'OpenAI connector for Connery',
    actions: [
        CreateChatCompletion,
    ],
    configurationParameters: [
        {
            key: 'OpenAiApiKey',
            title: 'OpenAI API key',
            type: 'string',
            validation: {
                required: true
            }
        },
    ],
    maintainers: [
        {
            name: 'Connery',
            email: 'contact@connery.io',
        }
    ]
};
