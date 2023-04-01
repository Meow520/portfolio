import React from "react";
import NewPostEdit from "@/components/Admin/News/NewPostEdit";
import AdminLayout from "@/components/Admin/Layout/AdminLayout";

const Newpost = () => {
  return (
    <AdminLayout>
      <div className="text-2xl text-center font-semibold">New Post</div>
      <div>
        <NewPostEdit />
      </div>
    </AdminLayout>
  );
};

export default Newpost;
