export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface GalleryItem {
  id: string;
  url: string[];
  caption: string;
  category: string;
  link?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Newsletter {
  id: string;
  title: string;
  content: string;
  publishDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type EventType = "Constituency" | "Ministry" | "Other";

export interface UpcomingEvent {
  id: string;
  title: string;
  date: Date;
  location: string;
  type: EventType;
  createdAt: Date;
  updatedAt: Date;
}
