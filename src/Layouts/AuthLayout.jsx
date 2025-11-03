import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

export default function AuthLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> 
      </main>
      
    </>
  );
}
