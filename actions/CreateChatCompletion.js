const { Configuration, OpenAIApi } = require("openai");

module.exports = {
  key: "CreatePromptCompletion",
  title: "Create prompt completion",
  description: "Creates an OpenAI model response for the given prompt.",
  type: "create",
  inputParameters: [
    {
      key: "UserPrompt",
      title: "User prompt",
      description: "The user prompt to generate a response.",
      type: "string",
      validation: {
        required: true,
      },
    }
  ],
  operation: {
    type: "js",
    handler,
  },
  outputParameters: [
    {
      key: "PromptCompletion",
      title: "Prompt completion",
      description: "The generated prompt completion.",
      type: "string",
      validation: {
        required: true,
      }
    },
  ],
};

async function handler({ inputParameters, configurationParameters }) {
  const configuration = new Configuration({
    apiKey: configurationParameters.OpenAiApiKey,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: inputParameters.UserPrompt }],
  });

  return {
    PromptCompletion: completion.data.choices[0].message.content,
  };
}
