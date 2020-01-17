import React from "react";
//import OnePost from "./OnePost/OnePost";
//import styles from "./MyPosts.module.css";
import styles from "./../Maincontent.module.css";
//import {addPostActionCreator, updateNewPostTextActionCreator } from "./../../Redux/PostsPageReducer"


const MyPosts = (props) => {

  let PostsElements = props.posts.map (
    (Posts) => <PostItem post={Posts.post}/>
  )

  let NewPostElement = React.createRef();


  let onAddPost = () => {
    props.AddPost();
  }

  let onPostChange = () => {
    let text = NewPostElement.current.value;
    props.updateNewPostText(text);
  }


  const PostItem = (props) => {
    return (
        <div>
            {props.post}
        </div>
    )
}

  return (
  <div className={styles.maincontent}>
      {PostsElements}
      <div>
        <textarea onChange={onPostChange} ref={NewPostElement} value={props.newPostText}/>
      </div>
      <div>
        <button onClick={onAddPost}>AddPost</button>
      </div>
      
  </div>
  )
};

export default MyPosts;

