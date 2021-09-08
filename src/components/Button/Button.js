import React from "react";
import styles from './Button.module.css'

const Button = ({text, isDelete = false, onClick}) => {
    return (
        <button className={`${styles.button} ${isDelete && styles.buttonDelete}`}
                onClick={onClick}>
            {text}
        </button>
    )
}

export default Button