import React from "react"
import DoctorImage from "../assets/doctor.png"
import Logo from "../assets/logo.svg"
import ShareIcon from "../assets/share.svg"
import InstagramIcon from "../assets/instagram.svg"
import qusetionIcon from "../assets/qusetion.svg"
import BookmarkIcon from "../assets/save.svg"
import StarIcon from "../assets/star.svg"
import MedicalIcon from "../assets/tik.svg"
import CommentIcon from "../assets/comment.svg"
import litstar from "../assets/litstar.svg"
import InfoCard from "./InfoCard"

function DoctorProfile() {
  return (
    <div className="bg-primary h-full flex justify-center items-start p-6">
      <div className="text-text-primary rounded-2xl p-6 w-80 text-center">
        {/* Profile Image */}
        <img
          src={DoctorImage}
          alt="Doctor"
          className="w-24 h-24 rounded-full mx-auto border-2 border-border"
        />
        <h2 className="text-xl mt-4 text-text-primary">دکتر رضا فرجی</h2>
        <p className="text-text-secondary text-sm mt-2">متخصص پوست</p>
        
        {/* Logo */}
        <div className="bg-secondary p-3 rounded-xl mt-4 flex flex-row items-center justify-center border-dashed border-2 border-border w-full">
          <h1 className="bg-gradient-to-r from-accent-blue-light to-[#5CBDF8] text-transparent bg-clip-text text-xl text-center">
            هیلیفاید
          </h1>
          <img src={Logo} alt="هیلیفاید" className="w-12 h-12" />
        </div>
        
        {/* Actions */}
        <div className="flex justify-center gap-4 my-2 mt-6">
          <button className="bg-secondary p-3 rounded-2xl text-text-secondary hover:bg-background-hover transition-colors">
            <img src={ShareIcon} alt="Share" className="w-7 h-7" />
          </button>
          <button className="bg-secondary p-3 rounded-2xl text-text-secondary hover:bg-background-hover transition-colors">
            <img src={BookmarkIcon} alt="Bookmark" className="w-7 h-7" />
          </button>
          <button className="bg-secondary p-3 rounded-2xl text-text-secondary hover:bg-background-hover transition-colors">
            <img src={InstagramIcon} alt="Chat" className="w-7 h-7" />
          </button>
        </div>
        
        {/* Appointment */}
        <div className="flex justify-between">
          <p className="text-text-primary text-xs mt-4">شنبه ۱۹ آبان ساعت ۱۸:۰۰</p>
          <p className="text-text-primary text-xs mt-4">:نزدیک‌ترین نوبت خالی</p>
        </div>
        <button className="bg-accent-blue-light hover:bg-accent-blue-dark w-full py-4 mt-3 rounded-2xl text-text-primary transition-colors">
          رزرو نوبت
        </button>
        
        {/* AI Review */}
        <button 
          className="bg-primary drop-shadow-[0_0_3px_#97BCF8] w-full py-2 mt-7 rounded-2xl flex items-center justify-center relative overflow-hidden group"
          style={{
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(#16162E, #16162E), linear-gradient(45deg, #FF862F, #F85A5A, #70B8FB, #A050E5',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}
        >
          {/* نورپخش شده */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF862F30] via-[#F85A5A30] to-[#70B8FB30] blur-[15px] opacity-40 group-hover:opacity-60 transition-opacity" />
          
          {/* متن دکمه */}
          <span className="relative z-10 text-white flex items-center gap-2 py-2">
            بررسی پزشک توسط هوش مصنوعی <img src={litstar} alt="litstar" className="w-6 h-6" />
          </span>
        </button>

        {/* Info Cards */}
        <div className="mt-6 space-y-2">
          <InfoCard 
            title="امتیاز"
            value="4.6"
            icon={StarIcon}
            iconBg="rounded-xl"
          />
          <InfoCard 
            title="نظام پزشکی"
            value="۱۳۵۴۷"
            icon={MedicalIcon}
            iconBg="rounded-xl"
          />
          <InfoCard 
            title="دیدگاه"
            value="۱۵۲۴۰"
            icon={CommentIcon}
            iconBg="rounded-xl"
          />
          <InfoCard 
            title="پاسخ"
            value="۱۵۲۴۰"
            icon={qusetionIcon}
            iconBg="rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile;