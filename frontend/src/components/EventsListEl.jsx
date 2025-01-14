import React from 'react';
import Avatar from "./Avatar";
import {Link} from "react-router-dom";
import Button from "./Button";

const EventsListEl = ({event}) => {
    const basePath = `/festivals/${event.slug}`;

    return (
        <li className={'py-2.5 '}>
            <div className={'flex items-center gap-4 justify-between'}>
                <div className={'flex items-center gap-4 '}>
                    <div>
                        <Link to={basePath} className={'hover:underline'}>{event.name}</Link>
                        {/*{event.name && <p className={'text-gray-400 text-sm'}>{event.name}</p>}*/}
                    </div>
                </div>
                <Button variant={'secondary'}>
                    <Link to={basePath}>View</Link>
                </Button>
            </div>
        </li>
    );
};

export default EventsListEl;