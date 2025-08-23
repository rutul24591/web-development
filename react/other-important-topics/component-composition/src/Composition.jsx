import React from "react";

const Composition = () => {
    const user = { name: "Rakesh" };

    return (
        <Layout>
            <Sidebar>
                <UserPanel>
                    <ProfileAvatar user={user} />
                </UserPanel>
            </Sidebar>
        </Layout>
    );
};

function Layout({ children }) {
    return <div className="layout">{children}</div>;
}

function Sidebar({ children }) {
    return <aside className="sidebar">{children}</aside>;
}

function UserPanel({ children }) {
    return <section className="user-panel">{children}</section>;
}

function ProfileAvatar({ user }) {
    return <img src={`/${user.name}.png`} alt={user.name} />;
}

export default Composition;
