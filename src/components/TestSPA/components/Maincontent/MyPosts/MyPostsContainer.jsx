import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator } from "./../../Redux/PostsPageReducer"
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

  let AddPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action)
  }

  return (
    <MyPosts updateNewPostText={onPostChange} AddPost={AddPost}/>
  )

};

export default MyPostsContainer;

