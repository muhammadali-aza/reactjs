export default function UsersCard(props) {
    return <>
    <div className="bg-amber-950 max-w-sm m-auto  my-3 p-4 grid grid-cols-1 gap-4 items-center">
            <img src={props.img} alt="User Image" className="w-25 h-auto rounded-full"/>
        <p className="text-amber-50 text-1xl">User Name: {props.name}</p>
            <p className="text-amber-50 text-1xl">User Description: {props.des}</p>
        </div>
    </>
}