import React from 'react'
import styles from "./Dialogs.module.css"
import mainstyles from "./../Maincontent/Maincontent.module.css";
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {

    let path = "/Dialogs/" + props.id

    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessagesItem = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={mainstyles.maincontent}>
            <div className={styles.dialogs}>
            <div className={styles.users}>
                users
                <DialogItem name="user1" id="1" />
                <DialogItem name="user2" id="2" />
                <DialogItem name="user3" id="3" />
            </div>
            <div className={styles.messages}>
                messages
                <MessagesItem message="Hello!" />
                <MessagesItem message="How are you?" />
                <MessagesItem message="Where you from?" />
            </div>
            </div>
        </div>
    )
}

export default Dialogs
