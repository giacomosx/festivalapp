import React, {useState} from 'react';
import Layout from "../Layout";
import UserNavbar from "../ui/UserNavbar";
import Widget from "../components/Widget";
import Input from "../components/Input";
import Button from "../components/Button";
import AxiosApi from "../api/axiosApi";
import Spinner from "../components/Spinner";

const Users = () => {
    const user = JSON.parse(localStorage.getItem("userData"));
    const [query, setQuery] = useState("");
    const [usersList, setUsersList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const api = new AxiosApi()

    const handleChange = (e) => {
        setQuery(e.target.value);
        setUsersList([])
    }

    const getUsers = async () => {
        setLoading(true);
        try {
            const users = await api.get('/user/search?username=' + query);
            if (!users) return [];
            setUsersList(users);
        } catch (e) {
            console.log(e);
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }


    return (
        <Layout>
            <UserNavbar user={user} />
            <section className={'grid md:grid-cols-2 gap-8'}>
                <Widget name={"Find a user"} className="h-fit" bodyClassName={'flex gap-4 flex-col'}>
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
                    usersList.length > 0 && (
                        <Widget bodyClassName={'flex gap-4'} className={'h-fit'}>
                            <ul className={'flex flex-col w-full divide-y divide-black'}>
                                {
                                    usersList.map((user) => (
                                        <li key={user.id} className={'py-2.5'}>
                                            <div className={'flex items-center gap-4 '}>
                                                <span
                                                    className={'text-black bg-primary hover:bg-primaryHover focus:ring-4 focus:ring-primary text-lg rounded-full px-4 py-2 transition-all'}>{user.username[0].toLocaleUpperCase()} </span>
                                                <span>{user.username}</span>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Widget>
                    )
                }
            </section>

        </Layout>
    );
};

export default Users;