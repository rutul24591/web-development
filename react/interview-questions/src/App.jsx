import { useState, useEffect } from "react";

import "./App.css";

// 🔌 A simple Input component that logs on render, mount, and unmount
const Input = ({ type }) => {
    console.log("Input"); // 1️⃣ Runs every time this component is rendered

    useEffect(() => {
        console.log("Mounting"); // 2️⃣ Runs once when the component is first mounted
        return () => console.log("Un Mounting"); // 4️⃣ Runs when the component is about to unmount
    }, []); // Empty dependency array → run only on mount & unmount

    return (
        <div>
            <input /> {type}
        </div>
    );
};

// 🔄 A parent component that toggles which Input is shown
const TestComponent = () => {
    // State to decide which Input to show
    const [showFirstInput, setShowFirstInput] = useState(false);

    return (
        <div>
            {
                // 3️⃣ On first render, showFirstInput is false → renders <Input type="two" />
                showFirstInput ? <Input type="one" /> : <Input type="two" />
            }
            <button onClick={() => setShowFirstInput(!showFirstInput)}>
                Click me
            </button>
        </div>
    );
};

function App() {
    return <TestComponent />;
}

export default App;
