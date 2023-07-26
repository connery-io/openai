module.exports = {
  key: "CreateChatCompletion",
  title: "Create chat completion",
  description: "Creates a model response for the given chat conversation.",
  type: "create",
  inputParameters: [
    {
      key: "Prompt",
      title: "User prompt",
      description: "User prompt to send to OpenAI",
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
  outputParameters: [], // TODO: Add output parameters here.
};

async function handler({ inputParameters, configurationParameters }) {
  // TODO: Implement the action logic here.

  return {};
}
