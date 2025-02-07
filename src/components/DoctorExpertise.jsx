"use client"
import speed from "../assets/speed.svg"
import { useState } from "react"
import { Info, Plus, Minus } from "lucide-react"
import arrow from "../assets/arrow.svg"
import SkillLevelBar from "./SkillLevelBar"

function DoctorExpertise() {
  const [openItem, setOpenItem] = useState("جراحی قلب اطفال")

  const expertiseData = [
    {
      id: "جراحی قلب اطفال",
      title: "جراحی قلب اطفال",
      level: "کم",
      description: "دکتر رضا فرجی در عمل بینی نسبت به سایر پزشکان مشابه تجربه و مهارت بسیار بیشتری دارد",
    },
    {
      id: "پیوند قلب",
      title: "پیوند قلب",
      level: "خیلی زیاد",
      description: "توضیحات مربوط به پیوند قلب",
    },
    {
      id: "هیپرکلسترولمی",
      title: "هیپرکلسترولمی",
      level: "زیاد",
      description: "توضیحات مربوط به هیپرکلسترولمی",
    },
    {
      id: "جراحی آنوریسم آئورت",
      title: "جراحی آنوریسم آئورت",
      level: "خیلی زیاد",
      description: "توضیحات مربوط به جراحی آنوریسم آئورت",
    },
  ]

  const toggleItem = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId)
  }

  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <div className="bg-[#38356a] rounded-3xl p-6 text-white">
        <div className="flex items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-2 px-10">
                <Info className="w-5 h-5 text-gray-400" />
                <p className="text-sm text-gray-300 mr-2">
                    سوابق درمانی نشان می‌دهد که دکتر رضا فرجی بیشتر در حوزه‌های زیر فعالیت می‌کند.
                </p>
            </div>
          <h2 className="text-sm text-gray-300 ml-10">تجربه پزشک</h2>
        </div>

        <div className="space-y-4">
          {expertiseData.map((item) => (
            <div key={item.id} className="border-none bg-[#38356a] rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-right transition-colors hover:bg-[#1e1e3f]"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#2196F3] bg-opacity-20 flex items-center justify-center">
                        {openItem === item.id ? (
                        <Minus className="w-6 h-6 text-[#2196F3]" />
                        ) : (
                        <Plus className="w-6 h-6 text-[#2196F3]" />
                        )}
                    </div>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#2196F3]">{item.level}</span>
                    <img src={speed} alt="speed" className="w-8 h-8" />
                  </div>
                </div>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === item.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-4 pb-4">
                  <p className="text-gray-300">{item.description}</p>
                  <div className="space-y-2">
                    <SkillLevelBar level={item.level} />
                  </div> 
                  <div className="flex items-center gap-2 border-2 border-[#53509E] p-2 w-fit rounded-2xl">
                        <button className="text-[#2196F3] hover:text-[#1E88E5] transition-colors">
                            اطلاعات بیشتر در مورد جراحی قلب
                        </button>
                        <img src={arrow} alt="arrow" className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>

        <button className="text-[#2196F3] hover:text-[#1E88E5] mt-4 transition-colors w-full">مشاهده بیشتر</button>
      </div>
    </div>
  )
}

export default DoctorExpertise;
