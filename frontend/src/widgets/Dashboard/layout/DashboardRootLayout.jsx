import { Suspense, useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import TopBar from "../components/TopBar/TopBar";
import { Outlet } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import Loader from "../components/Loader/Loader";

export default function DashboardRootLayout() {
  const buttons = [
    {
        url: "/dashboard",
        title: "Dashboard",
        hasView: true,
        icon: <MdSpaceDashboard />
    },
    {
      url: "/students",
      title: "Students",
      hasView: true,
      icon: <HiUserGroup />
  },
  ]
  return (
    <div className="flex overflow-hidden">
      <SideBar sideBarMenu={buttons}/>
      <div>
        <TopBar />
        <div className="bg-primary-50 p-3 w-[85.5vw] h-[90vh] flex overflow-hidden">
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
