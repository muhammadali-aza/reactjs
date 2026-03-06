import { useRef } from "react"

export default function FocusBtn() {
    const userNameRef = useRef(null);
    const handleFocus = () => {
        userNameRef.current.focus();
    }
    
    return <>
        <h1 className="bg-amber-900 my-10 p-3 text-center text-amber-50 font-bold text-2xl ">UseRef Focus Button</h1>
        <div className="max-w-md m-auto p-4 bg-gray-500 rounded-md grid grid-cols-1 gap-4">
            <input
             type="text"
              placeholder="Enter Name"
              className="text-white"
              ref={userNameRef}
            />
            <button onClick={handleFocus} className="bg-gray-600 text-white border-1 border-gray-950 p-2">
                Focus Input
            </button>
        </div>
        
    </>
}