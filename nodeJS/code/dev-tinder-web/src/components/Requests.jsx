import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { BACKEND_URL } from "../utils/constants";

import { addRequests, removeRequests } from "../store/requestsSlice";

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.request);

    const reviewRequest = async (status, _id) => {
        try {
            await axios.post(
                BACKEND_URL + "/request/review" + "/" + status + "/" + _id,
                {},
                { withCredentials: true }
            );
            dispatch(removeRequests(_id));
        } catch (error) {
            console.log(error);
        }
    };

    const fetchRequests = async () => {
        try {
            const requests = await axios.get(
                BACKEND_URL + "/user/requests/received",
                {
                    withCredentials: true,
                }
            );
            dispatch(addRequests(requests.data.connectionRequests));
            //   console.log(requests.data.connectionRequests);
        } catch (error) {
            console.log(error);
        }
    };

    useState(() => {
        fetchRequests();
    }, []);
    if (!requests) return;
    if (requests.length == 0)
        return (
            <>
                <h1 className="flex justify-center text-2xl my-10 text-yellow-400">
                    No Requests found
                </h1>
            </>
        );

    return (
        <div className=" text-center my-10">
            <h1 className="font-bold text-3xl text-yellow-400 p-4">
                Requests ({requests.length})
            </h1>
            {requests.map((request) => {
                const {
                    _id,
                    firstName,
                    lastName,
                    photoUrl,
                    age,
                    gender,
                    about,
                } = request.fromUserId;

                return (
                    <div
                        key={_id}
                        className="flex justify-start items-center m-2 p-2 rounded-lg bg-base-300 w-2/3 mx-auto"
                    >
                        <div className="w-4/12">
                            <img
                                alt="photo"
                                className="w-48 h-24 rounded-full object-contain"
                                src={photoUrl}
                            />
                            {/* <div></div> */}
                        </div>
                        <div className=" flex justify-between items-center w-8/12">
                            <div className="text-left m-4 p-4 ">
                                <h2 className="font-bold text-xl">
                                    {firstName + " " + lastName}
                                </h2>
                                {age && gender && <p>{age + " " + gender}</p>}
                                <p>{about}</p>
                            </div>
                            <div className="flex">
                                <button
                                    className="btn btn-secondary mx-2"
                                    onClick={() =>
                                        reviewRequest("accepted", request._id)
                                    }
                                >
                                    Accept
                                </button>
                                <button
                                    className="btn btn-primary mx-2"
                                    onClick={() =>
                                        reviewRequest("rejected", request._id)
                                    }
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Requests;
