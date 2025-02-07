import React, { useState, useEffect, useRef } from "react";

const NavbarPage = () => {
  const [activeTab, setActiveTab] = useState("درباره پزشک");
  const [indicatorStyle, setIndicatorStyle] = useState({ width: "0px", left: "0px" });
  const containerRef = useRef(null);
  const tabRefs = useRef({});

  const tabs = ["آدرس‌ها", "بیمه‌ها", "خدمات", "دیدگاه‌ها", "درباره پزشک"];

  useEffect(() => {
    if (tabRefs.current[activeTab] && containerRef.current) {
      const tabElement = tabRefs.current[activeTab];
      const containerRect = containerRef.current.getBoundingClientRect();
      const tabRect = tabElement.getBoundingClientRect();
      
      setIndicatorStyle({
        width: `${tabRect.width}px`,
        left: `${(tabRect.left - containerRect.left)}px`,
      });
    }
  }, [activeTab]);

  return (
    <div className="relative text-white py-3 flex items-center flex-row-reverse">
      <nav ref={containerRef} className="relative grid grid-cols-5 gap-2 text-gray-400">
        {tabs.map((tab) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[tab] = el)}
            onClick={() => setActiveTab(tab)}
            className={`relative py-1 transition-all duration-300 hover:text-white ${
              activeTab === tab ? "text-white font-bold" : ""
            }`}
          >
            {tab}
          </button>
        ))}
        {/* نوار آبی متحرک */}
        <div
          className="absolute -bottom-[12px] h-3 bg-blue-600 rounded-t-xl transition-all duration-300 filter drop-shadow-[0px_0px_13px_#317AF1]"
          style={indicatorStyle}
        ></div>
      </nav>

      {/* خط زیرین */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-500"></div>
    </div>
  );
};

export default NavbarPage;
