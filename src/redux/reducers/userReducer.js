import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LIKE_POST,
  UNLIKE_POST,
  MARK_NOTIFICATIONS_READ
<<<<<<< HEAD
} from "../types";
=======
} from '../types';
>>>>>>> Updated Navbar and layout

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
  notifications: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case LIKE_POST:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            postId: action.payload.postId
          }
        ]
      };
    case UNLIKE_POST:
      return {
        ...state,
<<<<<<< HEAD
        likes: state.likes.filter(like => like.postId !== action.payload.postId)
      };
    case MARK_NOTIFICATIONS_READ:
      state.notifications.forEach(not => not.read = true);
=======
        likes: state.likes.filter(
          (like) => like.postId !== action.payload.postId
        )
      };
    case MARK_NOTIFICATIONS_READ:
      state.notifications.forEach((not) => (not.read = true));
>>>>>>> Updated Navbar and layout
      return {
        ...state
      };
    default:
      return state;
  }
}
