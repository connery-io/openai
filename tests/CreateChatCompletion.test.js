const { Configuration, OpenAIApi } = require('openai');
const CreateChatCompletion = require('../actions/CreateChatCompletion');

// NOTE: You don't need to test whether the input parameters are provided and valid. 
// Connery Runner will handle that based on your action definition.
// So you only need to test the logic of your action here.

jest.mock('openai', () => {
    const mockOpenAiApi = {
        createChatCompletion: jest.fn().mockResolvedValue({
            data: {
                choices: [{
                    message: {
                        content: 'Mocked content'
                    }
                }]
            }
        })
    };

    return {
        Configuration: jest.fn(),
        OpenAIApi: jest.fn(() => mockOpenAiApi)
    };
});

const inputParameters = { UserPrompt: 'Hello' };
const configurationParameters = { OpenAiApiKey: 'test-key', OpenAiModel: 'gpt-4' };

it('should initialize OpenAI with the provided API key', async () => {
    await CreateChatCompletion.operation.handler({ inputParameters, configurationParameters });

    expect(Configuration).toHaveBeenCalledWith({
        apiKey: configurationParameters.OpenAiApiKey
    });
});

it('should call createChatCompletion with the correct parameters', async () => {
    await CreateChatCompletion.operation.handler({ inputParameters, configurationParameters });

    expect(OpenAIApi().createChatCompletion).toHaveBeenCalledWith({
        model: configurationParameters.OpenAiModel,
        messages: [{ role: 'user', content: inputParameters.UserPrompt }]
    });
});

it('should return the completion result', async () => {
    const result = await CreateChatCompletion.operation.handler({ inputParameters, configurationParameters });

    expect(result).toEqual({
        PromptCompletion: 'Mocked content'
    });
});

