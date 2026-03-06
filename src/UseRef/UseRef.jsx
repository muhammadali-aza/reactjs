import { useRef } from "react"

export default function UseRef() {
    const firstNameRef = useRef("Gfds");
    const secondNameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("First Name:", firstNameRef.current.value);
        console.log("Last Name:", secondNameRef.current.value);
        console.log("Email:", emailRef.current.value);
    }
    
    return <>
        <h1 className="bg-amber-900 my-10 p-3 text-center text-amber-50 font-bold text-2xl ">UseRef</h1>
        <form onSubmit={handleSubmit}>
            <div className="max-w-md m-auto p-4 bg-gray-500 rounded-md grid grid-cols-1 gap-4">
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="border-2 border-gray-300 p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={firstNameRef}
                />
                <input
                 type="text" 
                placeholder="Enter Your Last Name" 
                className="border-2 border-gray-300 p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                ref={secondNameRef}
                />
                <input 
                type="text"
                 placeholder="Enter Your Email" 
                 className="border-2 border-gray-300 p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                 ref={emailRef}
                 />
                <button 
                className="bg-gray-600 text-white border-1 border-gray-950 p-2">
                    Submit</button>
            </div>
        </form>
    </>
}