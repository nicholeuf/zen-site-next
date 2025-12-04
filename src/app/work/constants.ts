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
    id: "portfolio-site",
    company: "thecodingyogi.me",
    title: "Developer",
    location: "Remote",
    startDate: "Nov 2017",
    endDate: "Present",
    experience: [
      "Current site, launched in 2024, is built with React, NextJS, and MaterialUI, and deployed to Vercel.",
      "Code is fully-tested and automated via Github Actions, Meticulous.ai QA Automation, and Qodo.ai Code Reviews.",
    ],
    skills: [
      "MaterialUI",
      "Typescript",
      "React",
      "NextJS",
      "Emotion",
      "Vitest",
    ],
    tools: [
      "Vercel",
      "Cloudinary",
      "Codecov",
      "Github Actions",
      "Sentry.io",
      "Meticulous.ai",
      "Small.chat",
      "Qodo.ai",
      "Storybook",
    ],
  },
  {
    id: "imperfect-foods",
    company: "Imperfect Foods",
    title: "Full-Stack Developer",
    location: "Remote",
    startDate: "Jan 2018",
    endDate: "Dec 2022",
    experience: [
      "Founding member of a collaborative, cross-functional team where we facilitated a unique shopping experience, intended to solve food waste.",
      "Contributed to the transition of our user base from the legacy site to the new platform after adapting the Door to Door Organics code to Imperfect's business model.",
      "Involved in architecture decisions and technology improvements.",
      "Involved in early exploration of new features with our design and project management team members.",
      "Responsible for the engineering side of our Stripe and Auth0 integrations, as well as collecting our site analytics using Segment and collaborating with merchandising and marketing efforts that relied on this data.",
      "Mentored junior and mid-level developers as we expanded our team.",
    ],
    skills: [
      "Node",
      "TypeScript",
      "React",
      "React Router",
      "Redux",
      "Sagas",
      "Webpack",
      "Jest",
      "Express",
      "SQL",
      "Microservices",
      "Technical Writing",
      "A/B Testing",
    ],
    tools: [
      "Auth0",
      "Stripe",
      "Split.io",
      "Algolia",
      "Segment.io",
      "Prismic",
      "Snowflake",
      "CircleCI",
      "Cloudinary",
      "Storybook",
      "DataDog",
      "JIRA",
      "Codecov",
      "PostGRES",
      "AWS",
      "Docker",
    ],
  },
  {
    id: "dtdo",
    company: "Door to Door Organics",
    title: "Lead Front-End Developer",
    location: "Louisville, CO & Remote",
    startDate: "Mar 2014",
    endDate: "Nov 2017",
    experience: [
      `During my three and a half years with the company, I worked my way up from a Sr. Java Developer to the Lead
      of the Front-End team.  In 2016 we merged with Relay Foods, and I transitioned to a Full-Stack Developer on a remote-first team,
      where I continued to work in a lead role on our Front-End stack.`,
      `I started at the company with a background in Enterprise Java, but fell in love with JavaScript and React at this job.  In addition,
      I worked on several of our Node Micro-Services, Internal Tools, and contributed to the transition of our user base to the new platform.`,
      `I introduced sagas for achieving complex user interactions and reselect for performant access to our
      redux architecture.  We used JWT for authentication and our stack was hosted on Amazon Web Services (AWS) ElasticBeanstalk (EB) and CircleCI was used for build automation and deployment.`,
      `Our team used slack and screenhero for paired programming and collaboration.  We were a fast-paced team
      with a focus on iterative development.`,
    ],
    skills: [
      "Node",
      "JavaScript",
      "React",
      "React Native",
      "Redux",
      "Sagas",
      "Express",
      "SQL",
      "Microservices",
    ],
    tools: [
      "AWS",
      "Auth0",
      "Stripe",
      "Segment.io",
      "Algolia",
      "CircleCI",
      "Cloudinary",
      "PostGRES",
    ],
  },
];
