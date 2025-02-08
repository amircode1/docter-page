import React from "react";
import HelifaLogo from '/helifaNavbar.svg'
import SearchIcon from "../assets/search.svg"
import VectorIcon from "../assets/Vector.svg"

function Navbar() {
    return (
        <div className="flex justify-between items-center bg-[#16162E] h-20 px-16">
            <div className="flex items-center gap-4">
                <img src={SearchIcon} alt="SearchIcon" />
                <img src={VectorIcon} alt="VectorIcon" />
            </div>
            <div className="flex justify-between items-center gap-6 flex-row-reverse pl-16">
                <a className="text-white text-xs">صحفه اصلی</a>
                <a className="text-white text-xs">دنیای سلامتی</a>
                <a className="text-white text-xs">تماس با ما</a>
                <a className="text-white text-xs">درباره ما</a>
            </div>
            <div className="flex items-center">
                <p className="text-gray-300 text-xs">رسانه ای سلامتی و زیبایی</p>
                <h1 className="text-white text-xs font-bold">هیلیفا</h1>
                <img src={HelifaLogo} alt="HelifaNavbar" />
            </div>
        </div>

    )

}

export default Navbar;