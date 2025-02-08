import React from 'react';

const StatItem = ({ title, value, color, icon }) => (
    <div className="flex justify-end items-center bg-card-bg rounded-lg gap-2">
      <span className="text-text-secondary">{title}</span>
      <span className="text-text-primary font-bold">{value}</span>
      <span className="flex items-center justify-center text-card-icon-bg font-bold relative w-10 h-10">
        <span 
          className="absolute inset-0 opacity-30 rounded-xl" 
          style={{ backgroundColor: color }}
        ></span>
        <img 
          src={icon} 
          alt={title} 
          className="relative z-10 w-6 h-6" 
        />
      </span>
    </div>
  );

export default StatItem;
