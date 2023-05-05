import Homepage from "@/features/homepage";
import Layout from "@/features/layout";

export default function Home() {
  return (
    <Layout
      pageName={"Home"}
      pageDescripiton={"homepage"}
      withHeader={true}
      withFooter={true}
    >
      <Homepage />
    </Layout>
  );
}
