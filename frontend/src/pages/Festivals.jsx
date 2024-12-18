import React, {useEffect} from 'react';
import Layout from "../Layout";
import {useDispatch, useSelector} from "react-redux";
import {errorFestivalsData, festivalsData, loadingFestivalsData} from "../redux/festivalSlice";
import Spinner from "../components/Spinner";
import {getAllFestivals} from "../redux/actions/festivalsAction";
import FestivalCard from "../components/FestivalCard";

const Festivals = () => {
    const loading = useSelector(loadingFestivalsData)
    const error = useSelector(errorFestivalsData)
    const festivals = useSelector(festivalsData)
    const dispatch = useDispatch();

    useEffect(() => {
        if (festivals.length === 0) {
            dispatch(getAllFestivals())
        }
    }, [dispatch])

    return (
        <Layout background={'white'} >
            {loading && (
                <div className={'flex w-full justify-center items-center h-96 '}>
                    <Spinner color={'black'}/>
                </div>
            )}
            {!loading && error && 'Ops'}
            {!loading && festivals && (
                <section className={'pt-12'}>
                    <h3 className={'text-gray-900 text-3xl pb-2.5 border-b mb-8 border-black'}>All Festivals</h3>
                    <div className={'grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}>
                        {festivals.map((festival) => <FestivalCard item={festival} key={festival._id}/>)}
                    </div>
                </section>
            )}
        </Layout>
    );
};

export default Festivals;