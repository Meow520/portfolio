import AdminLayout from "@/components/AdminLayout/AdminLayout";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  
  return (
    <AdminLayout>
      <div>Admin Dashboard</div>
    </AdminLayout>
  );
};

export default Dashboard;
