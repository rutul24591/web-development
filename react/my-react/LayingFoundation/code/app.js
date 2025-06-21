//Reactjs Core parts
import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello Rutul, this is React World"
// );

// JSX is HTML like or XML like syntax, but is not HTML or HTML in react. !!!
// Is is valid JS or pure JS? NO. JSEngine doesn't understand it. JSEngine understand Ecmascript.
// So how does below code work? Due to Parcel(or any web bundler). It transpiles the code for browser to understand.
// Parcel transpiles before it goes to JSEngine.
// Transpile is nothing but converting to code that browsers and react can understand.
// Does Parcel does the transpilation? No it just manages the bundling. It gives the responsibility of transpiling to a package called BABEL.
// Babel is a JS compoiler(transpiler), it takes JSX and converts it to React.createElement.
// !!!
// 1. React.createElement => ReactElement (i.e) - JS Object => HTMLElement (render)

//        babel                  React
//         |                      |
//         |                      |
// 2. JSX  => React.creatElement  => ReactElement (i.e) - JS Object => HTMLElement (render)

// attributes provided to jSX are camelCase

// Everything in a react is a component
// 1. Class Based component -  OLD
// 2. Function Based component - NEW

// A Functional component is nothing but a normal JS function which returns some JSX/ReactElement

const number = 10000;
const api = {
    getData: () => {
        const data = [];
        return data;
    },
};
const data = api?.getData() || undefined;

const elem = <span>This is span element</span>;

const Title = () => (
    <h1 className="heading" tabIndex="5">
        React Refresh 🧑🏽‍💻 🚀
        {elem}
    </h1>
);

// React Element
const Title1 = (
    <h1 className="heading" tabIndex="5">
        React Refresh 🧑🏽‍💻 🚀
    </h1>
);

console.log(Title); //object

const HeaderFn = () => {
    return (
        <div id="container">
            <Title />
            <h1>This is a React Functional Component</h1>
            <h2>{number}</h2> <h2>{console.log("hello comment")}</h2>
            {/* Can inject javascript here with use of curly braces {} */}
            {Title1} {/* Element */}
            {<Title />} {/* Functional Component */}
            {<Title></Title>} {/* Functional Component. Same as above */}
            {Title()}{" "}
            {/* Calling Functional Component. Same as above
            You can call it as normal function within {} as it js function only */}
            {data}{" "}
            {/** Executing js. Suppose API response is malicious eg XSS.
             * JSX will do the job automatically. It will escape it(i.e sanitize data)
             * It will not blindly run it.
             */}
        </div>
    );
};

// What is component composition ?
// Fusing or composing two components together into one another is component composition. Another jargon
// HeaderFn is component composition(above)

const HeaderFn1 = () => (
    <h1>This is a React Functional Component</h1> // Same as above
);

const fn = () => true; // If single line

const fn1 = () => {
    return true; // Same as above
};
const jsxElement = <h1 id="heading">Hello Rutul, this is React world 🚀</h1>;

console.log(jsxElement);
// ReactDOM.createDOM(RootElement)
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(ReactElement);
// root.render(heading);
root.render(<HeaderFn />);
