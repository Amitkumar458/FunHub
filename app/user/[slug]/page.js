'use client'
import UserProfile from "@/component/Account/UserAccount";
import Layout from "@/hocs/Layout";
import { UseFind } from "@/hooks/user";

export default function user({ params }) {
    const { data, isLoading } = UseFind(params.slug);
    return (
        <>
            <Layout>
                {isLoading ? <div>Loading</div> :
                    <UserProfile data={data}/>
                }
            </Layout>
        </>
    )
}