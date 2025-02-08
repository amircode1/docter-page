function SkillLevelBar({ level = "خیلی زیاد" }) {
  const levels = [
    { name: "کم", percentage: 20 },
    { name: "متوسط", percentage: 50 },
    { name: "زیاد", percentage: 15 },
    { name: "خیلی زیاد", percentage: 15 },
  ]

  return (
    <div className="w-full space-y-2 rounded-full">
      {/* نوار اصلی با فاصله بین بخش‌ها */}
      <div className="h-4 flex gap-1 bg-[#38356a]">
        {levels.map((levelData) => (
          <div
            key={levelData.name}
            className="h-full relative transition-all duration-300"
            style={{
              width: `${levelData.percentage}%`,
              backgroundColor: levelData.name === level ? "#2196F3" : "#454384",
              borderRadius: 
                levelData.name === "کم" ? "0px 8px 8px 0px" :
                levelData.name === "خیلی زیاد" ? "8px 0px 0px 8px" : "0"
            }}
          >
            {/* خط جداکننده سفید */}
            {levelData.name !== "خیلی زیاد" && (
              <div className="absolute right-[-2px] top-0 w-[2px] h-full"></div>
            )}
          </div>
        ))}
      </div>

      {/* لیبل‌ها با فاصله متناسب */}
      <div className="flex justify-between text-sm gap-1">
        {levels.map((l) => (
          <div 
            key={l.name} 
            className={`text-center ${
              l.name === level ? "text-[#2196F3] font-bold" : "text-gray-400"
            }`}
            style={{ width: `${l.percentage}%` }}
          >
            {l.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillLevelBar;
