// import React from "react";
import AddToDoForm from "../../components/AddToDoForm/AddToDoForm";
import ToDoList from '../../components/ToDoList/ToDoList'
import styles from './ToDo.module.css'

const ToDo = () => {
    const List = ['Wake up', 'Drink coffee']
    return (
        <>
            TO DO
            <div>
                <AddToDoForm/>
                <ToDoList List={List}/>
            </div>
        </>
    )
}

export default ToDo