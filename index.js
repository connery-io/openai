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
        {
            key: 'OpenAiModel',
            title: 'OpenAI model',
            description: "Available models: gpt-4, gpt-4-0613, gpt-4-32k, gpt-4-32k-0613, gpt-3.5-turbo, gpt-3.5-turbo-0613, gpt-3.5-turbo-16k, gpt-3.5-turbo-16k-0613",
            type: 'string',
            validation: {
                required: true
            }
        }
    ],
    maintainers: [
        {
            name: 'Connery',
            email: 'support@connery.io',
        }
    ],
    connery: {
        runnerVersion: '1',
    }
};
