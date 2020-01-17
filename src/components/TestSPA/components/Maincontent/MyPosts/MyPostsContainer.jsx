import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator } from "./../../Redux/PostsPageReducer"
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

  let AddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action)
  }

  return (
    <MyPosts updateNewPostText={onPostChange} AddPost={AddPost} posts={props.PostsData}/>
  )

};

export default MyPostsContainer;

