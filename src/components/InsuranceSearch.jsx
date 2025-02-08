"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function InsuranceSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search functionality here
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="" dir="rtl">
      <div className="bg-card-bg rounded-3xl p-6">
        <h2 className="text-text-primary text-lg mb-4">
          بیمه مورد نظر خود را جستجو کنید
        </h2>
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary text-text-primary rounded-xl px-4 py-2 pl-10 outline-none focus:ring-2 focus:ring-accent-blue-light placeholder:text-text-secondary transition-all"
              placeholder="جستجو..."
            />
            <Search className="w-5 h-5 text-text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <button
            type="submit"
            className="text-accent-blue-light border border-accent-blue-light hover:bg-accent-blue-light hover:text-primary px-6 py-2 rounded-xl transition-colors"
          >
            بررسی
          </button>
        </form>
      </div>
    </div>
  )
}