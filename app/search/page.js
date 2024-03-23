'use client'
import Layout from "@/hocs/Layout";
import { useState } from "react";


export default function Search() {
    const [data , setdata] = useState();
    const handleSearchData = (searchData) => {
        setdata(searchData);
    }
    return (
        <Layout search={true} handleSearchData={handleSearchData}>
            <div>{data ? <div>
                {data.data.map((value) => {
                    return (
                        <div key={value.id}>{value.name}</div>
                    )
                })}
            </div> : "loading"}</div>
        </Layout>
    )
}