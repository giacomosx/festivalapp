import Widget from "../components/Widget";
import DashboardLayout from "../layouts/DashboardLayout";
import RequestsList from "../ui/RequestsList";
import EventsList from "../ui/EventsList";

const UserDashboard = () => {
  return (
    <DashboardLayout breadCrumb={false}>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 pb-8">
        <Widget name={"My Festivals"} className="h-fit" >
           <EventsList />
        </Widget>
        <Widget name={"Groups"} buttonLabel={"View"} className="h-fit" >
            
        </Widget>
        <Widget name={"Incoming Requests"} bodyClassName="max-h-60 px-2">
           <RequestsList />
        </Widget>
      </section>
    </DashboardLayout>
  );
};

export default UserDashboard;
