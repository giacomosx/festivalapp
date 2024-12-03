import React from 'react';
import Avatar from "./Avatar";
import {Link} from "react-router-dom";
import Button from "./Button";

const UsersListEl = ({user}) => {
    const basePath = `/community/profile/${user._id}`;

    return (
        <li className={'py-2.5 '}>
            <div className={'flex items-center gap-4 justify-between'}>
                <div className={'flex items-center gap-4'}>
                    <Avatar user={user} path={basePath} size={'xs'}/>
                    <div>
                        <Link to={basePath} className={'hover:underline'}>{user.username}</Link>
                        {user.name && <p className={'text-gray-400 text-sm'}>{user.name}</p>}
                    </div>
                </div>
                <Button variant={'secondary'}>
                    <Link to={basePath}>View</Link>
                </Button>
            </div>
        </li>
    );
};

export default UsersListEl;