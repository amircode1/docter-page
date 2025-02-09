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
import Pagination from "../components/Pagination";

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

function Doctor1() {
    const [visibleReviews, setVisibleReviews] = useState(2);
    const totalReviews = 10; // تعداد کل نظرات
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

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
                    <div className="lg:w-2/3 space-y-6 bg-background p-10">
                        <NavbarChain/>
                        <NavbarPage/>
                        <h3 className="text-lg font-bold mb-2 flex flex-row-reverse text-text-primary">درباره دکتر رضا فرجی</h3>
                        <div className="">
                            <DoctorInfo/>
                            <h3 className="text-lg font-bold my-4 mt-8 flex flex-row-reverse text-text-primary">ادرس مطب دکتر رضا فرجی</h3>
                            <LocationCard/>
                            <LocationCard/>
                            <h3 className="text-lg font-bold my-4 mt-8 flex flex-row-reverse text-text-primary">زمینه های تخصصی دکتر رضا فرجی</h3>
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
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={(page) => setCurrentPage(page)}
                                />
                            )}
                        </div>
                        <h3 className="text-lg font-bold my-4 mt-8 flex flex-row-reverse text-text-primary">بیمه های طرف قرارداد </h3>
                        <InsuranceSearch/>
                        <h3 className="text-lg font-bold my-4 mt-8 flex flex-row-reverse text-text-primary">برچسب های پزشک</h3>
                        <SpecialtiesSection/>
                    </div>
                </div>
            </main>
    )
}

export default Doctor1;