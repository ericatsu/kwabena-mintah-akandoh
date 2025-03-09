import { transformToBlogPosts } from "../utils/newsData";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  image: string;
  featured?: boolean;
  dateAdded: string;
}

// You can initialize with dummy data or an empty array
export const initialPosts: BlogPost[] = [
  // Initial posts can go here
];

// Export a function to get posts from your transformed news data
export function getPosts() {
  try {
    return transformToBlogPosts();
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return initialPosts;
  }
}
