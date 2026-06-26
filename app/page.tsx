import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import DashboardCards from "@/components/DashboardCards";
import PaperList from "@/components/PaperFeed";
import PaperTabs from "@/components/PaperTabs";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT NAV SIDEBAR - fixed 200px */}
        <Sidebar />
        
        {/* MAIN SCROLLABLE CONTENT */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[#F9F9F9] px-5 py-4 min-w-0">
          <DashboardCards />
          <PaperTabs />
          <PaperList />
        </main>
        
        {/* RIGHT SIDEBAR - fixed 260px, scrollable */}
        <RightSidebar />
        
      </div>
    </div>
  );
}
