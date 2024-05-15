import { ModelProviderCard } from '@/types/llm';

// ref https://platform.openai.com/docs/models
const OpenAI: ModelProviderCard = {
  chatModels: [
    {
      description: 'GPT 3.5 Turbo，适用于各种文本生成和理解任务',
      displayName: 'GPT-3.5 Turbo',
      enabled: true,
      id: 'gpt-3.5-turbo',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-4',
      enabled: true,
      id: 'gpt-4',
      tokens: 16_385,
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
      description: 'Currently points to gpt-3.5-turbo-16k-0613',
      displayName: 'GPT-3.5 Turbo 16K',
      id: 'gpt-3.5-turbo-16k',
      legacy: true,
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
      tokens: 16_385,
    },
    {
      description: 'Currently points to gpt-4-0125-preview',
      displayName: 'GPT-4 Turbo Preview',
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
      description: 'Currently points to gpt-4-1106-vision-preview',
      displayName: 'GPT-4 Turbo Vision Preview',
      id: 'gpt-4-vision-preview',
      tokens: 128_000,
      vision: true,
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
      description: 'Currently points to gpt-4-32k-0613',
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
      description: 'GPT-4 Turbo with Vision',
      displayName: 'GPT-4 Turbo',
      functionCall: true,
      id: 'gpt-4-turbo',
      tokens: 128_000,
      vision: true,
    },
    {
      displayName: 'GPT-4（网页版）',
      enabled: true,
      files: true,
      id: 'gpt-4-all',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'GPT-4o（青春版）',
      enabled: true,
      files: true,
      functionCall: false,
      id: 'gpt-4o',
      tokens: 32_768,
      vision: true,
    },
    {
      description: 'GPT-4 Turbo 视觉版 (240409)',
      displayName: 'GPT-4 Turbo Vision (240409)',
      functionCall: true,
      id: 'gpt-4-turbo-2024-04-09',
      tokens: 128_000,
      vision: true,
    },
    {
      displayName: '阶跃星辰（联网）',
      enabled: true,
      id: 'step-v1',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: '阶跃星辰（文件分析）',
      enabled: true,
      files: true,
      id: 'step-v1-vision',
      tokens: 16_000,
      vision: true,
    },
    {
      displayName: '月之暗面（联网）',
      enabled: true,
      id: 'moonshot-v1',
      tokens: 16_000,
      vision: true,
    },
    {
      displayName: '月之暗面（文件分析）',
      enabled: true,
      files: true,
      id: 'moonshot-v1-vision',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: '阿里通义（联网）',
      enabled: true,
      functionCall: false,
      id: 'qwen-v1',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: '阿里通义（文件分析）',
      enabled: true,
      files: true,
      functionCall: false,
      id: 'qwen-v1-vision',
      tokens: 16_000,
      vision: true,
    },
    {
      displayName: '微软必应3.5（联网）',
      enabled: true,
      id: 'bing-3.5',
      tokens: 8192,
    },
    {
      displayName: '微软必应4.0（联网）',
      enabled: true,
      id: 'bing-4-32k',
      tokens: 8192,
    },
    {
      displayName: '微软必应4.0（识图）',
      enabled: true,
      id: 'bing-4-vision',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: '字节跳动3.5（联网）',
      enabled: true,
      id: 'coze-3.5',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: '字节跳动4.0（联网）',
      enabled: true,
      id: 'coze-4',
      tokens: 8192,
    },
    {
      displayName: '字节跳动4.0（文本分析）',
      enabled: true,
      files: true,
      id: 'coze-4-vision',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: '智谱清言（联网）',
      enabled: true,
      id: 'glm-v1',
      tokens: 16_000,
      vision: true,
    },
    {
      displayName: '智谱清言（文件分析）',
      enabled: true,
      files: true,
      id: 'glm-v1-vision',
      tokens: 16_000,
      vision: true,
    },
    {
      displayName: '秘塔全网搜索（简洁）',
      id: 'concise',
      tokens: 8192,
    },
    {
      displayName: '秘塔全网搜索（深入）',
      enabled: true,
      id: 'detail',
      tokens: 8192,
    },
    {
      displayName: '秘塔全网搜索（研究）',
      id: 'research',
      tokens: 8192,
    },
    {
      displayName: '秘塔学术搜索（简洁）',
      id: 'concise-scholar',
      tokens: 8192,
    },
    {
      displayName: '秘塔学术搜索（深入）',
      enabled: true,
      id: 'detail-scholar',
      tokens: 8192,
    },
    {
      displayName: '秘塔学术搜索（研究）',
      id: 'research-scholar',
      tokens: 8192,
    },
    {
      displayName: '讯飞星火（联网）',
      enabled: true,
      id: 'SparkDesk-v1',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: '讯飞星火（文件分析）',
      enabled: true,
      files: true,
      id: 'SparkDesk-v1-vision',
      tokens: 16_000,
      vision: true,
    },
    {
      displayName: '海螺AI（联网）',
      enabled: true,
      id: 'abab-v1',
      tokens: 8192,
      vision: true,
    },
    {
      displayName: '海螺AI（文件分析）',
      enabled: true,
      files: true,
      id: 'abab-v1-vision',
      tokens: 16_000,
      vision: true,
    },
    {
      displayName: 'GPT-S（学术写手）',
      enabled: true,
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-kZ0eYXlJe',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'GPT-S（共识助手）',
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-bo0FiWLY7',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'GPT-S（LOGO设计）',
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-gFt1ghYJl',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'GPT-S（图像总结）',
      enabled: true,
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-pmuQfob8d',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'GPT-S（数据分析）',
      enabled: true,
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-jBdvgesNC',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'GPT-S（研究助手）',
      enabled: true,
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-UfFxTDMxq',
      tokens: 32_768,
      vision: true,
    },
    {
      displayName: 'GPT-S（代码专家）',
      enabled: true,
      files: true,
      functionCall: false,
      id: 'gpt-4-gizmo-g-2DQzU5UZl',
      tokens: 32_768,
      vision: true,
    },
  ],
  enabled: true,
  id: 'openai',
};

export default OpenAI;
