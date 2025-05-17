import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'CV',
    pathname: '/cv',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Facebook',
    url: `https://facebook.com/${config.facebook || ''}`,
    icon: 'facebook',
  },
  {
    label: 'Instagram',
    url: `https://instagram.com/${config.instagram || ''}`,
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    url: `https://linkedin.com/in/${config.linkedin || ''}`,
    icon: 'linkedin',
  },

  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
