import { IPostState } from '../../models/IPost';
import { ADD_POST } from '../actions/posts/types';

const INITIAL_STATE: IPostState = {
  posts: [
    {
      id: 1,
      author_id: 1,
      title: "Lorem, ipsum.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aliquid.",
      date: "2020-09-23",
      isAccept: true,
    },
    {
      id: 2,
      author_id: 1,
      title: "Expedita provident eligendi.",
      description:
        "Expedita provident eligendi repellendus corrupti culpa soluta laboriosam sint?",
      date: "2020-09-23",
      isAccept: true,
    },
    {
      id: 3,
      author_id: 1,
      title: "de Finibus Bonorum et Malorum.",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      date: "2020-09-23",
      isAccept: false,
    },
  ]
}

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_POST:
      return {...state, posts: [...state.posts, action.payload]}
    default:
      return {...state};
  }
}