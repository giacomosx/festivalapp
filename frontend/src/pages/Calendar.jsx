import ActsTable from "../components/ActsTable";
import Layout from "../Layout";

const Calendar = () => {
  return (
    <Layout>
      <div className="py-8">
        <ActsTable />
      </div>
    </Layout>
  );
};

export default Calendar;
