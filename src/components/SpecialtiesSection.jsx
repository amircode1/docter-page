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
      <div className="bg-card-bg rounded-3xl overflow-hidden">
        <div className="divide-y divide-background-hover">
          {specialties.slice(0, isExpanded ? specialties.length : 2).map((specialty, index) => (
            <div key={specialty.title} className="hover:bg-accent-purple transition-colors">
              <div className="p-4">
                <h3 className="text-text-primary text-sm mb-3">{specialty.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {specialty.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      className="bg-background-card text-text-primary px-4 py-2 rounded-xl hover:bg-card-bg transition-colors"
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
          className="w-full p-3 flex items-center justify-center text-text-primary hover:text-text-primary transition-colors hover:bg-accent-purple bg-card-bg"
        >
          <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
        </button>
      </div>
    </div>
  )
}

