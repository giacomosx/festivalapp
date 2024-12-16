import React from 'react';
import {Link} from "react-router-dom";

const FestivalCard = ({item}) => {
    return (
        <div
            className="max-w-sm  border border-gray-200 rounded-lg shadow bg-black  flex flex-col">
            <Link to="#" className={'block h-48'}>
                <img className="rounded-t-lg w-full h-full object-cover" src="https://picsum.photos/1200/800" alt=""/>
            </Link>
            <div className="p-5 flex-1">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
            </div>
            <div className={'px-5 pb-5'}>
                <Link to="#"
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>

    );
};

export default FestivalCard;