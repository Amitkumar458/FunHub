"use client"
import FixedBottomNavigation from "@/component/HomePage/BottomNav";
import Loder from "@/component/HomePage/Loder";
import App from "@/component/HomePage/TopNav";
import { useUser } from "@/hooks/user";
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function Layout({title , children , auth}){
    const {user , isUserLoading} = useUser();
    useEffect(() => {
        if(isUserLoading){
            return () => {
                <Loder/>
            }
        }
        if(!isUserLoading && !user){
            redirect('/login');
        }
    } , []);
    
    return (
        <> 
            <header>
                <App user={user}/>
                <FixedBottomNavigation user={user}/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                this is footer
            </footer>
        </>
    )
}