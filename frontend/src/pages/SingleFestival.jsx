import React, {useEffect, useState} from 'react';
import Layout from "../Layout";
import Spinner from "../components/Spinner";
import {useSearchParams} from "react-router-dom";
import AxiosApi from "../api/axiosApi";

const SingleFestival = () => {
    const api = new AxiosApi()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [festival, setFestival] = useState({})
    const [searchParam] = useSearchParams();

    console.log(searchParam.get('id'));

    const getFestivalData = async () => {
        try {
            const res = await api.get(`/public/events/${searchParam.get('id')}`);
            setFestival(res)
            console.log(festival)
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getFestivalData()
    }, [searchParam])

    return (
        <Layout background={'white'}>
            {loading && (
                <div className={'flex w-full justify-center items-center h-96 '}>
                    <Spinner color={'black'}/>
                </div>
            )}
            {!loading && error && 'Ops'}
            {!loading && festival && (
                <section className={'pt-12'}>
                    <h3 className={'text-gray-900 text-3xl pb-2.5 border-b mb-8 border-black'}>{festival?.name}</h3>
                    <div className={'flex md:flex-row gap-8'}>
                        <div className={'md:w-1/2'}>
                            <img src="https://picsum.photos/1200/800" alt={`${festival?.name} photo`}
                                 className="w-full h-full object-cover"/>
                        </div>
                        <div className={'space-y-4'}>
                            <p className={'text-gray-700 text-xl italic'}>"{festival?.description}"</p>
                            <p className={'text-gray-900'}>{festival?.location}</p>
                            <p className={'text-gray-900 font-semibold'}>
                                From: <span className={'text-gray-800 font-normal'}>{new Date(festival?.start_date).toLocaleDateString()}</span>
                                &nbsp;
                                to: <span className={'text-gray-800 font-normal'}>{new Date(festival?.end_date).toLocaleDateString()}</span>
                            </p>
                                <p className={'text-gray-900 font-semibold'}>
                                    Organization: <span className={'text-gray-800 font-normal'}>{festival?.owner.name}</span>
                                </p>
                        </div>
                    </div>
                </section>
            )}
        </Layout>
    );
};

export default SingleFestival;