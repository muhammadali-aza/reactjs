// Sample Props Data

// export default function UsersCard(props) {
//     return <>
//     <div className="bg-amber-950 max-w-sm m-auto  my-3 p-4 grid grid-cols-1 gap-4 items-center">
//             <img src={props.img} alt="User Image" className="w-25 h-auto rounded-full"/>
//         <p className="text-amber-50 text-1xl">User Name: {props.name}</p>
//             <p className="text-amber-50 text-1xl">User Description: {props.des}</p>
//         </div>
//     </>
// }

// Destructured Props Data

// export default function UserCard({name, des, img}) {
// Props Destructuring Defulate Value
// const {name, des, img} = props;
export default function UserCard({ name = "Muhammd Ali Raza", des = "Front-end Developer", img = "https://i.pinimg.com/736x/ea/a0/f1/eaa0f1b37d5898c28674f342af82ed1a.jpg" }) {

    return <>
        <div className="bg-amber-950 max-w-sm m-auto  my-3 p-4 grid grid-cols-1 gap-4 items-center">
            <img src={img} alt="User Image" className="w-25 h-auto rounded-full" />
            <p className="text-amber-50 text-1xl">User Name: {name}</p>
            <p className="text-amber-50 text-1xl">User Description: {des}</p>
        </div>
    </>
}