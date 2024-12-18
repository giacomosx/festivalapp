import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Widget from "../components/Widget";
import Avatar from "../components/Avatar";
import AxiosApi from "../api/axiosApi";
import Spinner from "../components/Spinner";
import DashboardLayout from "../layouts/DashboardLayout";

const UserProfile = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({});
    const api = new AxiosApi()

    const getUser = async () => {
        try {
            const user = await api.get(`user/${id}`);
            setUser(user);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUser()
    }, [id])

    return (
        <DashboardLayout breadCrumb={false} userNavbar={false}>
            <section className="py-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                <Widget>
                    {loading ? (
                        <Spinner/>
                    ) : (
                        <div className="flex flex-col divide-y divide-black space-y-4">
                            <div className="flex gap-8 items-center">
                                <Avatar user={user} path={user._id} size="lg"/>
                                <div className="flex flex-col">
                                    <h2 className={'text-2xl'}>
                                        {user.name || user.username}
                                    </h2>
                                    {user.name && (
                                        <span className={'text-gray-400'}>
                                                {user.username}
                                            </span>
                                    )}
                                    <p className={'text-gray-300 mt-2'}>
                                        {user.bio}
                                    </p>
                                </div>
                            </div>
                            <div className={'pt-4'}>
                                <ul className={'flex justify-around'}>
                                    <li className={'flex flex-col items-center'}>
                                        <h4>Events</h4>
                                        <span className={'text-2xl text-gray-300'}>{user.events.length}</span>
                                    </li>
                                    <li className={'flex flex-col items-center'}>
                                        <h4>Friends</h4>
                                        <span className={'text-2xl text-gray-300'}>{user.friends.length}</span>
                                    </li>
                                    <li className={'flex flex-col items-center'}>
                                        <h4>Pins</h4>
                                        <span className={'text-2xl text-gray-300'}>{user.pinned_acts.length}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </Widget>
            </section>
        </DashboardLayout>
    );
};

export default UserProfile;