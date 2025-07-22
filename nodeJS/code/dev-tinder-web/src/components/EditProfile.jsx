import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import UserCard from "./UserCard";
import { BACKEND_URL } from "../utils/constants";
import { addUser } from "../store/userSlice";

const EditProfile = ({ user }) => {
    const [firstName, setFirstname] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [photoUrl, setPhotoURL] = useState(user.photoUrl);
    const [age, setAge] = useState(user.age || "");
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [skills, setSkills] = useState(user.skills || []);
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();

    const saveProfile = async () => {
        //clearing the errors
        setError("");
        try {
            const res = await axios.put(
                BACKEND_URL + "/profile/edit",
                {
                    firstName,
                    lastName,
                    photoUrl,
                    age,
                    gender,
                    about,
                    skills,
                },
                {
                    withCredentials: true,
                }
            );
            dispatch(addUser(res.data.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        } catch (error) {
            console.log(`error`, error);
            setError(error?.response?.data);
        }
    };

    return (
        <>
            <div className="flex justify-center  my-10 max ">
                <div className="flex justify-center mx-10 ">
                    <div className="card bg-base-300 w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title justify-start text-yellow-400">
                                Edit Profile
                            </h2>
                            <div>
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
                                <div className="flex flex-row w-full justify-between">
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend text-secondary">
                                            Age
                                        </legend>
                                        <input
                                            type="text"
                                            className="input outline-none w-full"
                                            value={age}
                                            onChange={(event) =>
                                                setAge(event.target.value)
                                            }
                                        />
                                    </fieldset>
                                    <fieldset className="fieldset w-full ml-4">
                                        <legend className="fieldset-legend text-secondary">
                                            Gender
                                        </legend>
                                        <input
                                            type="text"
                                            className="input outline-none w-full"
                                            value={gender}
                                            onChange={(event) =>
                                                setGender(event.target.value)
                                            }
                                        />
                                    </fieldset>
                                </div>

                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend text-secondary">
                                        Photo Url
                                    </legend>
                                    <input
                                        type="text"
                                        className="input outline-none w-full"
                                        value={photoUrl}
                                        onChange={(event) =>
                                            setPhotoURL(event.target.value)
                                        }
                                    />
                                </fieldset>

                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend text-secondary">
                                        Skills
                                    </legend>
                                    <input
                                        type="text"
                                        className="input outline-none w-full"
                                        value={skills}
                                        onChange={(event) =>
                                            setSkills(event.target.value)
                                        }
                                    />
                                </fieldset>

                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend text-secondary">
                                        About
                                    </legend>
                                    <textarea
                                        type="text"
                                        value={about}
                                        className="textarea"
                                        onChange={(e) =>
                                            setAbout(e.target.value)
                                        }
                                        placeholder="Bio"
                                    ></textarea>
                                </fieldset>
                            </div>
                            <p className="text-red-500 text-start">{error}</p>
                            <div className="card-actions justify-start mt-2">
                                <button
                                    className="btn bg-base-300 text-yellow-400 text-lg"
                                    onClick={saveProfile}
                                >
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <UserCard
                    user={{
                        firstName,
                        lastName,
                        photoUrl,
                        about,
                        age,
                        gender,
                        skills,
                    }}
                />
            </div>
            {showToast && (
                <div className="toast toast-top toast-center pt-20 ">
                    <div className="alert alert-success">
                        <span>Profile saved successfully</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditProfile;
