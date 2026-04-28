// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'mglandrade',
  tagline: 'This notes and writeups comprises my learning observations on various tech subjects, primarily in cybersecurity. It may contain personal notes or a summary of key concepts that are available in other documentation.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ohydra.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/', // ou o nome do repo no github ex /whriteups/

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ohydra', // Usually your GitHub org/user name.
  projectName: 'ohydra.github.io', // Usually your repo name.
  deploymentBranch:"gh-pages", // Deployment branch for GitHub Pages

  onBrokenLinks: 'throw',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,       //////arrebenta
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/ohydra/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'mglandrade',
        logo: {
          //alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          /*{
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },*/
          //{to: '/blog', label: 'Blog', position: 'left'}, //////////////////// marcador no header //////////////////
          {
            href: 'https://github.com/mglandrade/coisassss',
            label: 'GitHub repo',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learning',
            items: [
              {
                label: 'Tech notes',
                to: '/docs/category/intro',
              },
            ],
          },
          {
            title: 'Profiles',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/mglandrade',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ohydra/',
              },
            ],
          },
          {
            title: 'License',
            items: [
              {
                html: `<a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank"><img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc.png" alt="CC BY-SA License" height="40px" width="114px" ></a>`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} mglandrade. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },





    }),


      plugins: [
        // ... Your other plugins.
        [
          // @ts-ignore
          require.resolve("@easyops-cn/docusaurus-search-local"),
          /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
          // @ts-ignore
          ({
            // ... Your options.
            // `hashed` is recommended as long-term-cache of index file is possible.
            hashed: true,

            // For Docs using Chinese, it is recomended to set:
            // language: ["en", "zh"],

            // Customize the keyboard shortcut to focus search bar (default is "mod+k"):
            // searchBarShortcutKeymap: "s", // Use 'S' key
            // searchBarShortcutKeymap: "ctrl+shift+f", // Use Ctrl+Shift+F

            // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
            // forceIgnoreNoIndex: true,

            // Enable Ask AI integration:
            // askAi: {
            //   project: "your-project-name",
            //   apiUrl: "https://your-api-url.com/api/stream",
            //   hotkey: "cmd+I", // Optional: keyboard shortcut to trigger Ask AI
            // },
          }),
        ],
      ],








};

export default config;
