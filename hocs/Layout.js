"use client"
import FixedBottomNavigation from "@/component/HomePage/BottomNav";
// import Loder from "@/component/HomePage/Loder";
import App from "@/component/HomePage/TopNav";
import { useUser } from "@/hooks/user";
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function Layout({title ,search, children , handleSearchData , auth}){
    const {user , isUserLoading} = useUser();
    useEffect(() => {
        if(!isUserLoading && !user.success){
            redirect('/login');
        }
    } , [user , isUserLoading]);
    
    return (
        <> 
            <header>
                <FixedBottomNavigation user={user?.data}/>
            </header>
            <main>
                {children}
            </main>
            <App search={search} user={user?.data} handleSearchData={handleSearchData}/>
        </>
    )
}