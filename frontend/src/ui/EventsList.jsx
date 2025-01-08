import React, {useEffect, useState} from 'react';
import AxiosApi from "../api/axiosApi";
import Spinner from "../components/Spinner";
import Avatar from "../components/Avatar";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import UsersListEl from "../components/UsersListEl";
import EventsListEl from "../components/EventsListEl";

const EventsList = () => {
    const api = new AxiosApi()
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getFriends = async () => {
        try {
            const responses = await api.get(`/user/me/events`);
            setEvents(responses.events)
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
                events && (events.length > 0 ? (
                    <ul className={'flex flex-col w-full divide-y divide-black'}>
                        {
                            events.map((event) => (
                                <EventsListEl key={event._id} event={event} />
                            ))
                        }
                    </ul>
                ) : (
                    <p className={'text-gray-400 w-full text-center text-base'}>
                        No events for now!
                    </p>

                ))
            }
        </>
    );
};

export default EventsList;