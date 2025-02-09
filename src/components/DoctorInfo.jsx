import React, { useState } from "react";
import starsun from "../assets/starsun.svg"
import CalendarCheck from '../assets/CalendarCheck.svg'
import history from "../assets/history.svg"
import thumbsup from "../assets/ThumbsUp.svg"
import chevronDown from "../assets/ChevronDown.svg"
import StatItem from "./StatItemDoctor";

const DoctorInfo = () => {
  const [showMore, setShowMore] = useState(false);

  // آبجکت رنگ‌های آیکون‌ها
  const iconColors = {
    star: "#FDD835",    // رنگ زرد برای ستاره
    calendar: "#42A5F5", // رنگ آبی برای تقویم
    clock: "#EF5350",   // رنگ قرمز برای تاریخچه
    thumbs: "#66BB6A",  // رنگ سبز برای لایک
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 text-white rounded-2xl">
      {/* بخش اطلاعات */}
      <div className="bg-card-bg p-7 rounded-2xl w-full md:w-1/3 space-y-5">
        <StatItem
          title="امتیاز"
          value="4.6"
          icon={starsun}
          color={iconColors.star}
          subText="از ۵۳۶ دیدگاه"
        />
        
        <StatItem
          title="نوبت موفق"
          value="۵۶۶"
          icon={CalendarCheck}
          color={iconColors.calendar}
        />

        <StatItem
          title="سال سابقه"
          value="12"
          icon={history}
          color={iconColors.clock}
        />

        <StatItem
          title="پیشنهاد کاربران"
          value="۹۹٪"
          icon={thumbsup}
          color={iconColors.thumbs}
        />
      </div>

      {/* بخش توضیحات */}
      <div className="bg-card-bg p-10 rounded-2xl w-full md:w-2/3 relative">
        <div className="relative" dir="rtl">
          <p className="pb-4 text-text-primary">:تشخیص و درمان بیماریهای</p>
          <p className={`text-text-primary transition-all duration-300 ${
            showMore ? "max-h-full" : "max-h-64 overflow-hidden"
          }`}>
 دارای بورد تخصصی بیماری های نوزادان و کودکان درمان اختلالات گوارشی و الرژیک نوزادان و کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی شکم، تست حساسیت به کازیین شیر الرژیک نوزادان و کودکان اختلالات رشد و نمو نوزادان و کودکان اختلال رشد و بلوغ نوجواناندر مطب سونوگرافی شکم، تست حساسیت به کازیین شیر</p>
          
          {/* افکت محو شدن */}
          {!showMore && (
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card-bg to-transparent"></div>
          )}
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-1 mt-2 text-accent-blue-light hover:text-accent-blue-dark transition-colors"
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