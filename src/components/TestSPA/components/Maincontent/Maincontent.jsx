import React from "react";
import styles from "./Maincontent.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Maincontent = () => {
  return (
    <content className={styles.maincontent}>
      <MyPosts/>
      <div>IMG</div>
      <div>avatar</div>
      <div>decription</div>
    </content>
  );
};

export default Maincontent;
