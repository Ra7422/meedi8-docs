import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'getting-started/creating-account',
        'getting-started/dashboard-overview',
        'getting-started/first-session',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Solo Sessions',
          items: [
            'user-guide/solo-sessions/when-to-use',
            'user-guide/solo-sessions/flow',
            'user-guide/solo-sessions/report',
          ],
        },
        {
          type: 'category',
          label: 'Duo Mediation',
          items: [
            'user-guide/duo-mediation/inviting-partner',
            'user-guide/duo-mediation/flow',
            'user-guide/duo-mediation/report',
          ],
        },
        {
          type: 'category',
          label: 'Features',
          items: [
            'user-guide/features/telegram-import',
            'user-guide/features/file-attachments',
            'user-guide/features/voice-messages',
            'user-guide/features/break-feature',
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },
    {
      type: 'category',
      label: 'Billing & Plans',
      collapsible: true,
      collapsed: true,
      items: [
        'billing/plans',
        'billing/manage-subscription',
        'billing/payment-methods',
        'billing/cancellation',
      ],
    },
    {
      type: 'doc',
      id: 'privacy-and-safety',
      label: 'Privacy & Safety',
    },
    {
      type: 'doc',
      id: 'support',
      label: 'Contact Support',
    },
    {
      type: 'category',
      label: 'Legal',
      collapsible: true,
      collapsed: true,
      items: [
        'legal/privacy-policy',
        'legal/terms-of-service',
        'legal/cookies',
      ],
    },
  ],
};

export default sidebars;
