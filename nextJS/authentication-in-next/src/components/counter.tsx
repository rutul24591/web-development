"use client";

import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

const Counter = () => {
    const [count, setCount] = useState(0);

    /** Conflicting property names so use 1 at a time */
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    // const {isLoaded, isSingedIn, user} = useUser();

    /** NOTE: Not working correctly. Some problem with redirection, preflight request check from localhost:3000 */
    if (!isLoaded || !userId) {
        return null;
    }

    //   if (!isLoaded || !isSignedIn) {
    //     return null;
    //   }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
};

export default Counter;
