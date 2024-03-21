"use client"
import FixedBottomNavigation from "@/component/HomePage/BottomNav";
import App from "@/component/HomePage/TopNav";
import { useUser } from "@/hooks/user";


export default function Layout({title , children , auth}){
    const {user , isUserLoading} = useUser();
    console.log(user , isUserLoading);
    return (
        <>
            <header>
                <App user={auth}/>
                <FixedBottomNavigation/>
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