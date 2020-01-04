import React from 'react'
import styles from "./Dialogs.module.css"
import mainstyles from "./../Maincontent/Maincontent.module.css";

const Dialogs = () => {
    return (
        <div className={mainstyles.maincontent}>
            <div className={styles.dialogs}>
            <div className={styles.users}>
                users
            </div>
            <div className={styles.messages}>
                messages
            </div>
            </div>
        </div>
    )
}

export default Dialogs
