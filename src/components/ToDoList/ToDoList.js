import styles from './ToDoList.module.css'

const ToDoList = ({List}) => {
    return (
        <div>
            ToDoList
            {List.map((elem, index) => <p key={index}>{index + 1}: {elem}></p>)}
        </div>
    )
}

export default ToDoList