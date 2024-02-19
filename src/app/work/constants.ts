export interface WorkItemType {
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
    company: 'Portfolio Site',
    title: 'Owner, Developer',
    location: 'Orlando, FL',
    startDate: 'Nov 2017',
    endDate: 'Present',
    experience: [
      'This site is a React application, built on NextJS, deployed to Vercel',
      'Code is fully-tested and automated via Github Actions',
    ],
    skills: ['MaterialUI', 'Typescript', 'React', 'NextJS', 'Emotion', 'Jest'],
    tools: ['Vercel', 'Cloudinary', 'Codecov', 'Github Actions'],
  },
  {
    company: 'Imperfect Foods',
    title: 'Full-Stack Developer',
    location: 'Remote',
    startDate: 'Jan 2018',
    endDate: 'Dec 2022',
    experience: [],
    skills: [
      'Node',
      'TypeScript',
      'React',
      'Redux',
      'Sagas',
      'Jest',
      'Express',
      'SQL',
      'Microservices',
    ],
    tools: [
      'AWS',
      'Auth0',
      'Stripe',
      'CircleCI',
      'Cloudinary',
      'Codecov',
      'PostGRES',
      'Docker',
    ],
  },
  {
    company: 'Door to Door Organics',
    title: 'Lead Frontend Developer',
    location: 'Louisville, CO & Remote',
    startDate: 'Mar 2014',
    endDate: 'Nov 2017',
    experience: [],
    skills: [
      'Node',
      'JavaScript',
      'React',
      'Redux',
      'Sagas',
      'Express',
      'SQL',
      'Microservices',
      'Java',
    ],
    tools: ['AWS', 'Auth0', 'Stripe', 'CircleCI', 'Cloudinary', 'PostGRES'],
  },
];
