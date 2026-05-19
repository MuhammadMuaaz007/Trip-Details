import { ArrowLeft } from "lucide-react";

export default function FlightHeader() {
  return (
    <header className="w-full h-[53px] bg-[#ffffff] border-b border-[#D5E0E2] px-4 xl:px-auto">
      <div className="max-w-5xl w-full mx-auto px-6 py-4 flex items-center justify-between h-full">
        <a href="#" className="flex items-center gap-2 text-sm text-[#57666b]">
          <ArrowLeft size={16} />
          Back to results
        </a>
        <div />
      </div>
    </header>
  );
}
