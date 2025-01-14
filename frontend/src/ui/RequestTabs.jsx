import React, {useEffect, useState} from 'react';
import AxiosApi from "../api/axiosApi";
import Avatar from "../components/Avatar";
import {Link} from "react-router-dom";

const RequestTabs = () => {
    const api = new AxiosApi()
    const [tab, setTab] = useState('invite');
    const baseButtonStyle = "inline-block p-4 border-b-2 rounded-t-lg "
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    const getRequests = async () => {
        try {
            const response = await api.get(`group-request/sent`);
            console.log(response)
            setRequests(response);
        } catch (e) {
            console.error(e)
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    const handleTabChange = (e) => {
        setTab(e.target.dataset.tabsTarget);
    }

    useEffect(() => {
        getRequests();
    }, []);

    return (
        <div>
            <div className="mb-4 border-b border-gray-900 ">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center " role="tablist">
                    <li className="me-2" role="presentation">
                        <button onClick={handleTabChange}
                                className={`${baseButtonStyle} ${tab === 'invite' ? 'text-primary border-primary' : 'hover:text-text-gray-400 hover:border-gray-400 border-transparent'}`}
                                data-tabs-target="invite" type="button" role="tab" aria-controls="invite"
                                aria-selected="true">Invite member
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button onClick={handleTabChange}
                                className={`${baseButtonStyle} ${tab === 'pending' ? 'text-primary border-primary' : 'hover:text-text-gray-400 hover:border-gray-400 border-transparent'}`}
                                data-tabs-target="pending" type="button" role="tab" aria-controls="pending"
                                aria-selected="true">Pending requests
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button onClick={handleTabChange}
                                className={`${baseButtonStyle} ${tab === 'rejected' ? 'text-primary border-primary' : 'hover:text-text-gray-400 hover:border-gray-400 border-transparent'}`}
                                data-tabs-target="rejected" type="button" role="tab"
                                aria-controls="rejected" aria-selected="false">Rejected
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <div className={`${tab !== 'invite' && 'hidden'}`} role="tabpanel"
                     aria-labelledby="invite-tab">

                </div>
                <div className={`${tab !== 'pending' && 'hidden'}`} role="tabpanel"
                     aria-labelledby="pending-tab">
                    <ul>
                        {
                            requests.map((request) => (
                                <li className={'py-4 '} key={request._id}>
                                    <div className={'flex items-center gap-4 justify-between md:flex-row'}>
                                        <div className={'flex items-center gap-2 '}>
                                            <Avatar user={request?.recipient} path={'/'} size={'xs'}/>
                                            <div>
                                                <Link to={`/profile/${request?.recipient._id}`} className={'hover:underline'}>{request.recipient.username}</Link>
                                                {request.recipient.name && <p className={'text-gray-400 text-sm'}>{request.recipient.name}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={`${tab !== 'rejected' && 'hidden'}`} role="tabpanel"
                     aria-labelledby="rejected-tab">
                    <p className="text-sm text-gray-400">This is some placeholder content the Dashboard tab's associated
                        content. Clicking another tab will toggle the visibility of this one for the next. The
                        tab JavaScript <strong className="font-medium text-gray-50 ">swaps classes to control the
                            content</strong> visibility and styling.</p>
                </div>
            </div>
        </div>
    );
};

export default RequestTabs;