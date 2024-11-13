import Layout from "../Layout";
import UserNavbar from "../ui/UserNavbar";
import Widget from "../components/Widget";
import { userState } from "../redux/loginSlice";
import { useSelector } from "react-redux";
import UserDetailsForm from "../ui/UserDetailsForm";

const Settings = () => {
  const user = useSelector(userState);

  return (
    <Layout>
      <UserNavbar user={user} />
      <section className={'flex flex-col md:flex-row justify-between gap-8 pb-8'}>
          <Widget name={"My details"}>
              <UserDetailsForm />
          </Widget>
         <div className={'flex flex-col gap-8 w-full'}>
             <Widget name={"Change Avatar"} className={'h-fit'}>

             </Widget>
             <Widget name={"Change Password"} className={'h-fit'}>

             </Widget>

         </div>
      </section>
    </Layout>
  );
};

export default Settings;
