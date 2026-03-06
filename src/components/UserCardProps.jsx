import ArrayProps from "./ArrayProps";
import UserCard from "./UsersCard";

export default function UserCardProps() {
    const students = [
  {
    id: 1,
    name: "Ali",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    age: 20,
    education: "Intermediate"
  },
  {
    id: 2,
    name: "Ahmed",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    age: 22,
    education: "Bachelor"
  },
  {
    id: 3,
    name: "Usman",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    age: 21,
    education: "Intermediate"
  },
  {
    id: 4,
    name: "Hassan",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    age: 23,
    education: "Bachelor"
  },
  {
    id: 5,
    name: "Bilal",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    age: 24,
    education: "Master"
  },
  {
    id: 6,
    name: "Zain",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    age: 20,
    education: "Intermediate"
  },
  {
    id: 7,
    name: "Saad",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    age: 22,
    education: "Bachelor"
  },
  {
    id: 8,
    name: "Hamza",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    age: 21,
    education: "Intermediate"
  },
  {
    id: 9,
    name: "Umar",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    age: 25,
    education: "Master"
  },
  {
    id: 10,
    name: "Danish",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    age: 23,
    education: "Bachelor"
  }
];
    return <>
        <UserCard name="John Doe" des="Software Engineer" img="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" />
        <UserCard name="Jane Smith" des="Product Manager" img="https://i.pinimg.com/736x/f4/07/5d/f4075d3fdfdf01e3162a845403fdce5f.jpg" />
        <UserCard name="Bob Johnson" des="Designer" img="https://i.pinimg.com/1200x/41/e0/39/41e0398984b0f1a0c79acfb0694bfcce.jpg" />
        <UserCard name="Alice Williams" des="Developer" img="https://i.pinimg.com/736x/50/b7/16/50b716a944c630c9a324b54be6a90027.jpg" />
        <UserCard name="Charlie Brown" des="Marketing Specialist" img="https://i.pinimg.com/736x/19/ad/7e/19ad7edff92d85bf46b28cebd129060b.jpg" />
        {/* Defulat Value Props */}
        <UserCard />

        {/* Array Props  */}
        <ArrayProps students={students} />
    </>
}