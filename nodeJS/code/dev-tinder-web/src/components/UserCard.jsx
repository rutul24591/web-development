import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BACKEND_URL } from "../utils/constants";
import { removeUserFromFeed } from "../store/feedSlice";

const UserCard = ({ user }) => {
    console.log(user);
    const dispatch = useDispatch();
    const { _id, firstName, lastName, age, gender, about, photoUrl, skills } =
        user;

    const handleSendRequest = async (status, userId) => {
        console.log(`INSIDE Handle Send Request`);
        try {
            const res = await axios.post(
                BACKEND_URL + "/request/send/" + status + "/" + userId,
                {},
                {
                    withCredentials: true,
                }
            );
            dispatch(removeUserFromFeed(userId));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="card bg-base-300 w-96 shadow-sm">
                <figure>
                    <img
                        className="w-full h-96 max-h-96 object-contain"
                        src={photoUrl}
                        alt="user-photo"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstName + " " + lastName}</h2>
                    <p>{age + ", " + gender}</p>
                    <p>{about}</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                handleSendRequest("ignored", _id);
                            }}
                        >
                            Ignore
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                handleSendRequest("interested", _id);
                            }}
                        >
                            Interested
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
