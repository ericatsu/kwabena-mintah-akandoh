export interface IDuration {
  value: number;
  unit: "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "years";
}

export interface IActivity {
  _id?: string;
  title: string;
  count: number;
  icon?: string; // e.g., "FileText" or "Users"
  items: string[]; // list of sub-items (e.g., "Healthcare Reform Act," etc.)
  trend: string; // e.g., "+20% from last year"
}

export interface IRecentActivity {
  _id?: string;
  date: Date; // e.g., 2024-02-01
  title: string;
  type: string; // e.g. 'Committee', 'Plenary'
  duration: IDuration;
}

export interface IBillDocument {
  title: string; // e.g. "Draft Bill"
  url: string; // link or file path
}
export interface IBillTimeline {
  date: Date; // e.g. 2024-01-15
  event: string; // e.g. "First Reading"
}

export interface IBill {
  _id?: string;
  title: string;
  status: string; // "In Progress", "Passed", etc.
  stage: string; // "Second Reading", "Enacted", etc.
  introduced: Date;
  summary: string;
  supporters: number;
  documents: IBillDocument[];
  timeline: IBillTimeline[];
}

export interface ISpeech {
  _id?: string;
  date: Date;
  title: string;
  topic: string;
  duration: IDuration;
  engagement: number;
  videoUrl?: string;
  fullSpeech: string;
  impact?: string;
}

export interface ICommitteeRecentWork {
  date: Date;
  title: string;
}

export interface ICommittee {
  _id?: string;
  name: string;
  role: string; // e.g. 'Chairman'
  meetings: number;
  initiatives: number;
  impact: string;
  recentWork: ICommitteeRecentWork[];
}
