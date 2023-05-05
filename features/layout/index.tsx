import Head from "next/head";
import Header from "../header";
import { ReactNode } from "react";
import Footer from "../footer";

interface LayoutTypes {
  pageName: string;
  pageDescripiton: string;
  withHeader: boolean;
  withFooter: boolean;
  children: ReactNode;
}
const Layout = ({
  pageName,
  pageDescripiton,
  withHeader,
  withFooter,
  children,
}: LayoutTypes) => {
  return (
    <>
      <Head>
        <title>{pageName}</title>
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta
          key="meta_description"
          name="description"
          content={pageDescripiton}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0"
        />
      </Head>
      {withHeader && <Header />}
      <main>{children}</main>
      {withFooter && <Footer />}
    </>
  );
};

export default Layout;
