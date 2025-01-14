import Widget from "../components/Widget";
import DashboardLayout from "../layouts/DashboardLayout";
import RequestsList from "../ui/RequestsList";
import EventsList from "../ui/EventsList";
import Button from "../components/Button";
import GroupModal from "../components/GroupModal";
import {useDispatch, useSelector} from "react-redux";
import {modalGroupOpenState, setIsOpenModal} from "../redux/groupModalSlice";
import React, {useCallback} from "react";
import GroupList from "../ui/GroupsList";
import GroupRequestsList from "../ui/GroupRequestsList";
import FriendsList from "../ui/FriendsList";

const UserDashboard = () => {
    const isModalOpen = useSelector(modalGroupOpenState);
    const dispatch = useDispatch();

    const openModal = useCallback(() => {
        dispatch(setIsOpenModal(true));
    })

    return (
        <DashboardLayout breadCrumb={false}>
            {isModalOpen && (
                <GroupModal/>
            )}
            <section className="masonry gap-8">
                <Widget name={"My Festivals"} className="festivals">
                    <EventsList/>
                </Widget>

                <Widget name={"Groups"} buttonLabel={"View"} className="groups">
                    <div className="my-4 border-b border-gray-900 pb-4 w-full">
                        <Button onClick={openModal} className={'w-full'} size={'sm'}>Create a new group <span
                            className={'text-xl'}>+</span></Button>
                    </div>
                    <GroupList/>
                </Widget>

                <Widget name={"Incoming Requests"} bodyClassName=" px-2" className={'requests'}>
                    <div
                        className="flex items-center flex-col justify-between h-full divide-y divide-gray-900 space-y-4">
                        <div className="w-full py-2.5">
                            <h3 className={'mb-4'}>Friendship request:</h3>
                            <RequestsList/>
                        </div>
                        <div className="w-full py-2.5">
                            <h3 className={'mb-4'}>Groups request:</h3>
                            <GroupRequestsList/>
                        </div>
                    </div>
                </Widget>

                <Widget name={'Friends'} className={'friends'}>
                    <FriendsList />
                </Widget>

            </section>
        </DashboardLayout>
    );
};

export default UserDashboard;
