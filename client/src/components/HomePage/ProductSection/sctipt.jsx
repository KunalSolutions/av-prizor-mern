import { useState } from "react"

const Counter = () => {

    const [count ,setCount] = useState(0)

    return (
        <div className="bg-white p-30 text-center ">
            <h1>COUNTER</h1>
            <p>
                COUNT : {count}
            </p>
            <button className="bg-red-600 shadow space-x-3.5 text-white p-1 px-2 rounded-2xl"
                onClick={ () => {
                    setCount(count + 1)
                }}
                > ADD
            </button>
            <button className="bg-indigo-600 shadow text-white p-1 px-2 rounded-2xl"
             onClick={ () => {
                setCount(count- 1)
             }}
            >   Cut
            </button>
        </div>
    )
}

export default Counter 