import React from "react";
//import styles from "./OnePost.module.css";

const OnePost = (props) => {
  return (
  <div className="onepost">
      {props.message}
  </div>
  )
};

export default OnePost;
