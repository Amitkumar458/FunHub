import AllChatPage from "@/component/Chats/AllChatPage";
import Layout from "@/hocs/Layout";

export default function Chats() {
    return (
        <Layout col={3} chat={true} loginRequired={true}>
            <AllChatPage/>
        </Layout>
    )
}