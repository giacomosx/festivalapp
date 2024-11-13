import Label from "../components/Label";
import Input from "../components/Input";
import AxiosApi from "../api/axiosApi";
import { useEffect, useState} from "react";
import Button from "../components/Button";
import Spinner from "../components/Spinner";

const UserDetailsForm = () => {
    const api = new AxiosApi();
    const [defaultValue, setDefaultValue] = useState(null);
    const [editValue, setEditValue] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [disabled, setDisabled] = useState(true);

    const getUser = async () => {
        try {
            const response = await api.get('/user/me')
            await setDefaultValue(response)
        } catch (e) {
            console.log(e)
            setError(e)
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const editUser = await api.patch('/user/me/edit', editValue);
            await getUser()
        } catch (e) {
            console.log(e);
            setError(e);
        } finally {
            setLoading(false);
            setDisabled(true)
        }
    }

    const handleDisabled = () => {
        setDisabled(!disabled)
    }

    const handleChange = (e) => {
        setEditValue({
            ...editValue,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <form className="grid grid-cols-1 gap-4 pt-2 " onSubmit={handleSubmit}>
            {loading && <Spinner />}
            {!loading && !error && (
                <>
                    <div>
                        <Label>Username</Label>
                        <Input
                            type={'text'}
                            placeholder="Insert your username"
                            name="username"
                            disabled={disabled}
                            onChange={handleChange}
                            defaultValue={defaultValue.username}
                        />
                    </div>
                    <div>
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            placeholder={"Insert your name"}
                            name={'name'}
                            disabled={disabled}
                            onChange={handleChange}
                            defaultValue={defaultValue.name}
                        />
                    </div>
                    <div>
                        <Label>Phone</Label>
                        <Input
                            type={"phone"}
                            placeholder={'Insert your phone number'}
                            name={'phone_number'}
                            disabled={disabled}
                            onChange={handleChange}
                            defaultValue={defaultValue.phone_number}
                        />
                    </div>
                    <div>
                        <Label>Location</Label>
                        <Input
                            type={'text'}
                            placeholder={'Insert your location'}
                            name={'location'}
                            disabled={disabled}
                            onChange={handleChange}
                            defaultValue={defaultValue.location}
                        />
                    </div>
                    <div>
                        <Label>Bio</Label>
                        <textarea
                            id="bio"
                            rows="4"
                            name="bio"
                            placeholder="Write your thoughts here..."
                            className="disabled:opacity-50 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary "
                            disabled={disabled}
                            onChange={handleChange}
                            defaultValue={defaultValue.bio}
                        ></textarea>
                    </div>
                    <div className="mt-4 flex justify-between ">
                        <Button className="disabled:opacity-50" type={'submit'} disabled={disabled}>Save</Button>
                        <Button type={'button'} onClick={handleDisabled} variant="secondary">{disabled ? 'Edit' : 'Cancel'}</Button>
                    </div>
                </>
            )}
            {!loading && error && (
                <span className="text-red-500 border p-2 px-4 text-sm rounded border-red-500 w-fit">
                {error}
              </span>
            )}
        </form>
    );
};

export default UserDetailsForm;
