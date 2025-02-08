import React from "react";
import HelifaLogo from '/helifaNavbar.svg'
import SearchIcon from "../assets/search.svg"
import VectorIcon from "../assets/vector.svg"

function Navbar() {
    return (
        <div className="flex justify-between items-center bg-primary h-20 px-16 border-b border-border">
            <div className="flex items-center gap-4">
                <img src={SearchIcon} alt="SearchIcon" className="w-5 h-5" />
                <img src={VectorIcon} alt="VectorIcon" className="w-5 h-5" />
            </div>
            <div className="flex justify-between items-center gap-6 flex-row-reverse pl-16">
                <a className="text-text-primary text-xs hover:text-accent-blue transition-colors duration-200">صحفه اصلی</a>
                <a className="text-text-primary text-xs hover:text-accent-blue transition-colors duration-200">دنیای سلامتی</a>
                <a className="text-text-primary text-xs hover:text-accent-blue transition-colors duration-200">تماس با ما</a>
                <a className="text-text-primary text-xs hover:text-accent-blue transition-colors duration-200">درباره ما</a>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-text-secondary text-xs">رسانه ای سلامتی و زیبایی</p>
                <h1 className="text-text-primary text-xs font-bold">هیلیفا</h1>
                <img src={HelifaLogo} alt="HelifaNavbar" className="w-8 h-8" />
            </div>
        </div>
    )
}

export default Navbar;