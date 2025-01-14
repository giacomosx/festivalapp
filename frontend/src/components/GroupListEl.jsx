import React from 'react';
import Avatar from "./Avatar";
import {Link} from "react-router-dom";
import Button from "./Button";

const GroupListEl = ({group}) => {
    const basePath = `/groups/${group?._id}`;

    return (
        <li className={'py-2.5 '}>
            <div className={'flex gap-8 justify-between items-center'}>
                <div className={'flex items-center gap-4'}>
                    <div>
                        <Link to={basePath} className={'hover:underline'}>{group?.name}</Link>
                        {group?.description && <p className={'text-gray-400 text-sm'}>{group?.description}</p>}
                    </div>
                </div>
               <div>
                   <Button variant={'secondary'}>
                       <Link to={basePath}>View</Link>
                   </Button>
               </div>
            </div>
        </li>
    );
};

export default GroupListEl;