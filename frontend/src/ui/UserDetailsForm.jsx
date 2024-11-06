import Label from "../components/Label";
import Input from "../components/Input";
import AxiosApi from "../api/axiosApi";
import { useState } from "react";
import Button from "../components/Button";

const UserDetailsForm = () => {
  const api = new AxiosApi();

  const [disabled, setDisabled] = useState(true);

  const handleDisabled = () => {
    setDisabled(!disabled)
  }

  return (
    <form className="grid grid-cols-1 gap-4 pt-2">
      <div>
        <Label>Username</Label>
        <Input
          placeholder={"giacomosx"}
          className={"disabled:opacity-50"}
          disabled={disabled}
        />
      </div>
      <div>
        <Label>Nome</Label>
        <Input
          placeholder={"Giacomo"}
          className={"disabled:opacity-50"}
          disabled={disabled}
        />
      </div>
      <div>
        <Label>Phone</Label>
        <Input
          type={"phone"}
          className={"disabled:opacity-50"}
          placeholder={'+39 351 3027045'}
          disabled={disabled}
        />
      </div>
      <div>
        <Label>Location</Label>
        <Input
          type={"text"}
          className={"disabled:opacity-50"}
          placeholder={'Cagliari'}
          disabled={disabled}
        />
      </div>
      <div>
        <Label>Bio</Label>
        <textarea
          id="message"
          rows="4"
          className="disabled:opacity-50 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary "
          placeholder="Write your thoughts here..."
          disabled={disabled}
        ></textarea>
      </div>
      <div className="mt-4 flex justify-between">
        <Button className="disabled:opacity-50" type={'button'} disabled={disabled}>Save</Button>
        <Button type={'button'} onClick={handleDisabled} variant="secondary">Edit</Button>
      </div>
    </form>
  );
};

export default UserDetailsForm;
