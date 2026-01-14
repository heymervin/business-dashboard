import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HealthCard from './components/HealthCard';
import AttentionSection from './components/AttentionSection';
import IssueTracker from './components/IssueTracker';
import TeamWorkload from './components/TeamWorkload';
import RocksProgress from './components/RocksProgress';
import DataQualityAlert from './components/DataQualityAlert';
import { MOCK_DATA } from './constants';
import { DashboardData } from './types';

const App: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
        setData(MOCK_DATA);
    }, 500);
  }, []);

  if (!data) {
      return (
          <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
      )
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-1 px-4 lg:px-20 py-8 space-y-8">
        {/* Business Health Hero Row */}
        <section>
            <h2 className="text-[#181115] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">analytics</span> Business Health Portfolio
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {data.boards.map(board => (
                    <HealthCard key={board.id} board={board} />
                ))}
            </div>
        </section>

        {/* Attention Required */}
        <section>
             <h2 className="text-[#181115] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">Attention Required (Monday.com Sync)</h2>
             <AttentionSection items={data.attentionItems} />
        </section>

        {/* Metrics & Team Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <IssueTracker />
             <TeamWorkload data={data.teamLoad} />
        </div>

        {/* Quarterly Rocks */}
        <RocksProgress rocks={data.rocks} />

      </main>

      <DataQualityAlert />
    </div>
  );
};

export default App;