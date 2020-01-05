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


let DialogsData =[
    {id: "1", name: "user1"},
    {id: "2", name: "user2"},
    {id: "3", name: "user3"}
]

let MessagesData =[
    {id: "1", message: "Hello!"},
    {id: "2", message: "How are you?"},
    {id: "3", message: "Where you from?"}
]

let DialogsElements = DialogsData.map (
    (Dialog) => <DialogItem name={Dialog.name} id={Dialog.id} />
)


    return (
        <div className={mainstyles.maincontent}>
            <div className={styles.dialogs}>
            <div className={styles.users}>
                users
                {/* <DialogItem name="user1" id="1" />
                <DialogItem name="user2" id="2" />
                <DialogItem name="user3" id="3" /> */}
                {/* <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id} /> */}
                {DialogsElements}

            </div>
            <div className={styles.messages}>
                messages
                {/* <MessagesItem message="Hello!" />
                <MessagesItem message="How are you?" />
                <MessagesItem message="Where you from?" /> */}
                <MessagesItem message={MessagesData[0].message} id={MessagesData[0].id} />
                <MessagesItem message={MessagesData[1].message} id={MessagesData[1].id} />
                <MessagesItem message={MessagesData[2].message} id={MessagesData[2].id} />
            </div>
            </div>
        </div>
    )
}

export default Dialogs
