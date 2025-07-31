"use client";

import { useState } from "react";

const AboutPage = () => {
    const [name, setName] = useState("");
    // Unlike logs in server component where a `Server` tag is displayed before a log,
    // below log won't have any tag before comment(No tag in client component).
    console.log(`Dashboard client component`);
    return (
        <div>
            <h1>Dashboard page</h1>
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <p>Hello, {name}!</p>
        </div>
    );
};

export default AboutPage;
