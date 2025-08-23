import Composition from "./Composition";
import PropDrilling from "./PropDrilling";

/**
 * Advantages of Component composition
 *
 * Structural flexibility: Move components around like Lego blocks.
 * Data locality: Only pass props to where they’re actually needed.
 * Cleaner APIs: No unnecessary prop forwarding.
 * Better testing: Smaller, focused units with isolated responsibilities.
 *
 * And bonus — you’re not introducing global state or external libraries for something that’s really a local problem.
 */

function App() {
    return (
        <>
            {/** Prop Drilling*/}
            <PropDrilling />

            {/** Component composition in place as alternate of ContextAPI, Lifting state up, State management library,  */}
            <Composition />
        </>
    );
}

export default App;
