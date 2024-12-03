import Widget from "../components/Widget";
import DashboardLayout from "../layouts/DashboardLayout";

const UserDashboard = () => {
  return (
    <DashboardLayout breadCrumb={false}>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 pb-8">
        <Widget name={"My Festivals"} className="h-60">
           
        </Widget>
        <Widget name={"Groups"} buttonLabel={"View"}>
            
        </Widget>
        <Widget name={"Friends"} buttonLabel={"View"}>
           
        </Widget>
      </section>
    </DashboardLayout>
  );
};

export default UserDashboard;
