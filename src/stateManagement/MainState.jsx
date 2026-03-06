import Counter from "./Counter";
import CounterCount from "./CounterCount";
import ToDo from "./ToDo";
import ToggleText from "./ToggleText";

export default function MainState() {
    return <>
    <h1>Main State</h1>
    <Counter />
    <ToggleText />
    <ToDo />
    <CounterCount />
    </>
}