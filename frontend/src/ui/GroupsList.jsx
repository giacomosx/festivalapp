import React, {useEffect, useState} from 'react';
import AxiosApi from "../api/axiosApi";
import Spinner from "../components/Spinner";
import GroupListEl from "../components/GroupListEl";

const GroupList = () => {
    const api = new AxiosApi()
    const [groups, setGroups] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getGroups = async () => {
        try {
            const responses = await api.get(`/group?user=me`);
            setGroups(responses)
            console.log(groups)
        } catch (e) {
            console.error(e)
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getGroups()
    }, [])

    return (
        <>
            {loading && <Spinner/>}
            {
                groups && (groups.length > 0 ? (
                    <ul className={'flex flex-col w-full divide-y divide-black'}>
                        {
                            groups.map((group) => (
                                <GroupListEl key={group._id} group={group}/>
                            ))
                        }
                    </ul>
                ) : (
                    <p className={'text-gray-400 w-full text-center text-base'}>
                        No groups for now!
                    </p>

                ))
            }
        </>
    );
};

export default GroupList;