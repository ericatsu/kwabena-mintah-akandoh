export interface IMilestone {
  year: string;
  title: string;
  description: string;
}

export interface ICoreValue {
  title: string;
  description: string;
}

export interface IAchievement {
  title: string;
  description: string;
}

export interface IFAQ {
  question: string;
  answer: string;
}

export interface IAboutDoc {
  _id: string;
  milestones: IMilestone[];
  coreValues: ICoreValue[];
  achievements: IAchievement[];
  faqs: IFAQ[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}