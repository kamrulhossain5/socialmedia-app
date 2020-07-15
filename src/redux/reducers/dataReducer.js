import {
  SET_POSTS,
  LIKE_POST,
  UNLIKE_POST,
  LOADING_DATA,
  DELETE_POST,
  CREATE_POST,
  SET_POST,
  SUBMIT_COMMENT
<<<<<<< HEAD
} from "../types";
=======
} from '../types';
>>>>>>> Updated Navbar and layout

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case SET_POST:
      return {
        ...state,
        post: action.payload
      };
    case LIKE_POST:
    case UNLIKE_POST:
      let index = state.posts.findIndex(
<<<<<<< HEAD
        post => post.postId === action.payload.postId
      );
      state.posts[index] = action.payload;
      if(state.post.postId === action.payload.postId) {
=======
        (post) => post.postId === action.payload.postId
      );
      state.posts[index] = action.payload;
      if (state.post.postId === action.payload.postId) {
>>>>>>> Updated Navbar and layout
        state.post = action.payload;
      }
      return {
        ...state
      };
    case DELETE_POST:
<<<<<<< HEAD
      return {
        ...state,
        posts: state.posts.filter(post => post.postId !== action.payload)
=======
      index = state.posts.findIndex(
        (post) => post.postId === action.payload
      );
      state.posts.splice(index, 1);
      return {
        ...state
>>>>>>> Updated Navbar and layout
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [action.payload, ...state.post.comments]
        }
<<<<<<< HEAD
      }
=======
      };
>>>>>>> Updated Navbar and layout
    default:
      return state;
  }
}
