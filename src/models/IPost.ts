interface IPost {
  id: number;
  author_id: number;
  title: string;
  description: string;
  date: string;
}

export interface IPostState {
  posts: IPost[];
}

export class Post implements IPost {
  id: number = Date.now();
  author_id: number;
  title: string;
  description: string;
  date: string = new Date().toISOString().substr(0,10);

  constructor(author_id: number, title: string, description: string) {
    this.author_id = author_id;
    this.title = title;
    this.description = description;
  }
}