import React from "react";
import OnePost from "./OnePost/OnePost";
//import styles from "./MyPosts.module.css";
import styles from "./../Maincontent.module.css";

const MyPosts = () => {
  return (
  <div className={styles.maincontent}>
      <OnePost message="Heloo"/>
      <OnePost message="Heloo 123"/>
      <OnePost message="Heloo 345"/>
  </div>
  )
};

export default MyPosts;

