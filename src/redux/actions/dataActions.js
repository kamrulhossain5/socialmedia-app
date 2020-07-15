import {
  SET_POSTS,
  LOADING_DATA,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST,
<<<<<<< HEAD
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  CREATE_POST,
  SET_POST,
  STOP_LOADING_UI,
  SUBMIT_COMMENT
} from "../types";
import axios from "axios";

// Get all posts
export const getPosts = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/posts")
    .then(res => {
=======
  SET_ERRORS,
  CREATE_POST,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_POST,
  STOP_LOADING_UI,
  SUBMIT_COMMENT
} from '../types';
import axios from 'axios';

// Get all posts
export const getPosts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/posts')
    .then((res) => {
>>>>>>> Updated Navbar and layout
      dispatch({
        type: SET_POSTS,
        payload: res.data
      });
    })
<<<<<<< HEAD
    .catch(err => {
=======
    .catch((err) => {
>>>>>>> Updated Navbar and layout
      dispatch({
        type: SET_POSTS,
        payload: []
      });
    });
};
<<<<<<< HEAD

export const getPost = postId => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/post/${postId}`)
    .then(res => {
=======
export const getPost = (postId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/post/${postId}`)
    .then((res) => {
>>>>>>> Updated Navbar and layout
      dispatch({
        type: SET_POST,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI });
    })
<<<<<<< HEAD
    .catch(err => console.log(err));
};

// Create a Post
export const createPost = newPost => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/post", newPost)
    .then(res => {
=======
    .catch((err) => console.log(err));
};
// Create a post
export const createPost = (newPost) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/post', newPost)
    .then((res) => {
>>>>>>> Updated Navbar and layout
      dispatch({
        type: CREATE_POST,
        payload: res.data
      });
      dispatch(clearErrors());
    })
<<<<<<< HEAD
    .catch(err => {
=======
    .catch((err) => {
>>>>>>> Updated Navbar and layout
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
<<<<<<< HEAD

// Like a post
export const likePost = postId => dispatch => {
  axios
    .get(`/post/${postId}/like`)
    .then(res => {
=======
// Like a post
export const likePost = (postId) => (dispatch) => {
  axios
    .get(`/post/${postId}/like`)
    .then((res) => {
>>>>>>> Updated Navbar and layout
      dispatch({
        type: LIKE_POST,
        payload: res.data
      });
    })
<<<<<<< HEAD
    .catch(err => console.log(err));
};

// Unlike a post
export const unlikePost = postId => dispatch => {
  axios
    .get(`/post/${postId}/unlike`)
    .then(res => {
=======
    .catch((err) => console.log(err));
};
// Unlike a post
export const unlikePost = (postId) => (dispatch) => {
  axios
    .get(`/post/${postId}/unlike`)
    .then((res) => {
>>>>>>> Updated Navbar and layout
      dispatch({
        type: UNLIKE_POST,
        payload: res.data
      });
    })
<<<<<<< HEAD
    .catch(err => console.log(err));
};

// Submit a comment 
export const submitComment = (postId, commentData) => (dispatch) => {
  axios.post(`/post/${postId}/comment`, commentData)
    .then(res => {
=======
    .catch((err) => console.log(err));
};
// Submit a comment
export const submitComment = (postId, commentData) => (dispatch) => {
  axios
    .post(`/post/${postId}/comment`, commentData)
    .then((res) => {
>>>>>>> Updated Navbar and layout
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data
      });
      dispatch(clearErrors());
<<<<<<< HEAD
})
.catch(err => {
  dispatch({
    type: SET_ERRORS,
    payload: err.response.data
  })
})
}

export const deletePost = postId => dispatch => {
=======
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
export const deletePost = (postId) => (dispatch) => {
>>>>>>> Updated Navbar and layout
  axios
    .delete(`/post/${postId}`)
    .then(() => {
      dispatch({ type: DELETE_POST, payload: postId });
    })
<<<<<<< HEAD
    .catch(err => console.log(err));
};

export const getUserData = (userHandle) => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios.get(`/user/${userHandle}`)
    .then(res => {
=======
    .catch((err) => console.log(err));
};

export const getUserData = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
>>>>>>> Updated Navbar and layout
      dispatch({
        type: SET_POSTS,
        payload: res.data.posts
      });
    })
<<<<<<< HEAD
    .catch(err => {
      dispatch({
        type: SET_POSTS,
        payload: null
      })
    })
}

export const clearErrors = () => dispatch => {
=======
    .catch(() => {
      dispatch({
        type: SET_POSTS,
        payload: null
      });
    });
};

export const clearErrors = () => (dispatch) => {
>>>>>>> Updated Navbar and layout
  dispatch({ type: CLEAR_ERRORS });
};
