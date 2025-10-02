import React, { Component } from "react";

// import User from "../../components/User";
import UserClass from "../../components/UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
        this.state = {
            count: 0,
            count2: 0,
            count3: 0,
            userInfo: {
                name: "Dummy",
                location: "Earth",
                userId: "xyz",
                avatar_url: "https://xyz.com",
            },
        };
    }

    async componentDidMount() {
        // Called after constructor and render
        console.log("Parent Component Did Mount");

        // Make API calls here. Why?
        // To make react quickly render the component then make api call and fill the data
        const data = await fetch("https://api.github.com/users/rutul24591");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        /** The below if is like 1 single useEffects with count and count2 in dependency array */
        if (
            this.state.count !== prevState.count ||
            this.state.count2 !== prevState.count2 ||
            this.state.count3 !== prevState.count3
        ) {
            // !!!
            // Code your logic for update.
            // Previously we needed to do this way to check if state variable change.
            // So this is the reason in useEffect for (newer version) dependency is not a single value and is an array
            // i.e Dependency Array
        }

        /** The below 2 if's is like 2 separate useEffects with count and count2 in dependency array resp. */
        if (this.state.count !== prevState.count) {
            // Code your logic for update.
        }

        if (this.state.count2 !== prevState.count2) {
            // Code your logic for update.
        }
    }

    /** Detailed Lifecycle
     * ------------- MOUNTING ------------
     * Constructor
     * Render(with dummy data)
     *      <Html dummy>        <- DOM prints
     * ComponentDidMount called
     *          API call
     *          <this.setState> -> state variable is updated/changed
     *
     * ------------ UPDATING --------------
     *
     * Render(with api data)
     *      <HTML api data>      <- DOM prints again with new data
     *
     * ComponentDidUpdate called
     *
     *
     * ----------- UNMOUNTING -------------
     * ComponentWillUnmount called when component is removed.
     *
     *
     */

    componentWillUnmount() {
        console.log("Component Will Unmount called");
        // !!!
        // remove event listeners and cleanup.
        // Add a setInterval for 1sec(with a log in callback) in componentDidMount and switch between pages,
        // you will notice the interval is not removed. Again go to about us page, now logs will be printed twice.
        // Again and its printed thrice. This is a disadvantage of SPA as pages are not reloaded only components are mounted or unmounted.
        // So we will have to explicitly remove events.

        // How to reference setInterval or setTimeout here???
        // Bind to this like this.setInterval() in componentDidMount and this.clearInterval() in componentWillUnmount
    }

    render() {
        console.log("Parent Render");
        return (
            <div className="about-container">
                <h1>About Team</h1>
                {/* How class components renders?
                1. As soon as About Container is loaded, it sees the UserClass and creates a instance of UserClass.
                2. Then it calls the constructor of UserClass
                3. Then it calls the render() of UserClass. 
                */}
                <UserClass userInfo={this.state.userInfo} />
            </div>
        );
    }
}

export default About;
