// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import("@docusaurus/types").DocusaurusConfig} */
const config = {
  // Always append trailing slash so that relative link is predictable.
  // https://github.com/facebook/docusaurus/issues/5250
  trailingSlash: true,
  title: "Authgear SDK JS",
  tagline: "Documentation of Authgear SDK JS",
  url: "https://authgear.github.io",
  baseUrl: "/authgear-sdk-js/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "authgear",
  projectName: "authgear-sdk-js",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/authgear/authgear-sdk-js/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Authgear SDK JS",
      logo: {
        alt: "Authgear SDK JS",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "index",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/authgear/authgear-sdk-js",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "API References",
              to: "docs/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Oursky, Ltd.`,
    },
  },
};

module.exports = config;
