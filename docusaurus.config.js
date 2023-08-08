// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const math = require("remark-math");
const katex = require("rehype-katex");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My LeetCode Note",
  tagline: "My thinkings about the programming.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://leetcode.terminels.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "但为君故", // Usually your GitHub org/user name.
  projectName: "MyLeetCode", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/prinorange/my-leetcode",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  // themes: ['@docusaurus/theme-search-algolia'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "MyLeetCode",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "All Notes",
          },
          {
            type: "docSidebar",
            sidebarId: "problemsSidebar",
            position: "left",
            label: "Problems",
          },
          {
            href: "https://github.com/prinorange/my-leetcode",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "See Also",
            items: [
              {
                label: "Blog",
                to: "https://terminels.com",
              },
              {
                label: "LeetCode",
                href: "https://leetcode.cn/u/terminels/",
              },
              {
                label: "GitHub",
                href: "https://github.com/terminels",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 但为君故`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia:{
          // The application ID provided by Algolia
          appId: 'SJA54KPJ03',
          // Public API key: it is safe to commit it
          apiKey: 'c39dc474447bfc0b13cc07fd0582af26',
          indexName: 'my-leetcode-note',
          // Optional: see doc section below
          contextualSearch: true,
          // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
          externalUrlRegex: 'external\\.com|domain\\.com',
          // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
          replaceSearchResultPathname: {
            from: '/docs/', // or as RegExp: /\/docs\//
            to: '/',
          },
          // Optional: Algolia search parameters
          searchParameters: {},
          // Optional: path for search page that enabled by default (`false` to disable it)
          searchPagePath: 'search',
          //... other Algolia params
        },
    }),
};

module.exports = config;
