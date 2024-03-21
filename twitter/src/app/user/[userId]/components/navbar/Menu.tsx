import type { Dispatch, SetStateAction } from "react";

type Menu = {
    showSideMenu: boolean,
    setShowSideMenu: Dispatch<SetStateAction<boolean>>
}

export default function Menu({setShowSideMenu}: Partial<Menu>) {
    return (
        <div className="flex flex-col gap-1 md:hidden cursor-pointer"
            onClick={() => {
                if (setShowSideMenu) setShowSideMenu(true)
            }}
        >
            <span className="bg-violet-600 w-5 h-1"></span>
            <span className="bg-violet-600 w-5 h-1"></span>
            <span className="bg-violet-600 w-5 h-1"></span>
        </div>
    )
}