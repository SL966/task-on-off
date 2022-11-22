import React, {useState} from "react";


export default {
    title: 'React.memo demo'
}
const NewMessageCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('Users add')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['CCC','UUU','DDD','PPP'])

    const addUser = () => {
        const newUsers = [...users, 'Users-' + new Date().getTime()]
        setUsers(newUsers)
    }

    users.push('Users+' + new Date().getTime())

    return <>
        <button onClick={() => {setCounter(counter +1)}}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>




}