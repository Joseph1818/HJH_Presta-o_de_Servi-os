import { Outlet } from "react-router";
import Navbar from "./NavBar";
import BottomNav from "./BottomNav";

export default function WebLayout() {
    return (
        <>
        <Outlet />
        <Navbar/>
        <BottomNav/>
        </>
    );
}