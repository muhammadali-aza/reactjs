import { useState } from "react"

export default function ToggleText() {
    const [toggle, settoggle] = useState(false);
    function ToggleBtn() {
       settoggle(!toggle);
    }
    return <>
    <h1 className="bg-amber-900 my-10 p-3 text-center text-amber-50 font-bold text-2xl ">Toggle Text</h1>
    <div className="bg-amber-600 max-w-sm m-auto  my-3 p-4 grid grid-cols-1 gap-4 items-center rounded-[12px]">
        <p className="text-2xl font-bold text-amber-50 text-center">{toggle ? "ON" : "OFF" } </p>
        <button onClick={ToggleBtn} className="bg-green-500 p-3 rounded-[10px] text-2xl">Toggle</button>
    </div>
    </>
}