export interface InterviewQuestion {
  question: string;
  answer: string;
  ref: string;
  field: string;
}

export interface Article {
  title: string;
  author: string;
  tags: string[];
  summary: string;
  publishedDate: string;
  url: string;
  pip: string;
}
