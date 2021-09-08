import React from "react";

import AddToDoForm from "../../components/AddToDoForm/AddToDoForm";
import ToDoList from '../../components/ToDoList/ToDoList'
import styles from './ToDo.module.css'


const ToDo = () => {
    const [list, setList] = React.useState([])

    const addElemToList = (elem) => {
        setList([...list, elem])
    }

    const deleteElemToDoList = (index) => {
        // console.log('deleteElemToDoList', index)
        setList([
            ...list.slice(0, index),
            ...list.slice(index + 1, list.length)
            ]
        )
    }

    return (
        <>
            <div className={styles.container}>
                <AddToDoForm addElemToList={addElemToList}/>
                <ToDoList list={list} deleteElem={deleteElemToDoList}/>
            </div>
        </>
    )
}

export default ToDo