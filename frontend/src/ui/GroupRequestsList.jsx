import React, {useEffect, useState} from 'react';
import AxiosApi from "../api/axiosApi";
import Spinner from "../components/Spinner";
import Avatar from "../components/Avatar";
import {Link} from "react-router-dom";
import Button from "../components/Button";

const GroupRequestsList = () => {
    const api = new AxiosApi()
    const [requests, setRequests] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getRequests = async () => {
        try {
            const requests = await api.get(`group-request/received`);
            console.log(requests)
            setRequests(requests)
        } catch (e) {
            console.error(e)
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    const acceptRequest = async (id) => {
        try {
            const response = await api.patch(`group-request/response-request/${id}`, {
                response : 'accepted'
            });
            setRequests(requests.filter((r) => r._id !== id))
        } catch (e) {
            console.error(e)
            setError(e);
        }
    }

    const declineRequest = async (id) => {
        try {
            const response = await api.patch(`group-request/response-request/${id}`, {
                response : 'rejected'
            });
            setRequests(requests.filter((r) => r._id !== id))
        } catch (e) {
            console.error(e)
            setError(e);
        }
    }

    useEffect(() => {
        getRequests()
    }, [])

    return (
        <>
            {loading && <Spinner />}
            {
                requests && (requests.length > 0 ? (
                    <ul className={'flex flex-col w-full divide-y divide-black'}>
                        {
                            requests.map((request) => (
                                <li className={'py-4 '} key={request._id}>
                                    <div className={'flex items-center gap-4 justify-between md:flex-row'}>
                                        <div className={'flex items-center gap-2 '}>
                                            <Avatar user={request?.sender} path={`/community/profile/${request.sender._id}`} size={'xs'}/>
                                            <div>
                                                <Link to={`/community/profile/${request.sender._id}`} className={'hover:underline'}>{request.sender.username}</Link>
                                                {request.sender.name && <p className={'text-gray-400 text-sm'}>{request.sender.name}</p>}
                                            </div>
                                        </div>
                                        <div className={'flex items-center gap-2 '}>
                                            <Button size={'xs'} onClick={() => acceptRequest(request._id)}>
                                                Accept
                                            </Button>
                                            <Button variant={'secondary'} size={'xs'} onClick={() => declineRequest(request._id)}>
                                                Decline
                                            </Button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <p className={'text-gray-400 w-full text-center text-base'}>
                        No requests for now!
                    </p>

                ))
            }
        </>
    );
};

export default GroupRequestsList;