import React, { useState } from "react";
import starsun from "../assets/starsun.svg"
import calendarcheck from "../assets/calendarcheck.svg"
import history from "../assets/history.svg"
import thumbsup from "../assets/ThumbsUp.svg"
import chevronDown from "../assets/ChevronDown.svg"
import StatItem from "./StatItemDoctor";

const DoctorInfo = () => {
  const [showMore, setShowMore] = useState(false);


  return (
    <div className="flex flex-col md:flex-row gap-6 text-white rounded-2xl">
      {/* بخش اطلاعات */}
      <div className="bg-[#373569] p-4 rounded-2xl w-full md:w-1/3 space-y-3">
        <StatItem
          title="امتیاز"
          value="4.6"
          icon={starsun}
          color="#FDD835"
          subText="از ۵۳۶ دیدگاه"
        />
        
        <StatItem
          title="نوبت موفق"
          value="۵۶۶"
          icon={calendarcheck}
          color="#42A5F5"
        />

        <StatItem
          title="سال سابقه"
          value="12"
          icon={history}
          color="#EF5350"
        />

        <StatItem
          title="پیشنهاد کاربران"
          value="۹۹٪"
          icon={thumbsup}
          color="#66BB6A"
        />
      </div>

      {/* بخش توضیحات */}
      <div className="bg-[#373569] p-4 rounded-2xl w-full md:w-2/3 relative">
        <div className="relative">
          <p className={`text-gray-300 transition-all duration-300 ${
            showMore ? "max-h-full" : "max-h-20 overflow-hidden"
          }`}>
           تشخیص و درمان بیماریهای: دارای بورد تخصصی بیماری های نوزادان و کودکان درمان اختلالات گوارشی و الرژیک نوزادان و کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی شکم، تست حساسیت به کازیین شیر الرژیک نوزادان و کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی شکم، تست حساسیت به کازیین شیر
          </p>
          
          {/* افکت محو شدن خارج از تگ p */}
          {!showMore && (
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#373569] to-transparent"></div>
          )}
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-1 mt-2 text-blue-400 hover:text-blue-500 transition-all"
        >
          {showMore ? "نمایش کمتر" : "نمایش بیشتر"} 
          <img 
            src={chevronDown} 
            alt="chevronDown" 
            className={`transition-transform duration-300 ${
              showMore ? "rotate-180" : "rotate-0"
            }`} 
          />
        </button>
      </div>
    </div>

  );
};

export default DoctorInfo;
