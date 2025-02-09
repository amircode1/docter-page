"use client"
import best from "../assets/best.svg"
import { Star } from "lucide-react"

function DoctorReviews() {
  const filters = [
    {
      id: "skill",
      title: "مهارت پزشک",
      icon: <img src={best} alt="best" />,
    },
    {
      id: "waiting",
      title: "زمان انتظار",
      icon: <img src={best} alt="best" />,
    },
    {
      id: "behavior",
      title: "رفتار پزشک",
      icon: <img src={best} alt="best" />,
    },
  ]

  return (
    <div className="" dir="rtl">
      <div className="flex items-center justify-between mb-6 mt-8">
        <h2 className="text-xl font-semibold text-text-primary">
          دیدگاه های دکتر رضا فرجی (۵۳۶)
        </h2>
        <button className="text-accent-blue-light text-sm hover:text-accent-blue-dark transition-colors">
          مشاهده همه
        </button>
      </div>

      {/* باکس اصلی */}
      <div className="bg-card-bg rounded-3xl p-10 flex flex-row gap-6 justify-between">
        {/* بخش امتیاز و ثبت دیدگاه */}
        <div className="flex flex-row gap-6">
          {/* امتیاز */}
          <div className="flex flex-col md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-text-primary">۴.۰۶</span>
              <span className="text-text-primary text-xs">
                از مجموع ۵۳۶ دیدگاه
              </span>
            </div>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-6 h-6 fill-star text-star" 
                />
              ))}
            </div>
            {/* دکمه ثبت دیدگاه */}
            <p className="text-sm text-text-gray mb-4">
              دیدگاه خود را در مورد این پزشک ثبت کنید
            </p>
            <button 
              className="w-full md:w-auto text-accent-blue-light px-6 py-2 border border-accent-blue-light hover:bg-accent-blue hover:text-text-primary rounded-xl transition-colors"
            >
              ثبت دیدگاه
            </button>
          </div>
        </div>

        {/* باکس فیلترها */}
        <div className="bg-background-card rounded-2xl p-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-accent-blue-light text-text-primary hover:bg-accent-blue-light hover:text-text-primary transition-colors"
              >
                <span className="text-xl">{filter.icon}</span>
                <span>{filter.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorReviews;