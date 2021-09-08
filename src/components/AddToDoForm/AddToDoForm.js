import React from "react";
import styles from './AddToDoForm.module.css'
import Button from "../Button/Button";

const AddToDoForm = ({addElemToList}) => {
    const [toDo, setToDo] = React.useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        addElemToList(toDo)
        setToDo('')
    }

    const handleInputChange = (event) => {
        setToDo(event.target.value)
    }

    return (
        <form className={styles.addToDoForm} onSubmit={handleFormSubmit}>
            AddToDoForm
            <input className={styles.enterInput} name="todo" value={toDo} onChange={handleInputChange}/>
            <Button text="Add Elem"/>
        </form>
    )
}

export default AddToDoForm