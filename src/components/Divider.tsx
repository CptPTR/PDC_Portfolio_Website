import React from 'react'
import styles from "@/styles/Divider.module.css";


const Divider = () => {
    return (
        <div className={styles.divider}>
            <div className={`${styles.dot} ${styles.sideDot}`}></div>
            <div className={`${styles.dot} ${styles.middleDot}`}></div>
            <div className={`${styles.dot} ${styles.sideDot}`}></div>
        </div>
    )
}

export default Divider
