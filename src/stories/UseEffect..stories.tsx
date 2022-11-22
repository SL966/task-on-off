import React, {useEffect, useMemo, useState} from "react";
import {clearInterval} from "timers";


export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log('SimpleExample')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)


    useEffect(() => {
        console.log('useEffect no addiction')
        document.title = String(counter)
    }); //срабатывает при каждой перерисовке компоненты,
    // нет зависимости ( }, [зависимость от сохраняемого значения counter или fake ]

    useEffect(() => {
        console.log('useEffect counter')
        document.title = String(counter);
        /*api.getUsers().then('');
        setInterval;                    // основные запросы UseEffect
        indexedDB;
        document.getElementId();
        document.title = 'Users'*/

    }, [counter])  // зависимость от }, [counter], срабатывает только при измении counter)

    useEffect(() => {
        console.log('useEffect fake')
        document.title = String(fake);
    }, [fake])   // зависимость от }, [fake], срабатывает только при измении fake)

    return <>
        Hello, {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>counter
        </button>
        {fake}
        <button onClick={() => {
            setFake(fake + 1)
        }}>fake
        </button>

    </>


}


export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')

    const [counter, setCounter] = useState(1)


    /*useEffect(() => {
        console.log('useEffect no addiction')
        setTimeout(() => {
            console.log('setTimeout')
            document.title = String(counter)
        }, 1000)
    }, [counter])*/

    /*useEffect(() => {
        setInterval(() => {
            console.log('setTimeout')
            setCounter(state => state + 1)
        }, 1000)
    }, [])*/

    return <>
        Hello, {counter}
        {/*<button onClick={() => {
            setCounter(counter +1)
        }}>counter
        </button>
        {fake}
        */}
    </>
}

/*export const WatchExample = () => {
    console.log('WatchExample')
    const [watch, setWatch] = useState(new Date().toLocaleTimeString())


    useEffect(() => {
       console.log('useEffect')
        let intervalID = setInterval(() => {
            console.log('setInterval')
            setWatch(new Date().toLocaleTimeString())
        }, 1000)

       // return () => {clearInterval(intervalID)}
    }, [])


    return <div>{watch}</div>
}*/

