import { Plane } from "lucide-react";

export default function FlightFooter() {
  return (
    <footer className="mt-8 w-full border-t border-[#d4dbde] bg-[#FFFFFF] px-4 sm:px-6 lg:px-17 py-4 font-[Inter,sans-serif] text-[#7a8286]">
      
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Logo - centered on mobile */}
        <a href="#" className="flex items-center gap-2 no-underline justify-center sm:justify-start">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e3a5f] text-white">
            <Plane size={16} />
          </span>

          <span className="text-[18px] leading-none tracking-[-0.2px] text-[#203a5c]">
            Tr<span className="text-[#f1c33a]">A</span>veller
          </span>
        </a>

        {/* Text */}
        <p className="text-center text-sm leading-5 text-[#7b8285] sm:text-[14px]">
          © 2026 TrAVeller.ai · Stop searching. Start deciding.
        </p>

        <p className="text-center text-sm text-[#7a8286] sm:text-right">
          For agencies
        </p>

      </div>
    </footer>
  );
}