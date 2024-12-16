import React, {useState} from 'react';

const RequestTabs = () => {
    const [tab, setTab] = useState(null);
    const baseButtonStyle = "inline-block p-4 border-b-2 rounded-t-lg "

    const handleTabChange = (e) => {
        setTab(e.target.dataset.tabsTarget);
    }

    return (
        <div>
            <div className="mb-4 border-b border-gray-900 ">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center " role="tablist">
                    <li className="me-2" role="presentation">
                        <button onClick={handleTabChange}
                                className={`${baseButtonStyle} ${tab === 'pending' ? 'text-primary border-primary' : 'hover:text-text-gray-400 hover:border-gray-400 border-transparent'}`}
                                data-tabs-target="pending" type="button" role="tab" aria-controls="pending"
                                aria-selected="true">Pending
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button onClick={handleTabChange}
                                className={`${baseButtonStyle} ${tab === 'accepted' ? 'text-primary border-primary' : 'hover:text-text-gray-400 hover:border-gray-400 border-transparent'}`}
                                data-tabs-target="accepted" type="button" role="tab" aria-controls="accepted"
                                aria-selected="true">Accepted
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
                <div className={`${tab !== 'pending' && 'hidden'}`} role="tabpanel"
                     aria-labelledby="pending-tab">
                    <p className="text-sm text-gray-400">This is some placeholder content the <strong
                        className="font-medium text-gray-50">Profile tab's associated content</strong>.
                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript
                        swaps classes to control the content visibility and styling.</p>
                </div>
                <div className={`${tab !== 'accepted' && 'hidden'}`} role="tabpanel"
                     aria-labelledby="accepted-tab">
                    <p className="text-sm text-gray-400">This is some placeholder content the <strong
                        className="font-medium text-gray-50 ">Dashboard tab's associated
                        content</strong>. Clicking another tab will toggle the visibility of this one for the next. The
                        tab JavaScript swaps classes to control the content visibility and styling.</p>
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