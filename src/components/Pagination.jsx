"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Pagination({ totalPages = 10, initialPage = 1 }) {
  const [currentPage, setCurrentPage] = useState(initialPage)

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const renderPageNumbers = () => {
    const pages = []


    pages.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
          currentPage === 1 ? "bg-[#2196F3] text-white" : "text-gray-400 hover:text-white"
        }`}
      >
        ۱
      </button>,
    )


    if (currentPage > 3) {
      pages.push(
        <span key="ellipsis1" className="text-gray-400">
          ...
        </span>,
      )
    }


    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i <= currentPage + 1 && i >= currentPage - 1) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
              currentPage === i ? "bg-[#2196F3] text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {i.toLocaleString("fa-IR")}
          </button>,
        )
      }
    }


    if (currentPage < totalPages - 2) {
      pages.push(
        <span key="ellipsis2" className="text-gray-400">
          ...
        </span>,
      )
    }


    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
            currentPage === totalPages ? "bg-[#2196F3] text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {totalPages.toLocaleString("fa-IR")}
        </button>,
      )
    }

    return pages
  }

  return (
    <div className="flex items-center justify-center gap-2 p-4" dir="rtl">
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
          currentPage === totalPages
            ? "text-gray-600 cursor-not-allowed"
            : "text-[#2196F3] hover:bg-[#2196F3] hover:bg-opacity-10"
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
          currentPage === 1
            ? "text-gray-600 cursor-not-allowed"
            : "text-[#2196F3] hover:bg-[#2196F3] hover:bg-opacity-10"
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
    </div>
  )
}

