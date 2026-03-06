import { useState } from "react"

export default function Counter() {
    const [counter, setcounter] = useState(0)

    return <>
    <div className="max-w-1/2 m-auto text-center">
    <h1 className="text-2xl font-bold my-5">Counter: {counter}</h1>
    <div className="flex justify-center space-x-4">
    <button onClick={() => setcounter(counter + 1)} className="bg-green-500 text-white px-4 py-2 rounded">Increment +</button>
    <button onClick={() => setcounter(counter - 1)} className="bg-red-500 text-white px-4 py-2 rounded">Decrement -</button>
    </div>
    </div>
    </>
}