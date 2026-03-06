import { useState } from "react"

export default function CounterApp() {
    return <>
    <h1 className="bg-gray-700 max-w-1/3 m-auto text-white font-bold my-5 p-2 rounded-[10px] text-center">Tasks useState & useRef</h1>
    <div className="bg-gray-500 max-w-1/4 m-auto space-x-4 p-4 rounded-[10px] text-center">
        <h1 className="text-white m-2 text-2xl mb-5">Counter: </h1>
        <button class="bg-green-950 text-white p-2 rounded-[10px]">Increase</button>
        <button className="bg-red-950 text-white p-2 rounded-[10px]">Decrease</button>
        <button className="bg-red-500 text-white p-2 rounded-[10px]">ReStart</button>
    </div>
    </>
}