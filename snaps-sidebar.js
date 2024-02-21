/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebar = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // snapsSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  snapsSidebar: [
    "index",
    {
      type: "category",
      label: "Get started",
      link: { type: "generated-index", slug: "/get-started" },
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "get-started" }],
    },
    {
      type: "category",
      label: "Learn",
      link: { type: "generated-index", slug: "/learn" },
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "learn" }],
    },
    {
      type: "category",
      label: "Features",
      link: { type: "generated-index", slug: "/features" },
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "features" }],
    },
    {
      type: "category",
      label: "How to",
      link: { type: "generated-index", slug: "/how-to" },
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "how-to" }],
    },
    {
      type: "category",
      label: "Reference",
      link: { type: "generated-index", slug: "/reference" },
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "reference/snaps-api",
        },
        {
          type: "doc",
          id: "reference/entry-points",
        },
        {
          type: "doc",
          id: "reference/permissions",
        },
        {
          type: "doc",
          id: "reference/known-errors",
        },
        {
          type: "category",
          label: "Snaps command line",
          link: { type: "generated-index", slug: "reference/cli" },
          items: [
            {
              type: "doc",
              id: "reference/cli/options",
            },
            {
              type: "doc",
              id: "reference/cli/subcommands",
            },
          ],
        },
        {
          type: "doc",
          id: "reference/jest",
        },
        {
          type: "category",
          label: "Keyring API",
          link: {
            type: "doc",
            id: "reference/keyring-api/index",
          },
          items: require("./snaps/reference/keyring-api/typedoc-sidebar.cjs"),
        },
        {
          type: "doc",
          id: "reference/resources",
        },
      ],
    },
  ],
};

module.exports = sidebar;
