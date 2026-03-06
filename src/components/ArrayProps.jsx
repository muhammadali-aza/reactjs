export default function ArrayProps({ students }) {

    return <>
        <ul>
            <h1 className="text-2xl font-bold mb-4 text-center my-1">Array Props Example</h1>
            {students?.map((student, id) => {
                return <li key={id}>
                    <div className="bg-amber-950 max-w-sm m-auto  my-3 p-4 grid grid-cols-1 gap-4 items-center">
                        <img src={student.image} alt="User Image" className="w-25 h-auto rounded-full" />
                        <p className="text-amber-50 text-1xl">Student Name: {student.name}</p>
                        <p className="text-amber-50 text-1xl">Student age: {student.age}</p>
                        <p className="text-amber-50 text-1xl">Student Education: {student.education}</p>
                    </div>
                </li>
            })}
        </ul>

    </>
}