import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#2196F3' : '#1A4D8F',
        color: isDark ? 'white' : '#16162E'
      }}
    >
      {isDark ? (
        <>
          <Sun className="w-5 h-5" />
          <span>فعال کردن تم روشن</span>
        </>
      ) : (
        <>
          <Moon className="w-5 h-5" />
          <span>فعال کردن تم تاریک</span>
        </>
      )}
    </button>
  )
} 