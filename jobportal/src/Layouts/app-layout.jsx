import { Outlet } from "react-router-dom";
import Header from "@/components/header";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen ml-8 mr-8">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-18">Made by ❤️ Rohit</div>
    </div>
  )
}

export default AppLayout;
