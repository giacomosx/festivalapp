import Widget from "../components/Widget";
import UserDetailsForm from "../ui/UserDetailsForm";
import DashboardLayout from "../layouts/DashboardLayout";

const Settings = () => {
  const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <DashboardLayout breadCrumb={false}>
      <section className={'grid grid-cols-1 gap-8 md:grid-cols-2 pb-8'}>
          <Widget name={"My details"}>
              <UserDetailsForm user={user}/>
          </Widget>
         <div className={'flex flex-col gap-8 w-full'}>
             <Widget name={"Change Avatar"} className={'h-fit'}>

             </Widget>
             <Widget name={"Change Password"} className={'h-fit'}>

             </Widget>
         </div>
      </section>
    </DashboardLayout>
  );
};

export default Settings;
