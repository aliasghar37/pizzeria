import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <Header />
            <main className="">
                <div>
                    {/* <section className="max-w-3xl mx-auto"> */}
                    <section>
                        <Outlet />
                    </section>
                </div>
            </main>
        </>
    );
};
export default RootLayout;
