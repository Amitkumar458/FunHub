"use client"
import FixedBottomNavigation from "@/component/HomePage/BottomNav";
import Loder from "@/component/HomePage/Loder";
import App from "@/component/HomePage/TopNav";
import { useUser } from "@/hooks/user";


export default function Layout({title , children , auth}){
    const {user , isUserLoading} = useUser();
   
    return (
        <> {
            isUserLoading ? <Loder/> : <>
            <header>
                <App user={user}/>
                <FixedBottomNavigation/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                this is footer
            </footer>
            </>
        }
        </>
    )
}