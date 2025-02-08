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
    <div className="max-w-4xl mx-auto" dir="rtl">
      <div className="flex items-center justify-between mb-6 mt-8">
        <h2 className="text-xl font-semibold text-white">دیدگاه های دکتر رضا فرجی (۵۳۶)</h2>
        <button className="text-[#2196F3] text-sm hover:text-[#1E88E5] transition-colors">مشاهده همه</button>
      </div>

      {/* باکس اصلی */}
      <div className="bg-[#38356a] rounded-3xl p-10 text-white flex flex-row gap-6 justify-between">

         {/* بخش امتیاز و ثبت دیدگاه */}
         <div className="flex flex-row gap-6">
          {/* امتیاز */}
            <div className="flex flex-col md:items-start gap-2">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">۴.۰۶</span>
                    <span className="text-white text-xs">از مجموع ۵۳۶ دیدگاه</span>
                </div>
                        <div className="flex items-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-[#FFD700] text-[#FFD700]" />
                            ))}
                        </div>
                        {/* دکمه ثبت دیدگاه */}
                        <p className="text-sm text-gray-300 mb-4">دیدگاه خود را در مورد این پزشک ثبت کنید</p>
                        <button className="w-full md:w-auto text-[#2196F3] px-6 py-2 bg-[#38356a] border border-[#2196F3] hover:bg-[#1E88E5] hover:text-white rounded-xl transition-colors">
                        ثبت دیدگاه
                        </button>
                    </div>
                </div>

                {/* باکس فیلترها */}
                <div className="bg-[#454384] rounded-2xl p-6">
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#2196F3] hover:bg-[#1E88E5] hover:text-white transition-colors"
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
