import { Post } from "../../../models/IPost";
import { ADD_POST } from "./types";

export const addPost = (author_id: number, title: string, description: string) => {
  const post = new Post(author_id,title,description);

  return {
    type: ADD_POST,
    payload: post
  }
}