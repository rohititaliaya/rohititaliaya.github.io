// gitprofile.config.js

const config = {
  github: {
    username: 'rohititaliaya', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'rohit-italiya',
    twitter: 'rohititaliaya',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'rohititaliaya',
    dev: '',
    stackoverflow: '16347028/rohit-italiya', // example: '1/jeff-atwood'
    skype: 'live:.cid.33466522cd01b6f',
    telegram: '',
    website: '',
    phone: '+918200713200',
    email: 'rohititaliaya@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'PHPUnit',
    'CSS',
    'Tailwind',
    'Bootstrap'
  ],
  experiences: [
    {
      company: 'Skyline Infosys',
      position: 'Laravel Developer',
      from: 'April 2022',
      to: 'June 2022',
      companyLink: 'https://skylineinfosys.com/',
    },
    {
      company: 'Abril Solutions',
      position: 'Laravel Developer',
      from: 'January 2020',
      to: 'April 2022',
      companyLink: 'https://abrilsolutions.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'College of AIT, Anand',
      degree: 'B Tech (AIT)',
      from: '2015',
      to: '2019',
    }
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Rarever',
      description:
        'Some tasks involved in working on Nivoda API integration using GraphQL may include: Understanding the Nivoda API documentation and schema. Creating queries and mutations using GraphQL to retrieve data from the Nivoda API. Handling responses from the Nivoda API in your application. Debugging issues with API requests and responses. Integrating the Nivoda API data into your application`s business logic and user interface. Overall, working on Nivoda API integration using GraphQL requires a strong understanding of bothGraphQL and the Nivoda API, as well as experience with API integration and data handling in a programming language such as JavaScript or TypeScript.',
      imageUrl: 'https://rarever-staging.s3.eu-west-2.amazonaws.com/uploads/all/eHGmSHFgmlkqkivnrywBysbW3b3WTRMGmJ8DjT2N.avif ',
      link: 'https://rarever.com',
    },
    {
      title: 'Genro.io',
      description:'Genro is AI image generator saas tool. Transform Words into Images with Our Genro Text-to-Image Generator! Effortlessly create stunning visuals from your text-based ideas using our AI-powered tool. Generate illustrations, artwork, and more with a simple click. Transform Words into Images with Our Text-to-Image Generator! Effortlessly create stunning visuals from your text-based ideas using our AI-powered tool. Generate illustrations, artwork, and more with a simple click.',
      imageUrl: 'https://genro.io/assets/img/favicon.ico',
      link: 'https://genro.io',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'rohititaliaya', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,
};

export default config;
