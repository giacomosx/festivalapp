import React, {useState} from 'react';
import Widget from "../components/Widget";
import Input from "../components/Input";
import Button from "../components/Button";
import AxiosApi from "../api/axiosApi";
import Spinner from "../components/Spinner";
import UsersListEl from "../components/UsersListEl";
import DashboardLayout from "../layouts/DashboardLayout";

const Users = () => {
    const [query, setQuery] = useState("");
    const [usersList, setUsersList] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const api = new AxiosApi()

    const handleChange = (e) => {
        setQuery(e.target.value);
        setUsersList(null)
    }

    const getUsers = async () => {
        setLoading(true);
        try {
            const users = await api.get('/user/search?username=' + query);
            if (!users) return [];
            setUsersList(users);
            console.log(users);
        } catch (e) {
            console.log(e);
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }


    return (
        <DashboardLayout breadCrumb={false}>
            <section className={'grid md:grid-cols-2 gap-8'}>
                <Widget name={"Find a user"} className="h-fit" bodyClassName={'flex gap-4 flex-col md:flex-row'}>
                    <Input type={'search'} placeholder={'Type an username...'} onChange={handleChange} required/>
                    <Button onClick={getUsers}>
                        Search
                    </Button>
                </Widget>
                    {
                        loading && (
                            <div className={'w-full'}>
                                <Spinner />
                            </div>
                        )
                    }
                {
                    usersList && (usersList.length > 0 ? (
                        <Widget bodyClassName={'flex gap-4'} className={'h-fit'} name={'results'}>
                            <ul className={'flex flex-col w-full divide-y divide-black'}>
                                {
                                    usersList.map((user) => (
                                        <UsersListEl user={user} key={user._id} />
                                    ))
                                }
                            </ul>
                        </Widget>
                    ) : (
                        <Widget bodyClassName={'flex gap-4'} className={'h-fit'} name={'results'}>
                            <p className={'text-gray-400 w-full text-center text-lg'}>
                                No users found!
                            </p>
                        </Widget>
                    ))
                }
            </section>

        </DashboardLayout>
    );
};

export default Users;