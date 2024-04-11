
import UserPost from "@/component/HomePage/UserPost";
import Layout from "@/hocs/Layout";

export default function Home() {
  return (
    <>
      <Layout loginRequired={true}>
        <UserPost/>
      </Layout>
    </>
  )
}
