import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'JerryBB Support',
  tagline: 'Understand the data. Prepare with confidence.',
  favicon: 'img/favicon.ico',
  future: {v4: true},
  url: process.env.DOCS_URL ?? 'http://localhost:3000',
  baseUrl: '/',
  organizationName: 'veidt-bubastis',
  projectName: 'jerrybb-docs',
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/veidt-bubastis/jerrybb-docs/tree/main/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'JerryBB Support',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://jerrybb.bubastis.xyz',
          label: 'Open JerryBB',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [{label: 'Getting Started', to: '/docs/intro'}],
        },
      ],
      copyright: `JerryBB Support · ${new Date().getFullYear()}`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
