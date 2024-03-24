'use client'
import { useSearch } from "@/hooks/user";
import { useEffect, useState } from "react";

export default function SearchForm({handleSearchData}) {
    const [search , setsearch] = useState("");
    const {data , isLoading} = useSearch(search.length===0 || search);
    useEffect(() => {
      handleSearchData(data);
    }, [isLoading, handleSearchData, data])
    function change(event) {
        setsearch(event.target.value);
    }
    return (
        <div className="searchinput">
            <>
            <input autoComplete="off" value={search} onChange={change} type="text" className="form-control" id="search" aria-describedby="emailHelp" placeholder="Enter Search"/>
            </>
        </div>
    );
}