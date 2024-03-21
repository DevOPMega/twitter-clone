import type { Dispatch, SetStateAction } from "react";


type Menu = {
    showSideMenu: boolean,
    setShowSideMenu: Dispatch<SetStateAction<boolean>>
}

export default function SideBar({showSideMenu, setShowSideMenu}: Menu) {
    return (
        <div className={`absolute w-2/3 h-screen left-0 top-0 bg-gray-950
            ${showSideMenu ? "block":"hidden"}
        `}>
            <div>

            </div>
        </div>
    )
}