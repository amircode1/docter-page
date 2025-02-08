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
      <div className="h-4 flex gap-1">
        {levels.map((levelData) => (
          <div
            key={levelData.name}
            className="h-full relative transition-all duration-300"
            style={{
              width: `${levelData.percentage}%`,
              backgroundColor: levelData.name === level ? "var(--accent-blue)" : "var(--accent-purple)",
              borderRadius: 
                levelData.name === "کم" ? "0px 8px 8px 0px" :
                levelData.name === "خیلی زیاد" ? "8px 0px 0px 8px" : "0"
            }}
          >
          </div>
        ))}
      </div>

      {/* لیبل‌ها با فاصله متناسب */}
      <div className="flex justify-between text-sm gap-1">
        {levels.map((l) => (
          <div 
            key={l.name} 
            className={`text-center ${
              l.name === level ? "text-accent-blue font-bold" : "text-text-secondary"
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
