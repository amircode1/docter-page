function SkillLevelBar({ level = "خیلی زیاد" }) {
  const levels = [
    { name: "کم", percentage: 20 },
    { name: "متوسط", percentage: 50 },
    { name: "زیاد", percentage: 15 },
    { name: "خیلی زیاد", percentage: 15 },
  ];

  // پیدا کردن سطح فعلی
  const currentLevel = levels.find((l) => l.name === level);

  return (
    <div className="w-full space-y-2">
      <div className="h-4 rounded-full overflow-hidden flex bg-[#454384] gap-px">
        {levels.map((levelData) => (
          <div
            key={levelData.name}
            className={`h-full relative transition-all duration-300 ${
              levelData.name === level ? 'bg-[#2196F3]' : 'bg-transparent'
            }`}

            style={{
              width: `calc(${levelData.percentage}%)`,
            }}
          >
            {/* خط جداکننده سمت راست */}
            {levelData.name !== "خیلی زیاد" && (
              <div 
                className={`absolute right-0 top-0 w-px h-full ${
                  levelData.name === level || 
                  levels[levels.findIndex(l => l.name === levelData.name) + 1]?.name === level 
                    ? 'bg-[#2196F3]' 
                    : 'bg-[#1E1B38]'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      
      {/* برچسب‌های سطح */}
      <div className="flex justify-between text-sm">
        {levels.map((l) => (
          <div 
            key={l.name} 
            style={{ width: `${l.percentage}%` }} 
            className={`text-center ${l.name === level ? "text-[#2196F3]" : "text-gray-400"}`}
          >
            {l.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillLevelBar;
