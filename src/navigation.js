import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/trankimhieu', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Connect',
      links: [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/trankimhieu' },
        { text: 'GitHub', href: 'https://github.com/tkhieu' },
        { text: 'X / Twitter', href: 'https://x.com/hieutk_' },
      ],
    },
    {
      title: 'Content',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Portfolio', href: getPermalink('/#portfolio') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/hieutk_' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/trankimhieu' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/tkhieu' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © 2026 Hieu Tran. Built with <a class="text-blue-600 underline dark:text-muted" href="https://astro.build/">Astro</a>.
  `,
};
