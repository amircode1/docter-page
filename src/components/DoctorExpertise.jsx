"use client"
import { useState } from "react"
import { Info, Plus, Minus } from "lucide-react"
import arrow from "../assets/arrow.svg"
import SkillLevelBar from "./SkillLevelBar"
import SpeedIcon from "./SpeedIcon"

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
      level: "متوسط",
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
    <div className="" dir="rtl">
      <div className="bg-card-bg rounded-3xl p-6 text-text-primary">
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2 px-10">
            <Info className="w-5 h-5 text-text-secondary" />
            <p className="text-sm text-text-secondary mr-2">
              سوابق درمانی نشان می‌دهد که دکتر رضا فرجی بیشتر در حوزه‌های زیر فعالیت می‌کند.
            </p>
          </div>
          <h2 className="text-sm text-text-secondary ml-10">تجربه پزشک</h2>
        </div>

        <div className="space-y-4">
          {expertiseData.map((item) => (
            <div key={item.id} className="border-none rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-right transition-colors hover:bg-background-hover"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent-blue-light/20 flex items-center justify-center hover:bg-accent-blue-light/30 transition-colors">
                      {openItem === item.id ? (
                        <Minus className="w-6 h-6 text-accent-blue-light hover:text-accent-blue-dark transition-colors" />
                      ) : (
                        <Plus className="w-6 h-6 text-accent-blue-light hover:text-accent-blue-dark transition-colors" />
                      )}
                    </div>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-blue-light">{item.level}</span>
                    <SpeedIcon level={item.level} />
                  </div>
                </div>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === item.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-4 pb-4">
                  <p className="text-text-secondary">{item.description}</p>
                  <div className="space-y-2">
                    <SkillLevelBar level={item.level} />
                  </div> 
                  <div className="flex items-center gap-2 border-2 border-border p-2 w-fit rounded-2xl">
                    <button className="text-accent-blue-light hover:text-accent-blue-dark transition-colors">
                      اطلاعات بیشتر در مورد جراحی قلب
                    </button>
                    <img src={arrow} alt="arrow" className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="text-accent-blue-light hover:text-accent-blue-dark mt-4 transition-colors w-full">
          مشاهده بیشتر
        </button>
      </div>
    </div>
  )
}

export default DoctorExpertise;