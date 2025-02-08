import React, { useState } from "react";
import DoctorProfile from "../components/DoctorProfile"
import NavbarMain from "../components/NavbarMain";
import NavbarChain from "../components/NavbarChain";
import NavbarPage from "../components/NavbarPage";
import DoctorInfo from "../components/DoctorInfo";
import LocationCard from "../components/LocationCard";
import DoctorExpertise from "../components/DoctorExpertise";
import DoctorReviews from "../components/DoctorReviews";
import ReviewsHeader from "../components/ReviewsHeader";
import ReviewCard from "../components/ReviewCard";
import InsuranceSearch from "../components/InsuranceSearch";
import SpecialtiesSection from "../components/SpecialtiesSection";
import '../styles/globals.css';


const userData = {
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "کاربر عادی",
    role: "کاربر عادی",
    doctor: "بهترین دکتر هیلیفا",
    rating: 5,
    review: "سپاس از زحمات دکتر برای تمامی خدماتش",
    tags: ["عمل بینی", "۲ ماه نقاهت"],
    recommend: true,
    date: "۲۰ آذر ۱۴۰۳",
    replies: 0,
    likes: 0,
  };

function Doctor() {
    const [visibleReviews, setVisibleReviews] = useState(2);
    const totalReviews = 10; // تعداد کل نظرات

    const handleLoadMore = () => {
        setVisibleReviews(prev => Math.min(prev + 2, totalReviews));
    };

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
                            <h3 className="text-lg font-bold my-4 mt-8 flex flex-row-reverse text-white">زمینه های تخصصی دکتر رضا فرجی</h3>
                            <DoctorExpertise/>
                            <DoctorReviews/>
                            <ReviewsHeader/>
                            
                            {/* لیست نظرات با قابلیت لود بیشتر */}
                            <div className="space-y-4">
                                {Array.from({length: visibleReviews}).map((_, i) => (
                                    <ReviewCard key={i} user={userData} />
                                ))}
                            </div>

                            {/* دکمه نمایش بیشتر */}
                            {visibleReviews < totalReviews && (
                                <div className="flex justify-center mt-6">
                                    <button
                                        onClick={handleLoadMore}
                                        className="px-6 py-2 border border-[#2196F3] text-[#2196F3] rounded-full
                                                    hover:bg-[#1976D2] hover:text-white transition-colors duration-300
                                                    flex items-center gap-2"
                                    >
                                        مشاهده دیدگاه بیشتر
                                        <svg 
                                            className="w-4 h-4 animate-bounce"
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M19 13l-7 7-7-7" 
                                            />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                        <h3 className="text-lg font-bold my-4 mt-8 flex flex-row-reverse text-white">بیمه های طرف قرارداد </h3>
                        <InsuranceSearch/>
                        <h3 className="text-lg font-bold my-4 mt-8 flex flex-row-reverse text-white">برچسب های پزشک</h3>
                        <SpecialtiesSection/>
                    </div>
                </div>
            </main>
    )
}

export default Doctor;