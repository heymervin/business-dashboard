import React from 'react';
import { Board } from '../types';

interface HealthCardProps {
  board: Board;
}

const HealthCard: React.FC<HealthCardProps> = ({ board }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'AOPI': return 'corporate_fare';
      case 'IOS': return board.name.includes('Blog') ? 'rss_feed' : 'group';
      case '16ST': return 'palette';
      case 'Bespoke': return 'auto_awesome';
      default: return 'folder';
    }
  };

  const getSubtext = (name: string) => {
    if (name.includes('AOPI')) return 'Operational Efficiency';
    if (name.includes('Blog')) return 'Content Engagement';
    if (name.includes('Member')) return 'Member Retention';
    if (name.includes('16')) return 'Brand Alignment';
    return 'Creative Output';
  }

  const isElite = board.health >= 95;
  const isGood = board.health >= 70;
  
  // Dynamic border based on health
  const borderColor = isElite ? 'border-2 border-primary' : 'border border-[#e6dbe2] dark:border-[#3d2a37]';
  const shadow = isElite ? 'shadow-md' : 'shadow-sm';

  return (
    <div className={`flex flex-col gap-4 rounded-xl ${borderColor} bg-white dark:bg-[#2a1624] p-5 ${shadow}`}>
      <div className="flex items-center justify-between">
        <span className="p-2 rounded-lg" style={{ backgroundColor: `${board.color}15`, color: board.color }}>
          <span className="material-symbols-outlined">{getIcon(board.businessUnit)}</span>
        </span>
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: board.color }}>
          {board.status}
        </span>
      </div>
      
      <div className="flex flex-col items-center gap-3 py-2">
        <div 
          className="circular-progress relative size-24"
          style={{ 
            // @ts-ignore - CSS custom properties
            '--value': board.health, 
            '--progress-color': board.color 
          }}
        >
          <span className="relative z-10 text-lg font-bold" style={{ color: board.color }}>{board.health}%</span>
        </div>
        
        <div className="text-center">
          <h3 className="text-[#181115] dark:text-white text-base font-bold">{board.name}</h3>
          <p className="text-[#8a607b] dark:text-white/50 text-xs">{getSubtext(board.name)}</p>
        </div>
      </div>
    </div>
  );
};

export default HealthCard;