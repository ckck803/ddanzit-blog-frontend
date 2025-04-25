export interface IComment  {
  id: number;
  author: string;
  content: string;
  replies: IComment[];
  showReply: boolean;
}