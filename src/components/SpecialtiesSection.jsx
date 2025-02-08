"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function SpecialtiesSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const specialties = [
    {
      title: "تخصص",
      items: ["دکتر جراحی بینی", "دکتر پوست و مو"],
    },
    {
      title: "تخصص شهر",
      items: ["دکتر جراحی بینی", "دکتر پوست و مو تهران"],
    },
    {
      title: "سایر تخصص‌ها",
      items: ["دکتر جراحی پلاستیک", "دکتر زیبایی"],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <div className="bg-[#373569] rounded-3xl overflow-hidden">
        <div className="divide-y divide-[#454384]">
          {specialties.slice(0, isExpanded ? specialties.length : 2).map((specialty, index) => (
            <div key={specialty.title} className=" hover:bg-[#454384] transition-colors">
              <div className="p-4">

                <h3 className="text-gray-400 text-sm mb-3">{specialty.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {specialty.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      className="bg-[#53509E] text-white px-4 py-2 rounded-xl hover:bg-[#53518A] transition-colors"
                    >
                      {item}
                    </button>

                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-3 flex items-center justify-center text-white hover:text-white transition-colors bg-[#53509E]"
        >
          <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
        </button>
      </div>
    </div>
  )
}

