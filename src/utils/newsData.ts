import newsData from "../../kma-news.json";

export interface NewsArticle {
  title: string;
  url: string;
  date: string;
  category: string;
  imageUrl: string;
  author: string;
  timeToRead: string;
  content: string;
  paragraphs: string[];
}

export function getNewsData(): NewsArticle[] {
  return newsData.filter((article) => article.title && article.content);
}

export function transformToBlogPosts() {
  return getNewsData().map((article, index) => ({
    id: article.url.split("/").pop() || `article-${index}`,
    title: article.title,
    excerpt: article.content.split("\n")[0], // First paragraph as excerpt
    content: article.content
      .split("\n")
      .map((p) => `<p>${p}</p>`)
      .join(""),
    category: article.category,
    author: {
      name: "Kwabena Mintah Akandoh",
      avatar: "/kma.jpg",
    },
    readTime: article.timeToRead || "3 min read",
    image:
      article.imageUrl ||
      "https://3news.com/wp-content/uploads/2023/03/Akandoh-Mintah.png",
    featured: index === 0, // Make the first article featured
    dateAdded: new Date(article.date).toISOString(),
  }));
}

export function transformToNewsItems() {
  return getNewsData()
    .slice(0, 3)
    .map((article) => ({
      date: new Date(article.date).toISOString(),
      title: article.title,
      excerpt: article.content.split("\n")[0],
      category: article.category,
      readTime: article.timeToRead,
      link: `/blog/${article.url.split("/").pop()}`,
    }));
}
