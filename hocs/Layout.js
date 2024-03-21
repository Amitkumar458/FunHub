import FixedBottomNavigation from "@/component/HomePage/BottomNav";
import App from "@/component/HomePage/TopNav";


export default function Layout({title , children , auth}){
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