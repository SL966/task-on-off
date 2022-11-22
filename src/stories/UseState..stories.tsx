import React, {useState} from "react";


export default {
    title: 'useState demo'
}

function generateData() {
    console.log(generateData)
return 1
}

export const Example11 = () => {
    console.log('Example11')
    const [counter, setCounter] = useState<number>(generateData)

    /*const changer = (state: number) => state + 1*/ // это же в setCounter

    return <>
        <button onClick={() => {
            setCounter(state => state +1)
        }}>+
        </button>
        {counter}
    </>


}