import React, {useCallback, useMemo, useState} from "react";


export default {
    title: 'React.memo + useCallback demo'
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

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'js', 'css', 'app'])

    /*const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [books])


    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])*/ //вместо useMemo испоьзуем useCallback

    const memoizedAddBookUseCallback = useCallback(() => {
        const newBooks = [...books, 'Angular' + 1]
        setBooks(newBooks)
    } , [books])


    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <NewMessageCounter count={counter}/>
        <Book  addBook={memoizedAddBookUseCallback}/>
    </>
}

    const BooksSecret = (props: {/*books: Array<string>,*/ addBook: () => void}) => {
        console.log('BooksSecret')
        return <div>
            <button onClick={props.addBook}>add book</button>
            {/*{
            props.books.map((b, i) => <div key={i}>{b}</div>)
        }*/}
        </div>

    }
    const Book = React.memo(BooksSecret)


