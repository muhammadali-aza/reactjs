import { useState } from "react"

export default function ToDo() {
    const [tasks, settasks] = useState("")
    const [lists, setlists] = useState([])

    const addList = () => {
        setlists([...lists, tasks])
        settasks("")
    }
    return <>
    <h1 className="bg-amber-900 my-10 p-3 text-center text-amber-50 font-bold text-2xl ">To Do List</h1>
    <div className="max-w-1/2 m-auto ">
        <input type="text" placeholder="Add a new task..." required value={tasks} onChange={(e) => settasks(e.target.value)} className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button onClick={addList} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
        </button>
        <ul className="space-y-2 mt-4">
            {lists.map((list, index) => {
                return <li key={index} className="bg-black text-amber-50 w-50 p-0.5 rounded-2xl">{list}</li>
            })}
        </ul>
    </div>
    </>
}