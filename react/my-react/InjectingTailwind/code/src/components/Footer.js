import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="flex justify-between items-center border border-solid border-gray-100 rounded-xl bg-gray-100 m-[15px] mt-auto p-2.5">
            <div className="copyrights-container">@ Copyright Rutul Amin</div>
            <div className="footer-nav-container">
                <ul className="flex w-full">
                    <li className="p-2.5 mx-2.5 text-base list-none">Team</li>
                    <li className="p-2.5 mx-2.5 text-base list-none">
                        Contact Us
                    </li>
                    <li className="p-2.5 mx-2.5 text-base list-none">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="p-2.5 mx-2.5 text-base list-none">
                        Careers
                    </li>
                    <li className="p-2.5 mx-2.5 text-base list-none">
                        Compliance
                    </li>
                </ul>
            </div>
        </div>
    );
};
