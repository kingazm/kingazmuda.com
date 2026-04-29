export type SocialLink = {
  platform: string;
  url: string;
};

export type Personal = {
  name: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  socials: SocialLink[];
};

export type Project = {
  name: string;
  description: string;
  link: string;
  stack: string[];
  image?: string;
};

export type ExperienceEntry = {
  position: string;
  company: string;
  start: string;
  end: string;
  description: string;
};