import AdminHeader from "./AdminHeader";
import Footer from "../Layout/Footer";
import { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const AdminLayout: FC<Props> = (props) => {
  const router = useRouter();
  const { children } = props;
  const currentPath = router.pathname;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div className="bg-gray-50 dark:bg-gray-800 font-work-sans">
          <AdminHeader currentPath={currentPath} />
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
