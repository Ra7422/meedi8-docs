import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Meedi8 Help Center',
  tagline: 'AI-Powered Mediation Platform',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://docs.meedi8.com',
  baseUrl: '/',

  organizationName: 'meedi8',
  projectName: 'meedi8-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Docs at root
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/meedi8-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Meedi8 Logo',
        src: 'img/logo.png',
        style: { height: '40px' },
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          href: 'https://app.meedi8.com',
          label: 'Open App',
          position: 'right',
          className: 'navbar__link--primary',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/creating-account',
            },
            {
              label: 'User Guide',
              to: '/user-guide/solo-sessions/when-to-use',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Pricing',
              href: 'https://app.meedi8.com/pricing',
            },
            {
              label: 'About',
              href: 'https://app.meedi8.com/about',
            },
            {
              label: 'Contact Support',
              to: '/support',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/legal/privacy-policy',
            },
            {
              label: 'Terms of Service',
              to: '/legal/terms-of-service',
            },
            {
              label: 'Cookie Policy',
              to: '/legal/cookies',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Meedi8. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
