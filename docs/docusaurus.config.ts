import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Butter',
  tagline: 'A comprehensive AWS CDK construct library',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-username.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/butter/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-username', // Usually your GitHub org/user name.
  projectName: 'butter', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../lib/index.ts'],
        tsconfig: '../tsconfig.typedoc.json',
        out: 'docs/api',
        sidebar: {
          categoryLabel: 'API Reference',
          position: 0,
        },
        plugin: ['typedoc-plugin-markdown'],
        readme: 'none',
        hidePageTitle: false,
        hideBreadcrumbs: false,
        excludePrivate: false,
        excludeProtected: false,
        excludeExternals: true,
        cleanOutputDir: true,
        gitRevision: 'main',
        gitRemote: 'origin',
        includeVersion: true,
        sort: ['source-order'],
        kindSortOrder: ['Class', 'Interface', 'Function', 'Variable'],
        categoryOrder: ['Classes', 'Interfaces', 'Functions', '*'],
        groupOrder: ['Classes', 'Interfaces', 'Functions', '*'],
        blockTags: [
          '@fileoverview',
          '@version',
          '@author',
          '@since',
          '@deprecated',
          '@example',
          '@param',
          '@returns',
          '@throws',
          '@see',
          '@todo',
          '@internal',
          '@public',
          '@private',
          '@protected',
          '@interface',
          '@class',
          '@extends',
          '@implements',
          '@defaultValue',
          '@constructor',
          '@method',
          '@property',
          '@static',
          '@override',
          '@virtual',
          '@abstract',
          '@readonly',
          '@deprecated',
          '@experimental',
          '@alpha',
          '@beta',
          '@packageDocumentation',
        ],
        modifierTags: [
          '@readonly',
          '@override',
          '@virtual',
          '@sealed',
          '@experimental',
          '@alpha',
          '@beta',
          '@internal',
          '@packageDocumentation',
        ],
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Butter',
      logo: {
        alt: 'Butter Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/api',
          label: 'API Reference',
          position: 'left',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/your-username/butter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'API Reference',
              to: '/docs/api',
            },
          ],
        },
        {
          title: 'Development',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-username/butter',
            },
            {
              label: 'Issues',
              href: 'https://github.com/your-username/butter/issues',
            },
            {
              label: 'npm',
              href: 'https://www.npmjs.com/package/butter',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
