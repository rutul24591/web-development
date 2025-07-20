//Reactjs Core parts
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * How to create below?
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello Rutul</h1>
 *          <h1>This is React world</h1>
 *      </div>
 *      <div id="child2">
 *          <h1>Hello Rutul</h1>
 *          <h1>This is React world</h1>
 *      </div>
 * </div>
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child", key: 1 }, [
        React.createElement("h1", { key: 1 }, "Hello Rutul"),
        React.createElement("h1", { key: 2 }, "This is React world"),
    ]),
    React.createElement("div", { id: "child2", key: 2 }, [
        React.createElement("h1", { key: 1 }, "Hello Rutul"),
        React.createElement("h1", { key: 2 }, "This is React world"),
    ]),
]);
// What is heading or what does create element do?
// It is a react element and not a tag. All React elements are js objects.
// React.createElement(tagName, props, content)
// This object becomes(converts) to HTML which browser understands
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello Rutul, this is React World"
);

// console.log(heading) //object

// ReactDOM.createDOM(RootElement)
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(ReactElement);
// root.render(heading);
root.render(parent);
