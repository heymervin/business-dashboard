import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-[#e6dbe2] dark:border-[#3d2a37] bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-primary">
          <div className="size-8">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>flutter_dash</span>
          </div>
          <h2 className="text-[#181115] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Elcorn Image</h2>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a className="text-primary text-sm font-semibold leading-normal border-b-2 border-primary" href="#">Dashboard</a>
          <a className="text-[#181115] dark:text-white/70 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Portfolio</a>
          <a className="text-[#181115] dark:text-white/70 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Monday Logs</a>
          <a className="text-[#181115] dark:text-white/70 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Analytics</a>
        </nav>
      </div>
      <div className="flex flex-1 justify-end gap-6 items-center">
        <label className="flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-[#8a607b] flex border-none bg-[#f5f0f3] dark:bg-[#3d2a37] items-center justify-center pl-4 rounded-l-lg">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              placeholder="Search boards..."
              className="form-input flex w-full min-w-0 flex-1 border-none bg-[#f5f0f3] dark:bg-[#3d2a37] text-[#181115] dark:text-white focus:ring-0 h-full placeholder:text-[#8a607b] px-4 rounded-r-lg text-sm"
            />
          </div>
        </label>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#f5f0f3] dark:bg-[#3d2a37] text-[#181115] dark:text-white">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHec8uzjbni_H36sf2-PFIJj_G0a1XoJtTMbzHWrvCay1x2_3OMeVrfIv9JitF0S6AbZ1DV7NFXnxctxWNnmbKdnRuAyKUDKmqsfzCNuwjoO3VGEMux15lMyf625lsO_doYbEwz8Iw2sqVl1bBf88IrsPCMJh79U7HkhR_Nfd9AHSaYRvoVkynRX3yybF8d3PIVmAfbGz5aadVmhUZvW4b_rEFyR6azVtQOBrTJZu2XoZrjY-_y-4RqHiSopY4OQllIArEhiOm6fm6")' }}
            data-alt="User profile avatar"
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;