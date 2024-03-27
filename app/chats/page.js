import AllChatPage from "@/component/Chats/AllChatPage";
import Layout from "@/hocs/Layout";

export default function Chats() {
    return (
        <Layout chat={true}>
            <AllChatPage/>
        </Layout>
    )
}