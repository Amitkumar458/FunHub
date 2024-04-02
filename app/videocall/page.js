import Layout from "@/hocs/Layout";

export default function user({ params }) {
    return (
        <>
            <Layout col={2}>
                <div className="centerdiv">
                    <div>This page is Not Created Yet</div>
                    <div>Want to Contribute ? <a href="https://wa.me/+919693773135&text=Hello%2C%20Amit!">Contact Us</a></div>
                </div>
            </Layout>
        </>
    )
}