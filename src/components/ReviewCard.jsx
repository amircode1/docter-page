"use client";
import { Star, ThumbsUp, CheckCircle, ReplyIcon } from "lucide-react";

function ReviewCard({ user }) {
  return (
    <div className="bg-[#373569] text-white p-6 rounded-2xl 
                  animate-fade-in hover:bg-[#454384]
                  transition-all duration-300" dir="rtl">
        <div className="flex flex-wrap flex-row-reverse gap-2 text-sm items-center">
            {/* تگ‌های وضعیت */}
            {user.tags.map((tag, index) => (
                <span key={index} className="bg-[#454384] text-gray-200 px-3 py-1 rounded-full">
                {tag}
            </span>
            ))}
            {user.recommend && (
                <span className="bg-[#2196F3] text-white px-3 py-1 rounded-full flex items-center gap-1">
                پیشنهاد می‌کنم
                <CheckCircle className="w-4 h-4 text-white" />
            </span>
            )}
            <span className="text-center">{user.date}</span>
        </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3">
          {/* تصویر کاربر */}
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-xl"
            />
          {/* نام و امتیاز */}
          <div className="flex flex-col gap-1 text-right">
            <p className="text-sm text-white">{user.role}</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(user.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                ))}
            </div>
            <p className="underline text-lg text-white mt-4">{user.doctor}</p>
             {/* متن نظر */}
            <p className="text-sm text-white text-right mt-2">{user.review}</p>
          </div>
        </div>
      </div>

      {/* دکمه‌های تعامل */}
      <div className="flex items-center flex-row-reverse justify-between text-gray-400 text-sm">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 hover:text-gray-200">
            <ReplyIcon className="w-4 h-4" /> {user.replies} پاسخ‌ها
          </button>
          <button className="flex items-center gap-1 hover:text-gray-200 rotate-180">
            <ThumbsUp className="w-4 h-4" /> {user.likes}
          </button>
          <button className="flex items-center gap-1 hover:text-gray-200">
            <ThumbsUp className="w-4 h-4" /> {user.likes}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
