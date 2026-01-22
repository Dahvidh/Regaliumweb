
"use client";
import Header from "@/app/components/Header";
//import Dashboard from "../components/Dashboard";
import DashboardSection from "../components/DashboardSection,";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Dashboard = dynamic(() => import("@/app/components/Dashboard"), {
  ssr: false,
});


export default function Withdrawal() {
  return (
    <>
      <Header /> 
        <Dashboard />
        <Footer />
    </>
  );
}

