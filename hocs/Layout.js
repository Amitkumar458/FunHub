"use client"
import FixedBottomNavigation from "@/component/HomePage/BottomNav";
// import Loder from "@/component/HomePage/Loder";
import App from "@/component/HomePage/TopNav";
import { useUser } from "@/hooks/user";
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function Layout({title , create , col , inputbox , username ,search, children , handleSearchData , chat , auth}){
    const {user , isUserLoading} = useUser();
    useEffect(() => {
        if(!isUserLoading && !user.success){
            redirect('/login');
        }
    } , [user , isUserLoading]);
    
    return (
        <> 
            <header>
                <App search={search} create={create} username={username}  chat={chat} user={user?.data} handleSearchData={handleSearchData}/>
            </header>
            <main>
                {children}
            </main>
            <FixedBottomNavigation col={col} inputbox={inputbox} user={user?.data}/>
        </>
    )
}