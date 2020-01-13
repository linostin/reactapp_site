import React from 'react'
import styles from "./Dialogs.module.css"
import mainstyles from "./../Maincontent/Maincontent.module.css";
import { NavLink } from 'react-router-dom';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator } from "./../Redux/DialogsPageReducer"


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

const Dialogs = (props) => {


let DialogsElements = props.DialogsPage.DialogsData.map (
    (Dialog) => <DialogItem name={Dialog.name} id={Dialog.id} />
)

let MessagesElements = props.DialogsPage.MessagesData.map (
    (Messages) => <MessagesItem message={Messages.message} />
)

let NewMessageBody = props.DialogsPage.NewMessageBody;

let onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator())
}

let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.dispatch(updateNewMessageBodyActionCreator(body))
}

    return (
        <div className={mainstyles.maincontent}>

            <div className={styles.dialogs}>

                <div className={styles.users}>
                    <div><h3>users</h3></div>
                    <div>{DialogsElements}</div>
                </div>

                <div className={styles.messages}>
                    <div><h3>messages</h3></div>
                    <div>{MessagesElements}</div>
                    <div><textarea value={NewMessageBody} placeholder="Enter your message here" onChange= {onNewMessageChange}/></div>
                    <div><button onClick= {onSendMessageClick}>Send</button></div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs
