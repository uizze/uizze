import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

addons.setConfig({
  selectedPanel: 'storybook-addon-uizze/panel',
  theme: create({
    base: 'light',
    brandTitle: 'UIZZE Finish Gate',
    brandUrl: 'https://uizze.com',
    brandTarget: '_blank',
    fontBase: 'Inter, ui-sans-serif, system-ui, sans-serif',
    fontCode: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    colorPrimary: '#18181b',
    colorSecondary: '#3f3f46',
    appBg: '#f4f4f5',
    appContentBg: '#ffffff',
    appBorderColor: '#e4e4e7',
    appBorderRadius: 10,
    textColor: '#18181b',
    textInverseColor: '#ffffff',
    barTextColor: '#52525b',
    barSelectedColor: '#18181b',
    barHoverColor: '#18181b',
    inputBg: '#ffffff',
    inputBorder: '#d4d4d8',
    inputTextColor: '#18181b',
    inputBorderRadius: 8,
  }),
});
