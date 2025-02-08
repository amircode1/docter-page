"use client"

import { useState } from "react"
import reviews from "../assets/reviews.svg"
import { ChevronDown } from "lucide-react"

function ReviewsHeader() {
  const [activeSort, setActiveSort] = useState("جدیدترین")
  const [showServices, setShowServices] = useState(false)
  const [selectedService, setSelectedService] = useState("همه خدمات")

  const sortOptions = ["جدیدترین", "قدیمی‌ترین", "مفیدترین"]

  const services = ["همه خدمات", "جراحی قلب", "پیوند قلب", "هیپرکلسترولمی", "جراحی آنوریسم آئورت"]


  return (
    <div className=" p-4 mt-8 rounded-t-3xl" dir="rtl">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
              {showServices && (
                <div className="absolute left-0 right-0 mt-2 py-2 bg-accent-blue-light rounded-xl shadow-lg z-10">
                  {services.map((service) => (
                    <button
                      key={service}
                      className={`w-full px-4 py-2 text-right hover:bg-background-hover transition-colors ${
                        selectedService === service ? "text-accent-blue" : "text-text-primary"
                      }`}
                      onClick={() => {
                        setSelectedService(service)
                        setShowServices(false)
                      }}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}

            <button
              className="flex items-center gap-2 px-4 py-2 bg-accent-blue-light rounded-xl hover:bg-background-hover transition-colors text-primary"
              onClick={() => setShowServices(!showServices)}
            >
              <span>{selectedService}</span>
              <span className="text-primary">(۵۳۶)</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showServices ? "rotate-180" : ""}`} />
            </button>

          </div>
        </div>

        <div className="flex items-center gap-4">
          <img src={reviews} alt="reviews" />
          <span className="text-text-primary">مرتب سازی:</span>
          <div className="flex gap-4">
            {sortOptions.map((option) => (
              <button
                key={option}
                className={`text-sm transition-colors ${
                  activeSort === option ? "text-accent-blue" : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={() => setActiveSort(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ReviewsHeader;
