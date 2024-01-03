export default {
  head: () => (
    <>
      <meta name="referrer" content="no-referrer" />
    </>
  ),
  footer: { component: null },
  toc: {
    backToTop: true,
  },
  feedback: { content: null },
  editLink: { text: null },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  logo: <span>feel-nextra-docs</span>,
  project: {
    link: 'https://github.com/mnz8feel/feel-nextra-docs',
  },
  // ... other theme options
};
