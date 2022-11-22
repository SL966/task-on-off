import React, {useEffect, useState} from "react";
import {clearInterval} from "timers";


export default {
    title: 'Watch demo'
}

export const WatchExample = () => {

    console.log('WatchExample')
    const [watch, setWatch] = useState(new Date())

    useEffect(() => {
        let intervalID:number = window.setInterval(() => {

            setWatch(new Date())
        }, 1000)

      return () => {clearInterval(stringTime)}
    }, [])

const stringTime = watch.toLocaleTimeString()

    return <div>{stringTime}</div>
}


/*export const WatchExample1 = () => {

    console.log('WatchExample1')
    const [watch, setWatch] = useState(new Date().toLocaleTimeString())

    let intervalID:number = window.setInterval(() => {

        console.log('setInterval')
        setWatch(new Date().toLocaleTimeString())
        //return () => {clearInterval(intervalID)}
    }, 1000)



    return <div>{watch}</div>
}*/

