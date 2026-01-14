import React from 'react';

const DataQualityAlert: React.FC = () => {
  const [visible, setVisible] = React.useState(true);
  
  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background-dark text-white p-4 shadow-2xl flex items-center justify-between border-t border-primary/30 backdrop-blur-lg">
       <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-amber-400">warning</span>
          <div>
            <p className="text-sm font-bold">Data Quality Alert</p>
            <p className="text-xs text-white/70">Monday.com integration for "Creative Assets" board is 4 hours behind sync.</p>
          </div>
       </div>
       <div className="flex gap-3">
          <button className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded hover:bg-primary/90">Sync Now</button>
          <button 
            onClick={() => setVisible(false)}
            className="px-4 py-1.5 bg-white/10 text-white text-xs font-bold rounded hover:bg-white/20"
          >
            Dismiss
          </button>
       </div>
    </div>
  );
};

export default DataQualityAlert;