export interface WorkItemType {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  experience: string[];
  skills: string[];
  tools: string[];
}

export const items: WorkItemType[] = [
  {
    id: 'portfolio-site',
    company: 'Portfolio Site',
    title: 'Owner, Developer',
    location: 'Orlando, FL',
    startDate: 'Nov 2017',
    endDate: 'Present',
    experience: [
      'Current site is a React application, built on NextJS, and deployed to Vercel. Code is fully-tested and automated via Github Actions.',
      'Original site was built with React and Bulma, bundled with Webpack, and deployed to AWS via CircleCI.',
    ],
    skills: ['MaterialUI', 'Typescript', 'React', 'NextJS', 'Emotion', 'Jest'],
    tools: ['Vercel', 'Cloudinary', 'Codecov', 'Github Actions'],
  },
  {
    id: 'imperfect-foods',
    company: 'Imperfect Foods',
    title: 'Full-Stack Developer',
    location: 'Remote',
    startDate: 'Jan 2018',
    endDate: 'Dec 2022',
    experience: [
      'Founding member of a highly collaborative, cross-functional team where we facilitated a unique shopping experience, intended to solve food waste.',
      "Participated in the transition of our user base from the legacy site to the new platform after adapting the Door to Door Organics code to Imperfect's business model.",
      'Highly involved in architecture decisions and many technology improvements, including transition to Typescript.',
      'Regularly involved in early exploration of new features with our design and project management team members.',
      'Responsible for the engineering side of our Stripe and Auth0 integrations, as well as collecting our site analytics using Segment and collaborating with merchandising and marketing efforts that relied on this data.',
      'Mentored junior and mid-level developers as we expanded our team.',
    ],
    skills: [
      'Node',
      'TypeScript',
      'React',
      'Redux',
      'Sagas',
      'Webpack',
      'Jest',
      'Express',
      'SQL',
      'Microservices',
      'Technical Writing',
    ],
    tools: [
      'Auth0',
      'Stripe',
      'Algolia',
      'Segment',
      'Prismic',
      'CircleCI',
      'Cloudinary',
      'Storybook',
      'DataDog',
      'JIRA',
      'Codecov',
      'PostGRES',
      'AWS',
      'Docker',
    ],
  },
  {
    id: 'dtdo',
    company: 'Door to Door Organics',
    title: 'Lead Frontend Developer',
    location: 'Louisville, CO & Remote',
    startDate: 'Mar 2014',
    endDate: 'Nov 2017',
    experience: [
      'Led the architecture and deployment of the website.',
      'Contributed to the transition of our user base from our legacy monolithic site to the new micro-services based platform.',
      'Contributed to the development and deployment of our React Native iOS App.',
      'Promoted to Lead on the Front-End team prior to the merger with Relay Foods where I enabled the adoption of React components from within a legacy Java website.',
    ],
    skills: [
      'Node',
      'JavaScript',
      'React',
      'React Native',
      'Redux',
      'Sagas',
      'Express',
      'SQL',
      'Microservices',
    ],
    tools: [
      'AWS',
      'Auth0',
      'Stripe',
      'Algolia',
      'CircleCI',
      'Cloudinary',
      'PostGRES',
    ],
  },
];
