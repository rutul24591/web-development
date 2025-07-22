import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/constants";
import { addUser } from "../store/userSlice";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = async () => {
        console.log("HANDLE REGISTER");
        try {
            const data = await axios.post(
                BACKEND_URL + "/register",
                {
                    email,
                    password,
                    firstName,
                    lastName,
                },
                {
                    withCredentials: true,
                }
            );
            console.log(`data: `, data);
            dispatch(addUser(data?.data?.data));
            navigate("/profile");
        } catch (error) {
            console.log(`error: `, error);
            setError(error?.response?.data?.message);
        }
    };

    return (
        <div className="flex justify-center items-center my-24">
            <div className="card w-[520px] bg-black card-xl shadow-sm">
                <div className="card-body">
                    <div className="flex flex-row w-full justify-between">
                        <fieldset className="fieldset w-full mr-2">
                            <legend className="fieldset-legend text-secondary">
                                First Name
                            </legend>
                            <input
                                type="text"
                                className="input outline-none"
                                value={firstName}
                                onChange={(event) =>
                                    setFirstName(event.target.value)
                                }
                            />
                        </fieldset>
                        <fieldset className="fieldset w-full ml-2">
                            <legend className="fieldset-legend text-secondary">
                                Last Name
                            </legend>
                            <input
                                type="text"
                                className="input outline-none"
                                value={lastName}
                                onChange={(event) =>
                                    setLastName(event.target.value)
                                }
                            />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-secondary">
                            Email
                        </legend>
                        <input
                            type="text"
                            className="input outline-none w-full"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-secondary">
                            Password
                        </legend>
                        <input
                            type="password"
                            className="input w-full"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                    </fieldset>
                    {error && (
                        <p className="font-semibold text-red-400 py-4">
                            {error}
                        </p>
                    )}
                    <div className="justify-end items-center card-actions my-4">
                        <p className="text-secondary text-sm">
                            Already a user?
                            <span className="text-yellow-400">
                                <Link to="/login"> Login</Link>
                            </span>
                        </p>
                        <button
                            className="btn btn-secondary text-black"
                            onClick={handleRegister}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
