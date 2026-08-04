import { Outlet } from "react-router-dom";
import { AppNavigationBar } from "../shared/components/AppNavigationBar";
import { Footer } from "../shared/components/Footer";

export function PublicLayout() {
    return (
        <>
            <AppNavigationBar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}