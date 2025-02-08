const InfoCard = ({ title, value, icon, iconBg = 'rounded-lg' }) => (
  <div className="flex justify-between bg-card-bg p-3 items-center rounded-2xl">
    <span className="text-card-text">{title}</span>
    <div className="flex flex-row items-center gap-2">
      <span className="text-text-primary">{value}</span>
      <span className="relative flex items-center justify-center w-10 h-10">
        <div className={`absolute inset-0 bg-card-icon bg-opacity-30 ${iconBg}`} />
        <img 
          src={icon} 
          alt={title} 
          className="relative z-10 w-6 h-6"
          style={{ 
            filter: 'brightness(0) invert(1)',
            WebkitFilter: 'brightness(0) invert(1)' 
          }}
        />
      </span>
    </div>    
  </div>
);

export default InfoCard;