import { Post } from "../../../models/IPost";
import { ACCEPT_POST, ADD_POST, DECLINE_POST } from "./types";

export const addPost = (author_id: number, title: string, description: string) => {
  const post = new Post(author_id,title,description);

  return {
    type: ADD_POST,
    payload: post
  }
}

export const onAcceptPost = (id: number) => {
  return {
    type: ACCEPT_POST,
    payload: id
  }
}

export const onDeclinePost = (id: number) => {
  return {
    type: DECLINE_POST,
    payload: id
  }
}