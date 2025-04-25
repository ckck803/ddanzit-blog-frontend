export interface Post {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  content?: string; // 상세 내용
  tags: string[];
}
