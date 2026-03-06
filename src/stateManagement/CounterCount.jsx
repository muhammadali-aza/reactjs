import { useState } from "react"

export default function CounterCount() {
    const [text, settext] = useState("")
    return <>
    <h1 className="bg-amber-900 my-10 p-3 text-center text-amber-50 font-bold text-2xl ">Character Count</h1>
    <div className="bg-amber-600 max-w-sm m-auto  my-3 p-4 grid grid-cols-1 gap-4 items-center rounded-[12px]">
        <input type="text" placeholder="Enter Text" required className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => settext(e.target.value)}/>
        <p>{text.length}</p>
    </div>
    </>
}