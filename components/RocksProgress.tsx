import React from 'react';
import { Rock } from '../types';

interface RocksProgressProps {
    rocks: Rock[];
}

const RocksProgress: React.FC<RocksProgressProps> = ({ rocks }) => {
  return (
    <section className="pb-24">
       <h2 className="text-[#181115] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">Quarterly Rocks (Q3 Strategy)</h2>
       <div className="bg-white dark:bg-[#2a1624] rounded-xl border border-[#e6dbe2] dark:border-[#3d2a37] shadow-sm overflow-hidden">
         <div className="p-6 space-y-6">
            {rocks.slice(0, 3).map((rock) => (
                <div key={rock.id} className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                        <span className="dark:text-white">{rock.name}</span>
                        <span className="text-primary">{rock.progress}%</span>
                    </div>
                    <div className="w-full bg-[#f5f0f3] dark:bg-[#3d2a37] h-3 rounded-full overflow-hidden">
                        <div 
                            className="bg-primary h-full" 
                            style={{ width: `${rock.progress}%` }}
                        ></div>
                    </div>
                </div>
            ))}
         </div>
       </div>
    </section>
  );
};

export default RocksProgress;