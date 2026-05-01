import React, { useState } from "react";
import {
  Home,
  Folder,
  Bell,
  TrendingUp,
  ChevronRight,
  ChevronDown,
  Signal,
  Wifi,
  BatteryFull,
  AlertTriangle,
  Network,
  Check,
  Lock,
} from "lucide-react";

export default function App() {
  // Authentication and Navigation State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [selectedMonth, setSelectedMonth] = useState("July");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Dynamic Data for Home Chart based on selected month
  const baseBars = [
    30, 32, 40, 55, 75, 85, 80, 70, 58, 55, 60, 75, 95, 120, 110, 100, 95, 105,
    120, 135, 150, 170, 190, 210,
  ];
  const monthIndex = months.indexOf(selectedMonth);
  const chartBars = baseBars.map((val, i) => {
    const offset = (monthIndex - 6) * 12 + (i % 2 === 0 ? 5 : -5);
    return Math.max(10, Math.min(200, val + offset));
  });

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 font-sans">
      {/* Global Style to hide browser scrollbars for clean mockups */}
      <style>{`
        ::-webkit-scrollbar { display: none; }
        * { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Mobile Device Mockup Container */}
      <div className="w-full max-w-[400px] h-[850px] bg-[#12141D] rounded-[45px] shadow-2xl overflow-hidden relative ring-[12px] ring-neutral-900 flex flex-col">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-7 pt-5 pb-2 text-[13px] font-semibold text-white/90 z-20 relative">
          <span>19:43</span>
          <div className="flex gap-2 items-center">
            <Signal size={15} />
            <Wifi size={15} />
            <BatteryFull size={16} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
          {!isAuthenticated ? (
            <LockScreen onUnlock={() => setIsAuthenticated(true)} />
          ) : (
            <>
              {/* Header (Shared across authenticated screens) */}
              <div className="flex justify-between items-center px-6 pt-4 pb-4">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
                    alt="Fratity Deal"
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <h1 className="font-bold text-[17px] text-white leading-tight tracking-wide">
                      Fratity Deal
                    </h1>
                    <p className="text-[#8F9BB3] text-[12px] font-medium mt-0.5">
                      CEO at linagie
                    </p>
                  </div>
                </div>
              </div>

              {/* DYNAMIC CONTENT AREA */}
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {activeTab === "Home" && (
                  <HomeDashboard
                    selectedMonth={selectedMonth}
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}
                    setSelectedMonth={setSelectedMonth}
                    months={months}
                    chartBars={chartBars}
                  />
                )}
                {activeTab === "Projects" && <ProjectsScreen />}
                {activeTab === "Financial Analysis" && <FinancialScreen />}
                {activeTab === "Alerts" && <AlertsScreen />}
              </div>
            </>
          )}
        </div>

        {/* Bottom Navigation Bar */}
        {isAuthenticated && (
          <div className="absolute bottom-0 left-0 w-full bg-[#12141D]/95 backdrop-blur-md border-t border-[#1D202D] pt-3 pb-8 px-6 z-20">
            <div className="flex justify-between items-end">
              <NavItem
                icon={<Home size={22} />}
                label="Home"
                active={activeTab === "Home"}
                onClick={() => setActiveTab("Home")}
              />
              <NavItem
                icon={<Folder size={22} />}
                label="Projects"
                active={activeTab === "Projects"}
                onClick={() => setActiveTab("Projects")}
              />
              <NavItem
                icon={<Bell size={22} />}
                label="Alerts"
                active={activeTab === "Alerts"}
                onClick={() => setActiveTab("Alerts")}
              />
              <NavItem
                icon={<TrendingUp size={22} />}
                label="Finance"
                active={activeTab === "Financial Analysis"}
                onClick={() => setActiveTab("Financial Analysis")}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================
   1. LOCK SCREEN COMPONENT
   ========================================= */
function LockScreen({ onUnlock }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 h-full mt-10 animate-in fade-in duration-500">
      <div className="mb-8 flex flex-col items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
            alt="CEO"
            className="w-20 h-20 rounded-full object-cover border-2 border-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          />
          <div className="absolute bottom-0 right-0 bg-[#1D202D] p-1.5 rounded-full border border-[#2A2E3D]">
            <Lock size={12} className="text-[#3B82F6]" />
          </div>
        </div>
        <h1 className="font-bold text-[22px] text-white mt-4 tracking-wide">
          Fratity Deal
        </h1>
        <p className="text-[#8F9BB3] text-[13px] font-medium mt-1">
          CEO at linagie
        </p>
      </div>

      <div className="w-full bg-[#1D202D] rounded-[24px] p-6 shadow-lg shadow-black/10">
        <div className="space-y-5">
          <div>
            <div className="mb-2">
              <label className="text-[#8F9BB3] text-[12px] font-medium block">
                Master Password
              </label>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#12141D] border border-[#2A2E3D] text-white text-[16px] rounded-xl px-4 py-3.5 outline-none focus:border-[#3B82F6] transition-colors tracking-[0.3em]"
            />
          </div>

          <button
            onClick={onUnlock}
            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold text-[15px] py-3.5 rounded-xl mt-6 transition-colors shadow-lg shadow-blue-500/20 flex justify-center items-center gap-2"
          >
            <Lock size={18} strokeWidth={2.5} />
            Unlock Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   2. HOME DASHBOARD COMPONENT
   ========================================= */
function HomeDashboard({
  selectedMonth,
  isDropdownOpen,
  setIsDropdownOpen,
  setSelectedMonth,
  months,
  chartBars,
}) {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 px-6 mt-2">
        <div className="bg-[#6B373A] rounded-[20px] p-4 flex flex-col justify-between h-[120px] shadow-lg shadow-red-900/20">
          <span className="text-[12px] font-medium text-red-100/70">
            Revenue
          </span>
          <span className="text-[22px] font-bold text-white tracking-tight mt-1">
            $4.2M
          </span>
          <span className="text-[10px] font-medium text-red-200 mt-2">
            Increase: 15%
          </span>
        </div>
        <div className="bg-[#1D202D] rounded-[20px] p-4 flex flex-col justify-between h-[120px]">
          <span className="text-[12px] font-medium text-gray-400">
            KPI Rate
          </span>
          <span className="text-[22px] font-bold text-white tracking-tight mt-1">
            10.14
          </span>
          <span className="text-[10px] font-medium text-gray-400 mt-2">
            Rise: 8.08%
          </span>
        </div>
        <div className="bg-[#334668] rounded-[20px] p-4 flex flex-col justify-between h-[120px] shadow-lg shadow-blue-900/20">
          <span className="text-[12px] font-medium text-blue-100/70">
            Margin
          </span>
          <span className="text-[22px] font-bold text-white tracking-tight mt-1">
            1,796
          </span>
          <span className="text-[10px] font-medium text-blue-200 mt-2">
            Target: 33%
          </span>
        </div>
        <div className="bg-[#1D202D] rounded-[20px] p-4 flex flex-col justify-between h-[110px]">
          <span className="text-[12px] font-medium text-gray-400 leading-snug">
            Gross
            <br />
            Profit
          </span>
          <span className="text-[18px] font-bold text-white tracking-tight">
            $93.3k
          </span>
        </div>
        <div className="bg-[#1D202D] rounded-[20px] p-4 flex flex-col justify-between h-[110px]">
          <span className="text-[12px] font-medium text-gray-400 leading-snug">
            Net
            <br />
            Income
          </span>
          <span className="text-[18px] font-bold text-white tracking-tight">
            $40.2k
          </span>
        </div>
        <div className="bg-[#1D202D] rounded-[20px] p-4 flex flex-col justify-between h-[110px]">
          <span className="text-[12px] font-medium text-gray-400 leading-snug">
            Total
            <br />
            Reach
          </span>
          <span className="text-[18px] font-bold text-white tracking-tight">
            2,969
          </span>
        </div>
      </div>

      <div className="mt-8 px-6">
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-[17px] font-bold text-white hover:text-gray-300 transition-colors"
            >
              {selectedMonth} Summary{" "}
              <ChevronDown
                size={18}
                className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-[#1D202D] border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md">
                <div className="max-h-52 overflow-y-auto scrollbar-hide py-1">
                  {months.map((month) => (
                    <button
                      key={month}
                      onClick={() => {
                        setSelectedMonth(month);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${selectedMonth === month ? "text-white bg-[#2A2E3D]" : "text-gray-400 hover:text-white hover:bg-[#2A2E3D]/50"}`}
                    >
                      {month}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button className="bg-[#272C3F] hover:bg-[#323850] transition-colors p-2 rounded-full flex items-center justify-center text-white">
              <ChevronRight size={16} strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="w-full h-[220px] relative mt-4">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
            {[80, 60, 40, 20].map((val) => (
              <div key={val} className="flex items-center w-full">
                <span className="text-[10px] text-[#4A5568] w-6">{val}k</span>
                <div className="flex-1 h-[1px] bg-[#2A2E3D] ml-2"></div>
              </div>
            ))}
          </div>
          <div className="w-full h-full pl-8 pb-6 relative">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 240 200"
              preserveAspectRatio="none"
              className="overflow-visible transition-all duration-500"
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7B31FF" />
                  <stop offset="50%" stopColor="#FF3366" />
                  <stop offset="100%" stopColor="#FF8A00" />
                </linearGradient>
              </defs>
              {chartBars.map((height, i) => (
                <rect
                  key={i}
                  x={i * 10}
                  y={200 - height}
                  width={8}
                  height={height}
                  fill="url(#barGradient)"
                  opacity={0.7}
                  rx="2"
                  className="transition-all duration-500 ease-in-out"
                />
              ))}
              <path
                d={`M 4 ${200 - chartBars[0]} ${chartBars.map((h, i) => `L ${i * 10 + 4} ${200 - h}`).join(" ")}`}
                fill="none"
                stroke="#FF8A00"
                strokeWidth="2.5"
                className="drop-shadow-lg transition-all duration-500 ease-in-out"
                style={{
                  filter: "drop-shadow(0px 4px 6px rgba(255, 138, 0, 0.4))",
                }}
              />
            </svg>
          </div>
          <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[10px] text-[#4A5568] px-2">
            <span>1</span>
            <span>3</span>
            <span>5</span>
            <span>7</span>
            <span>9</span>
            <span>11</span>
            <span>12</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* =========================================
   3. PROJECTS SCREEN COMPONENT
   ========================================= */
function ProjectsScreen() {
  return (
    <div className="px-6 mt-2">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-[22px] font-bold text-white tracking-wide">
          Projects
        </h1>
      </div>
      <p className="text-[#8F9BB3] text-[11px] uppercase tracking-[0.15em] font-semibold mb-6">
        Active Development Tracks
      </p>

      <div className="space-y-3">
        <ProjectCard
          percent={23}
          title="Alpha Phase"
          subtitle="Milestone"
          color="bg-[#EF233C]"
        />
        <ProjectCard
          percent={27}
          title="Beta Release"
          subtitle="Milestone"
          color="bg-[#F77F00]"
        />
        <ProjectCard
          percent={34}
          title="Core Project"
          subtitle="Milestone"
          color="bg-[#F77F00]"
        />
      </div>

      <div className="bg-[#1D202D] rounded-[24px] p-5 mt-5">
        <div className="flex justify-between text-[#8F9BB3] text-[12px] font-medium mb-5">
          <span>Alpha Market Launch</span>
          <span>Priority</span>
        </div>
        <div className="space-y-4">
          <ProgressBar
            segments={[
              { w: "35%", c: "bg-[#4ADE80]" },
              { w: "12%", c: "bg-[#D4E157]", offset: "5%" },
            ]}
            val="160%"
            valColor="text-[#4ADE80]"
          />
          <ProgressBar
            segments={[
              { w: "25%", c: "bg-[#4ADE80]" },
              { w: "25%", c: "bg-[#FDD835]", offset: "5%" },
            ]}
            val="200%"
            valColor="text-[#D4E157]"
          />
          <ProgressBar
            segments={[{ w: "40%", c: "bg-[#4ADE80]" }]}
            val="174%"
            valColor="text-[#4ADE80]"
          />
          <ProgressBar
            segments={[{ w: "25%", c: "bg-[#4ADE80]" }]}
            val="100%"
            valColor="text-[#4ADE80]"
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================
   4. FINANCIAL SCREEN COMPONENT
   ========================================= */
function FinancialScreen() {
  return (
    <div className="px-6 mt-2">
      <div className="flex justify-center items-center mb-8">
        <h2 className="text-[20px] font-bold text-white tracking-wide">
          Financial Figures
        </h2>
      </div>

      <div className="flex justify-center mb-10 relative">
        <div className="w-[220px] h-[220px] relative">
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "conic-gradient(from 200deg, #4ADE80 0% 30%, #38BDF8 30% 60%, #818CF8 60% 75%, #F43F5E 75% 90%, #FBBF24 90% 100%)",
            }}
          ></div>
          <div className="absolute inset-0 m-auto w-[110px] h-[110px] bg-[#12141D] rounded-full shadow-[inset_0px_4px_10px_rgba(0,0,0,0.5)]"></div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[18px] font-bold text-white">Marketing Spend</h3>
        <div className="bg-[#2A2E3D] hover:bg-[#323850] cursor-pointer transition-colors p-1.5 rounded-full flex items-center justify-center text-white">
          <ChevronRight size={16} strokeWidth={3} />
        </div>
      </div>

      <div className="space-y-0">
        <FinancialRow
          title="Total Budget Allocation"
          subtitle="$391K / Q3 Target"
          value="+70.5%"
          valueColor="text-[#4ADE80]"
        />
        <FinancialRow
          title="Current Q3 Spend"
          subtitle="$315K - Used"
          value="$147K  +50%"
          valueColor="text-[#4ADE80]"
        />
        <FinancialRow
          title="R&D Allocation"
          subtitle="Fixed Asset Transfer"
          value="$36.3K  -36%"
          valueColor="text-[#EF233C]"
          noBorder={true}
        />
      </div>
    </div>
  );
}

/* =========================================
   5. ALERTS SCREEN COMPONENT
   ========================================= */
function AlertsScreen() {
  return (
    <div className="px-6 mt-2 pb-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[26px] font-bold text-white tracking-wide leading-tight">
            Alerts
          </h1>
          <p className="text-[#8F9BB3] text-[14px] font-medium mt-0.5">
            Notifications
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <AlertCard
          icon={AlertTriangle}
          iconColor="bg-[#EF233C]"
          title="Revenue Dip Detected"
          desc1="Underlying cause undetermined"
          desc2="Server traffic normal"
          time="16:34"
          extraRight="Action"
        />
        <AlertCard
          icon={Network}
          iconColor="bg-[#3B82F6]"
          title="Quarterly Report Ready"
          desc1="Generated automatically"
          desc2="Saved to secure cloud"
          time="14:15"
          extraRight="View"
        />
        <AlertCard
          icon={Check}
          iconColor="bg-[#22C55E]"
          title="Server Maintenance Done"
          desc1="No further action required"
          desc2="All nodes operational"
          time="09:20"
          extraRight="Logged"
        />
        <AlertCard
          icon={Check}
          iconColor="bg-[#22C55E]"
          title="Project Alpha Budget Approved"
          desc1="Team meeting scheduled"
          desc2="Funds allocated for Q4"
          time="Yesterday"
          extraRight="Done"
        />
      </div>
    </div>
  );
}

/* =========================================
   HELPER UI COMPONENTS
   ========================================= */
function NavItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 cursor-pointer transition-all duration-300 w-[70px] ${
        active ? "text-white scale-105" : "text-[#5F6A80] hover:text-[#8F9BB3]"
      }`}
    >
      <div
        className={`${active ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" : ""}`}
      >
        {icon}
      </div>
      <span className="text-[10px] font-medium text-center leading-tight">
        {label}
      </span>
    </div>
  );
}

function ProjectCard({ percent, title, subtitle, color }) {
  return (
    <div className="bg-[#1D202D] hover:bg-[#232736] transition-colors rounded-[20px] p-4 flex items-center justify-between cursor-pointer group">
      <div className="flex items-center gap-4">
        <div
          className={`w-[46px] h-[46px] rounded-full flex items-center justify-center text-white font-bold text-[14px] ${color} shadow-lg`}
        >
          {percent}%
        </div>
        <div>
          <h3 className="text-white font-bold text-[15px]">{title}</h3>
          <p className="text-[#8F9BB3] text-[11px] mt-0.5">{subtitle}</p>
        </div>
      </div>
      <ChevronRight
        className="text-[#5F6A80] group-hover:text-white transition-colors"
        size={20}
      />
    </div>
  );
}

function ProgressBar({ segments, val, valColor }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 h-3 bg-[#2A2E3D] rounded-full flex items-center overflow-hidden">
        {segments.map((seg, i) => (
          <div
            key={i}
            className={`h-full rounded-full ${seg.c}`}
            style={{ width: seg.w, marginLeft: seg.offset || "0%" }}
          />
        ))}
      </div>
      <span className={`text-[13px] font-bold w-10 text-right ${valColor}`}>
        {val}
      </span>
    </div>
  );
}

function FinancialRow({ title, subtitle, value, valueColor, noBorder }) {
  return (
    <div
      className={`py-4 flex justify-between items-center ${noBorder ? "" : "border-b border-[#2A2E3D]"}`}
    >
      <div>
        <h4 className="text-white font-bold text-[15px]">{title}</h4>
        <p className="text-[#8F9BB3] text-[12px] mt-0.5">{subtitle}</p>
      </div>
      <div className={`font-bold text-[15px] ${valueColor}`}>{value}</div>
    </div>
  );
}

function AlertCard({
  icon: Icon,
  iconColor,
  title,
  desc1,
  desc2,
  time,
  extraRight,
}) {
  return (
    <div className="bg-[#1D202D] hover:bg-[#232736] transition-colors rounded-[24px] p-4 flex gap-4 cursor-pointer shadow-lg shadow-black/10">
      <div
        className={`w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0 ${iconColor} text-white shadow-lg`}
      >
        <Icon size={22} strokeWidth={2.5} />
      </div>
      <div className="flex-1 flex justify-between pt-1">
        <div>
          <h3 className="text-white font-bold text-[15px] leading-tight">
            {title}
          </h3>
          <p className="text-[#8F9BB3] text-[12px] mt-1.5">{desc1}</p>
          <p className="text-[#8F9BB3] text-[12px] mt-0.5">{desc2}</p>
        </div>
        <div className="text-right flex flex-col items-end justify-between">
          <span className="text-[#5F6A80] text-[12px] font-medium">{time}</span>
          <span className="text-[#8F9BB3] text-[11px] font-medium">
            {extraRight}
          </span>
        </div>
      </div>
    </div>
  );
}
