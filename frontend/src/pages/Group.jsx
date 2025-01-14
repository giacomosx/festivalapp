import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Widget from "../components/Widget";
import Avatar from "../components/Avatar";
import AxiosApi from "../api/axiosApi";
import Spinner from "../components/Spinner";
import DashboardLayout from "../layouts/DashboardLayout";
import RequestTabs from "../ui/RequestTabs";
import {setIsOpenModal} from "../redux/groupModalSlice";

const UserProfile = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [group, setGroup] = useState({});
    const [date, setDate] = useState(new Date());
    const api = new AxiosApi()

    const getGroup = async () => {
        try {
            const response = await api.get(`/group/${id}`);
            const date = new Date(response.event.start_date);
            setDate({
                month: date.toLocaleDateString("en-US", {month: "short"}),
                day: date.toLocaleDateString("en-US", {day: "2-digit"})
            })
            setGroup(response);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getGroup()
    }, [id])

    return (
        <DashboardLayout breadCrumb={false} userNavbar={false}>
            {loading ? (
                <div className="w-full h-screen flex justify-center items-center">
                    <Spinner/>
                </div>
            ) : (
                <section className="py-8 flex flex-col gap-8">
                    <div className={'grid grid-cols-1 md:grid-cols-2 gap-8'}>
                        <Widget>
                            <div className="flex flex-col divide-y divide-black space-y-4">
                                <div className="flex gap-8 items-center">
                                    <div className="flex flex-col">
                                        <h2 className={'text-2xl'}>
                                            {group.name}
                                        </h2>
                                        <p className={'text-gray-300 mt-2'}>
                                            {group.description}
                                        </p>
                                    </div>
                                </div>
                                <div className={'pt-4'}>
                                    <ul className={'flex '}>
                                        <li className={'flex items-center flex-col gap-2.5'}>
                                            <span>Members: </span>
                                            <ul className={'flex items-center -space-x-5'}>
                                                {group.members.map((member) => (
                                                    <li key={member._id}>
                                                        <Avatar user={member} size={'xs'}/>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Widget>
                        <Widget className={'h-fit'} bodyClassName={'flex items-center flex-col gap-4'}>
                            <div className="flex flex-col justify-between items-center w-fit rounded-lg overflow-hidden">
                                <span className={'bg-red-700 font-semibold text-xl w-full px-4 text-center'}>{date?.month}</span>
                                <span className={'bg-white text-black text-5xl font-semibold px-4 h-14 flex items-center'}>{date?.day}</span>
                            </div>
                            <div className={'text-center space-y-2'}>
                                <h3 className={'text-lg'}>{group.event.name}</h3>
                                <p className={'text-gray-400'}>{group.event.description}</p>
                                <p className={'text-gray-200 text-sm flex items-center justify-center gap-3'}>
                                    <svg className="w-4 h-4 " aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path fillRule="evenodd"
                                              d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                                              clipRule="evenodd"/>
                                    </svg>

                                    {group.event.location}</p>
                            </div>
                        </Widget>
                    </div>
                    <div className={'grid md:grid-cols-2 gap-8'}>
                        <Widget name={'Add member'}>
                            <RequestTabs/>
                        </Widget>
                    </div>
                </section>
            )}
        </DashboardLayout>
    );
};

export default UserProfile;