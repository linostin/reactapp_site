import React from "react";
//import OnePost from "./OnePost/OnePost";
//import styles from "./MyPosts.module.css";
import styles from "./../Maincontent.module.css";

const MyPosts = (props) => {


  let NewPostElement = React.createRef();


  let AddPost = () => {
    // let text = NewPostElement.current.value;
    props.addPost()
    // NewPostElement.current.value = "";
    // props.updateNewPostText("");
  }


  const PostItem = (props) => {
    return (
        <div>
            {props.post}
        </div>
    )
}

  let PostsElements = props.PostsPage.PostsData.map (
    (Posts) => <PostItem post={Posts.post}/>
)

let onPostChange = () => {
  let text = NewPostElement.current.value;
    props.updateNewPostText(text)
}

  return (
  <div className={styles.maincontent}>
      {/* <OnePost message="Heloo"/>
      <OnePost message="Heloo 123"/>
      <OnePost message="Heloo 345"/> */}
      {PostsElements}
      <div>
        <textarea onChange={onPostChange} ref={NewPostElement} value={props.newPostText}/>
      </div>
      <div>
        <button onClick={AddPost}>AddPost</button>
      </div>
      
  </div>
  )
};

export default MyPosts;

