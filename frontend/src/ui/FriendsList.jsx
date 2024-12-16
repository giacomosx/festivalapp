import React, {useEffect, useState} from 'react';
import AxiosApi from "../api/axiosApi";
import Spinner from "../components/Spinner";
import Avatar from "../components/Avatar";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import UsersListEl from "../components/UsersListEl";

const FriendsList = () => {
    const api = new AxiosApi()
    const [friends, setFriends] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getFriends = async () => {
        try {
            const responses = await api.get(`/user/me/friends`);
            setFriends(responses.friends)
        } catch (e) {
            console.error(e)
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getFriends()
    }, [])

    return (
        <>
            {loading && <Spinner />}
            {
                friends && (friends.length > 0 ? (
                    <ul className={'flex flex-col w-full divide-y divide-black'}>
                        {
                            friends.map((friend) => (
                                <UsersListEl user={friend} key={friend._id}/>
                            ))
                        }
                    </ul>
                ) : (
                    <p className={'text-gray-400 w-full text-center text-base'}>
                        No friends for now!
                    </p>

                ))
            }
        </>
    );
};

export default FriendsList;