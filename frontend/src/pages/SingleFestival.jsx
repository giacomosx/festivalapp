import React, {useEffect, useState} from 'react';
import Layout from "../Layout";
import Spinner from "../components/Spinner";
import {useParams} from "react-router-dom";
import AxiosApi from "../api/axiosApi";
import Button from "../components/Button";

const SingleFestival = () => {
    const api = new AxiosApi()
    const isLogged = localStorage.getItem("userData") !== null;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [festival, setFestival] = useState({})
    const params = useParams();
    const [alreadySubscribed, setAlreadySubscribed] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false);

    const getFestivalData = async () => {
        try {

            const res = await api.get(`/public/events/slug/${params.slug}`);
            const {participants} = await res
            await setFestival(res)

            if (isLogged) {
                const {_id} = JSON.parse(localStorage.getItem("userData"));
                await setAlreadySubscribed(!!participants?.includes(_id))
            }
            console.log(res)

        } catch (e) {
            console.error(e)
            setError(e.message || 'An error occurred');
        } finally {
            if (festival) {
                setLoading(false)
            }
        }
    }

    const subscribeToEvent = async () => {
        setLoadingButton(true);
        setAlreadySubscribed(true)
        try {
            const res = await api.patch(`/event/subscribe/${festival._id}`);
            if(!res) {
                throw new Error("Patch failed");
            }
        } catch (e) {
            console.error(e.message);
        } finally {
            setLoadingButton(false);
        }
    }

    const unsubscribeToEvent = async () => {
        setLoadingButton(true);
        setAlreadySubscribed(false)
        try {
            const res = await api.patch(`/event/unsubscribe/${festival._id}`);
            if(!res) {
                throw new Error("Patch failed");
            }
        } catch (e) {
            console.error(e.message);
        } finally {
            setLoadingButton(false);
        }
    }

    useEffect(() => {
        getFestivalData()
    }, [params])

    return (
        <Layout background={'white'}>
            {loading && (
                <div className={'flex w-full justify-center items-center h-96 '}>
                    <Spinner color={'black'}/>
                </div>
            )}
            {!loading && error && (
                <section className={'text-center pt-12'}>
                    <span className={'text-red-500'}>{error}</span>
                </section>
            )}
            {!loading && festival && !error && (
                <section className={'pt-12'}>
                    <h3 className={'text-gray-900 text-3xl pb-2.5 border-b mb-8 border-black'}>{festival?.name || null}</h3>
                    <div className={'flex md:flex-row gap-8'}>
                        <div className={'md:w-1/2'}>
                            <img src="https://picsum.photos/1200/800" alt={`${festival?.name || null} photo`}
                                 className="w-full h-full object-cover"/>
                        </div>
                        <div className={'flex flex-col justify-between'}>
                            <div className={'space-y-4'}>
                                <p className={'text-gray-700 text-xl italic'}>"{festival?.description || null}"</p>
                                <div>
                                    <p className={'text-gray-900'}>{festival?.location}</p>
                                    <p className={'text-gray-900 font-semibold'}>
                                        From: <span
                                        className={'text-gray-800 font-normal'}>{new Date(festival?.start_date).toLocaleDateString() || null}</span>
                                        &nbsp;
                                        to: <span
                                        className={'text-gray-800 font-normal'}>{new Date(festival?.end_date).toLocaleDateString() || null}</span>
                                    </p>
                                </div>
                                <p className={'text-gray-900 font-semibold'}>
                                    Organization: <span
                                    className={'text-gray-800 font-normal'}>{festival?.owner?.name || null}</span>
                                </p>
                            </div>
                            {isLogged && (
                                <div className={'mb-4'}>
                                    {alreadySubscribed ? (
                                        <Button onClick={unsubscribeToEvent}>{loadingButton ?
                                            <Spinner color={'black'}/> : 'Unsubscribe'}</Button>
                                    ) : (
                                        <Button onClick={subscribeToEvent}>{loadingButton ?
                                            <Spinner color={'black'}/> : 'Subscribe'}</Button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}
        </Layout>
    );
};

export default SingleFestival;