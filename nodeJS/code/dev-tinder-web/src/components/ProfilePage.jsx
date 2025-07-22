import React from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const ProfilePage = () => {
    const user = useSelector((store) => store.user);
    console.log("user: ", user);
    return (
        user && (
            <div>
                <EditProfile user={user} />
            </div>
        )
    );
};

export default ProfilePage;
