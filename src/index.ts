import { PluginDefinition } from '@connery-io/sdk';
import sendPrompt from './actions/sendPrompt';

const plugin: PluginDefinition = {
  title: 'OpenAI',
  description: 'OpenAI plugin for Connery.',
  actions: [sendPrompt],
  configurationParameters: [
    {
      key: 'openAiApiKey',
      title: 'OpenAI API key',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'openAiModel',
      title: 'OpenAI model',
      description:
        'Available models: gpt-4, gpt-4-0613, gpt-4-32k, gpt-4-32k-0613, gpt-3.5-turbo, gpt-3.5-turbo-0613, gpt-3.5-turbo-16k, gpt-3.5-turbo-16k-0613',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
  maintainers: [
    {
      name: 'Connery',
      email: 'support@connery.io',
    },
  ],
  connery: {
    runnerVersion: '0',
  },
};
export default plugin;
