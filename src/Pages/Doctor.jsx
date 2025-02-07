import React from "react";
import DoctorProfile from "../components/DoctorProfile"
import NavbarMain from "../components/NavbarMain";
import NavbarChain from "../components/NavbarChain";
import NavbarPage from "../components/NavbarPage";
import DoctorInfo from "../components/DoctorInfo";
import LocationCard from "../components/LocationCard";
import DoctorExpertise from "../components/DoctorExpertise";

function Doctor() {
    return (
            <main className="container mx-auto">
                <NavbarMain/>
                <div className="flex flex-col lg:flex-row-reverse">
                    <aside className="lg:w-1/3">
                        <DoctorProfile />
                    </aside>
                    <div className="lg:w-2/3 space-y-6 bg-[#29294f] p-6">
                        <NavbarChain/>
                        <NavbarPage/>
                        <h3 className="text-lg font-bold mb-2 flex flex-row-reverse text-white">درباره دکتر رضا فرجی</h3>
                        <div className="">
                            <DoctorInfo/>
                            <h3 className="text-lg font-bold my-4 mt-8 flex flex-row-reverse text-white">ادرس مطب دکتر رضا فرجی</h3>
                            <LocationCard/>
                            <LocationCard/>
                            <DoctorExpertise/>
                        </div>

                    </div>
                </div>
            </main>
    )
}

export default Doctor;