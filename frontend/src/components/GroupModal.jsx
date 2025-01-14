import React, {useCallback, useState} from 'react';
import {useDispatch} from "react-redux";
import {setIsOpenModal} from "../redux/groupModalSlice";
import AxiosApi from "../api/axiosApi";
import Button from "./Button";
import Spinner from "./Spinner";

const GroupModal = () => {
    const api = new AxiosApi()
    const [events, setEvents] = useState([]);
    const [group, setGroup] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const dispatch = useDispatch();

    const closeModal = useCallback(() => {
        dispatch(setIsOpenModal(false));
    })

    const handleChange = (e) => {
        setGroup({
            ...group,
            event: selectedEvent,
            [e.target.name]: e.target.value,
        });
    }

    const onSelectChange = (e) => {
        setSelectedEvent(e.target.value);
    }

    console.log(selectedEvent);
    console.log(group);

    const getEvents = async () => {
        try {
            const responses = await api.get(`/user/me/events`);
            setEvents(responses.events)
        } catch (e) {
            console.error(e)
        }
    }

    const createGroup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await api.post(`/group`, group);
            if (response) {
                setSuccess(true)
            }
        } catch (e) {
            console.error(e)
            setError(e.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="">
            <div id="authentication-modal"
                 className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-900/80`}>
                <div className="relative p-4 w-full max-w-md mx-auto top-1/3 -translate-y-1/2">
                    <div className="relative bg-white rounded-lg shadow ">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900 ">
                                Create a new group
                            </h3>
                            <button type="button"
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                    data-modal-hide="authentication-modal"
                                    onClick={closeModal}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5">
                            {loading && <Spinner />}
                            {error && <span className={'text-red-500'}>{error}</span>}
                            {success && <span className={'text-green-500'}>{"Group successfully created!"}</span>}
                            {!loading && !error && !success && (
                                <form className="space-y-4" onSubmit={createGroup}>
                                    <div>
                                        <label htmlFor="events"
                                               className="block mb-2 text-sm font-medium text-gray-900 ">Select
                                            a Festival</label>
                                        <select id="events"
                                                name={'events'}
                                                onChange={onSelectChange}
                                                required={true}
                                                onClick={getEvents}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 outline-primary    ">
                                            <option>Choose one
                                                of
                                                your
                                                subscribed festivals
                                            </option>
                                            {events && events.length > 0 && events.map(event => (
                                                <option key={event._id} value={event._id}>{event.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="name"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">The
                                            name</label>
                                        <input type="text" id="name"
                                               onChange={handleChange}
                                               name="name"
                                               required
                                               placeholder="Enter a Name"
                                               className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-primary focus:border-primary outline-primary"/>
                                    </div>
                                    <div>
                                        <label htmlFor="description"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe
                                            your group</label>
                                        <textarea id="description" rows="4"
                                                  required
                                                  name="description"
                                                  onChange={handleChange}
                                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary outline-primary      "
                                                  placeholder="Write a description abouth this group..."></textarea>
                                    </div>
                                    <div className="pt-4 flex justify-end">
                                        <Button type={'submit'}>Create group</Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupModal;