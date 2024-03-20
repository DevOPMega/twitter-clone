"use client";

import { useState } from "react"

// Components Import 
import Menu from "./Menu";
import Logo from "./Logo";
import SideBar from "./Sidebar";
import NavigationLink from "./NavigationLink";
import SearchBar from "./Searchbar";
import Profile from "./Profile";

export default function Navbar() {
    const [showSideMenu, setShowSideMenu] = useState<boolean>(false);

    return (
        <nav className="flex justify-between items-center gap-2 
            px-8 py-3 bg-slate-100 rounded-lg"
        >
            <div className="flex gap-4 items-center">
                <Menu 
                    showSideMenu={showSideMenu}
                    setShowSideMenu={setShowSideMenu}
                />
                <Logo />
                <NavigationLink />
            </div>
            <SideBar 
                showSideMenu={showSideMenu}
                setShowSideMenu={setShowSideMenu}
            />

            
            <SearchBar />
            <Profile />
        </nav>
    )
}