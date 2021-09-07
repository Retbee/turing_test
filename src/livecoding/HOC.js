// HOC - Higher-Order Component

import React from "react"
import { dataSource } from "./DataSource";
// const UsersList = () => {
//     const [users, setUsers] = React.useState(dataSource.getUsers())
//
//     React.useEffect(() => {
//         const handleDataChange = (newUsers) => {
//             setUsers(newUsers)
//         }
//
//         dataSource.addListener(handleDataChange)
//
//     }, [])
//
//     return (
//         <ul>
//             {users.map((user, index) => (
//                 <li key={index}>
//                     {user.name} - {user.age}
//                 </li>
//             ))}
//         </ul>
//     )
// }
//
// const UsersCount = () => {
//     const [usersCount, setUsersCount] = React.useState(dataSource.getUsers().length)
//
//     React.useEffect(() => {
//         const handleDataChange = (newUsers) => {
//             setUsersCount(newUsers.length)
//         }
//
//         dataSource.addListener(handleDataChange)
//
//     }, [])
//
//     return (
//         <div>{usersCount}</div>
//     )
// }
const AddUserForm = () => {

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const name = event.target.userName.value
        const age = event.target.userAge.value

        if(!(name && age)) return

        dataSource.addUser({name,age})
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <input name="userName"/>
            </div>
            <div>
                <input name="user.Age"/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const dateSourceWrapper = (WrappedComponent) => {
    return () => {
        const [users, setUsers] = React.useState(dataSource.getUsers())

        React.useEffect(() => {
            const handleUsersChange = (newUsers) => {
                setUsers(newUsers)
            }
            dataSource.addListener(handleUsersChange)
        }, [])

        return <WrappedComponent users={users}/>
    }
}

const UsersListSimple = ({users}) => {
    return (
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        )
}

const UsersCountSimple = ({users}) => {
    return (
        <div>{users.length}</div>
    )
}

const WrappedUsersList = dateSourceWrapper(UsersListSimple)
const WrappedUsersCount = dateSourceWrapper(UsersCountSimple)

const Main = () => {
    return (
        <>
            <AddUserForm/>
            {/*<UsersList/>*/}
            {/*<UsersCount/>*/}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <WrappedUsersList/>
            <WrappedUsersCount/>
        </>
    )
}

export default Main