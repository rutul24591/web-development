import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded p-10 fixed bottom-0 flex justify-between text-yellow-400">
                <aside>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right
                        reserved by ACME Industries Ltd
                    </p>
                </aside>

                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
