const js = require('@eslint/js');
const { defineConfigWithVueTs, vueTsConfigs } = require('@vue/eslint-config-typescript');
const skipFormatting = require('@vue/eslint-config-prettier/skip-formatting');

module.exports = defineConfigWithVueTs([
    js.configs.recommended,
    vueTsConfigs.recommended,
    skipFormatting,
    {
        languageOptions: {
            ecmaVersion: 'latest',
        },
    },
    {
        ignores: [
            'packages/docs/.vitepress/**',
            '*.js',
            'packages/**/__tests__/**',
            'packages/**/jiahaovue/**'
        ]
    },
    
]);