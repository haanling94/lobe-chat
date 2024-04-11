import { ModelProviderCard } from '@/types/llm';

// refs to: https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo
const OpenAI: ModelProviderCard = {
  chatModels: [
    {
      description: 'GPT 3.5 Turbo，适用于各种文本生成和理解任务',
      displayName: 'GPT-3.5 Turbo',
      id: 'gpt-3.5-turbo',
      tokens: 16_385,
    },
    {
      displayName: 'Bing-3.5 Net',
      id: 'gpt-3.5-bing',
      tokens: 8192,
    },
    {
      displayName: 'Coze-3.5 Net',
      id: 'gpt-3.5-coze',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: 'GPT-4',
      id: 'gpt-4',
      tokens: 32_768,
    },
    {
      displayName: 'GPT-3.5 Turbo (0125)',
      functionCall: true,
      id: 'gpt-3.5-turbo-0125',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-3.5 Turbo (1106)',
      functionCall: true,
      id: 'gpt-3.5-turbo-1106',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-3.5 Turbo Instruct',
      id: 'gpt-3.5-turbo-instruct',
      tokens: 4096,
    },
    {
      displayName: 'GPT-3.5 Turbo 16K',
      id: 'gpt-3.5-turbo-16k',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-3.5 Turbo (0613)',
      id: 'gpt-3.5-turbo-0613',
      legacy: true,
      tokens: 4096,
    },
    {
      displayName: 'GPT-3.5 Turbo 16K (0613)',
      id: 'gpt-3.5-turbo-16k-0613',
      legacy: true,
      tokens: 4096,
    },
    {
      displayName: 'GPT-4 Turbo Preview',
      enabled: true,
      functionCall: true,
      id: 'gpt-4-turbo-preview',
      tokens: 128_000,
    },
    {
      displayName: 'GPT-4 Turbo Preview (0125)',
      functionCall: true,
      id: 'gpt-4-0125-preview',
      tokens: 128_000,
    },
    {
      displayName: 'GPT-4 Turbo Preview (1106)',
      id: 'gpt-4-1106-preview',
      tokens: 128_000,
    },
    {
      displayName: 'GPT-4 Turbo Vision Preview (1106)',
      id: 'gpt-4-1106-vision-preview',
      tokens: 128_000,
      vision: true,
    },
    {
      displayName: 'GPT-4 Turbo Preview (1106)',
      functionCall: true,
      id: 'gpt-4-1106-preview',
      tokens: 128_000,
    },
    {
      displayName: 'GPT-4 (0613)',
      functionCall: true,
      id: 'gpt-4-0613',
      tokens: 8192,
    },
    {
      displayName: 'GPT-4 32K',
      functionCall: true,
      id: 'gpt-4-32k',
      tokens: 32_768,
    },
    {
      displayName: 'GPT-4 32K (0613)',
      functionCall: true,
      id: 'gpt-4-32k-0613',
      tokens: 32_768,
    },
    {
      displayName: 'GPT-4 ALL',
      files: true,
      id: 'gpt-4-all',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'Coze-4 Net',
      id: 'gpt-4-coze',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: 'Bing-4 32K',
      id: 'gpt-4-32k-bing',
      tokens: 8192,
    },
    {
      displayName: 'Bing-4 Vision',
      id: 'gpt-4-vision-bing',
      tokens: 8192,
      vision: true,
    },
    {
      description: 'GPT-4 视觉预览版，支持视觉任务',
      displayName: 'GPT-4 Vision Preview',
      enabled: true,
      id: 'gpt-4-vision-preview',
      tokens: 128_000,
      vision: true,
    },
    {
      displayName: 'Step-V1',
      id: 'llava-step-v1',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'Step-V1 Vision',
      files: true,
      id: 'llava-step-v1-vision',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'Moonshot-V1',
      id: 'moonshot-v1',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'Moonshot-V1 Vision',
      files: true,
      id: 'moonshot-v1-vision',
      tokens: 128_000,
      vision: true,
    },
  ],
  enabled: true,
  id: 'openai',
};

export default OpenAI;
