import React from "react";

const PropDrilling = () => {
    const user = { name: "Rakesh" };
    return <Layout user={user} />;
};

function Layout({ user }) {
    return <Sidebar user={user} />;
}

function Sidebar({ user }) {
    return <UserPanel user={user} />;
}

function UserPanel({ user }) {
    return <ProfileAvatar user={user} />;
}

function ProfileAvatar({ user }) {
    return <img src={`/${user.name}.png`} alt={user.name} />;
}

export default PropDrilling;
