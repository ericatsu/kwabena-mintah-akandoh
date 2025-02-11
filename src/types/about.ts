import { LucideIcon } from "lucide-react";

interface IBaseItem {
  title: string;
  description: string;
}

export interface IMilestoneForm extends IBaseItem {
  date: Date;
  icon: string;
}

export interface ICoreValueForm extends IBaseItem {
  icon: string;
}

export interface IAchievementForm extends IBaseItem {
  stats: number;
}

export interface IFAQForm {
  question: string;
  answer: string;
}

// Display interfaces (for frontend)
export interface IMilestone extends IBaseItem {
  date: Date;
  year?: string;
  icon: LucideIcon | string;
}

export interface ICoreValue extends IBaseItem {
  icon: LucideIcon | string;
}

export interface IAchievement extends IBaseItem {
  stats: string | number;
}

export interface IFAQ extends IFAQForm {}

export function isMilestoneForm(item: any): item is IMilestoneForm {
  return typeof item.icon === "string";
}

export function isCoreValueForm(item: any): item is ICoreValueForm {
  return typeof item.icon === "string";
}

export function isAchievementForm(item: any): item is IAchievementForm {
  return typeof item.stats === "number";
}
