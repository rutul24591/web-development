import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props); // To call parent's constructor and use this.props in constructor from where it is called
        console.log(this.props);

        // this.state = {
        //     count: 0,
        //     name: "Dummy",
        //     location: "default",
        //     bio: "xyz",
        //     login: "dummy",
        //     // userInfo: {
        //     //     name: "Dummy",
        //     //     location: "default",
        //     //     bio: "xyz",
        //     //     login: "dummy",
        //     // },
        // };

        console.log("Child constructor");
    }

    componentDidMount() {
        // Called after constructor and render
        console.log("Child Component Did Mount");
    }

    render() {
        // debugger; // Add this to place a debugger at this line
        console.log("Child Render");

        const { count, name, bio, location, login, avatar_url } =
            this.props.userInfo;

        return (
            <div className="user-card">
                {/* <h1>Count : {count}</h1>
                <button
                    onClick={() => {
                        //Never Update State Variables directly
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }}
                >
                    Update Count
                </button> */}

                {/* <h2>Member </h2> */}
                <div className="logo-container">
                    <img className="logo" src={avatar_url} />
                </div>
                <div className="user-details">
                    <h2>Name: {name}</h2>
                    <h3>Bio: {bio ?? "Front End React developer"}</h3>
                    <h3>Location: {location}</h3>
                    <h4>Github: {login}</h4>
                </div>
            </div>
        );
    }
}

export default UserClass;
