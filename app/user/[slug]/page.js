'use client'
import AccountPosts from "@/component/Account/AccountPosts";
import UserProfile from "@/component/Account/UserAccount";
import Layout from "@/hocs/Layout";
import { UseFind } from "@/hooks/user";
export default function user({ params }) {
    const { data, isLoading } = UseFind(params.slug);
    return (
        <>
            <Layout col={4} loginRequired={true}>
                {isLoading ? <div className="centerdiv">Loading...</div> : 
                    <UserProfile data={data}/>
                }
                {!isLoading && data.success && <AccountPosts id={data.data.id}/>}
            </Layout>
        </>
    )
}
