import UserCardProps from "./components/UserCardProps";
import MainState from "./stateManagement/MainState";
import MainUseRef from "./UseRef/MainUseRef";

export default function App() {
  return <>
  {/* UserCard Components & Props */}
  <UserCardProps />

  {/* State Management */}
  <MainState />

 {/* UseRef */}
 <MainUseRef />

  </>
}