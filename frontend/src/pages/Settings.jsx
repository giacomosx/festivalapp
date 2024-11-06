import Layout from "../Layout";
import UserNavbar from "../ui/UserNavbar";
import Widget from "../layouts/Widget";
import { userState } from "../redux/loginSlice";
import { useSelector } from "react-redux";
import UserDetailsForm from "../ui/UserDetailsForm";

const Settings = () => {
  const user = useSelector(userState);

  return (
    <Layout>
      <UserNavbar user={user} />
      <Widget name={"My details"}>
        <UserDetailsForm />
      </Widget>
    </Layout>
  );
};

export default Settings;
