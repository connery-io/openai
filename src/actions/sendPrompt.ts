import { ActionDefinition, ActionContext, OutputParametersObject } from '@connery-io/sdk';
import OpenAI from 'openai';

const action: ActionDefinition = {
  key: 'sendPrompt',
  title: 'Send prompt',
  description: 'Send prompt to OpenAI and return generated response.',
  type: 'create',
  inputParameters: [
    {
      key: 'prompt',
      title: 'Prompt',
      description: 'The user prompt to generate a response.',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
  operation: {
    handler: handler,
  },
  outputParameters: [
    {
      key: 'response',
      title: 'Response',
      description: 'The generated response from OpenAI.',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
};
export default action;

export async function handler({
  inputParameters,
  configurationParameters,
}: ActionContext): Promise<OutputParametersObject> {
  const ai = new OpenAI({
    apiKey: configurationParameters.openAiApiKey,
  });

  const completion = await ai.chat.completions.create({
    model: configurationParameters.openAiModel,
    messages: [{ role: 'user', content: inputParameters.prompt }],
  });

  return {
    response: completion.choices[0].message.content,
  };
}
