import Layout from "../Layout";
import UserNavbar from "../layouts/UserNavbar";
import Widget from "../layouts/Widget";
import { userState } from "../redux/loginSlice";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const user = useSelector(userState)
  
  return (
    <Layout>
      <UserNavbar user={user}/>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Widget name={"My Festivals"} className="h-60">
           
        </Widget>
        <Widget name={"Groups"} buttonLabel={"View"}>
            
        </Widget>
        <Widget name={"Friends"} buttonLabel={"View"}>
           
        </Widget>
      </section>
    </Layout>
  );
};

export default UserDashboard;
