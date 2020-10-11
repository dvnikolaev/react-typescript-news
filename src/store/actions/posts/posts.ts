import { store } from '../../index';

import { Post } from "../../../models/IPost";
import { ACCEPT_POST, ADD_POST } from "./types";

export const addPost = (author_id: number, title: string, description: string) => {
  const post = new Post(author_id,title,description);

  return {
    type: ADD_POST,
    payload: post
  }
}

export const onAcceptPost = (id: number) => {
  const foundedIndex: number = store.getState().posts.posts.findIndex(item => item.id === id);

  return {
    type: ACCEPT_POST,
    payload: foundedIndex
  }
}