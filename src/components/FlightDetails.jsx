import { useState } from "react";
import {
  Plane,
  Clock,
  ChevronUp,
  ChevronDown,
  Luggage,
  ShieldCheck,
} from "lucide-react";

export default function FlightDetails() {
  const [flightOpen, setFlightOpen] = useState(true);
  const iconBadgeClass =
    "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-none bg-linear-to-br from-[#FDC725] to-[#8B6D12] shadow-[0_18px_17px_0_#0000001A] backdrop-blur-[29.77px]";

  return (
    <div className="font-['Inter',sans-serif] overflow-hidden rounded-[22px] border border-[#d5e0e2] bg-white">
      <button
        type="button"
        onClick={() => setFlightOpen(!flightOpen)}
        className={`flex w-full cursor-pointer items-center justify-between border-none bg-transparent p-5 text-left ${
          flightOpen ? "border-b border-[#d5e0e2]" : ""
        }`}
      >
        <span className="font-[Fraunces,serif] text-xl tracking-[-0.2px] text-[#00242f]">
          Flight details
        </span>
        {flightOpen ? (
          <ChevronUp size={20} color="#57666b" />
        ) : (
          <ChevronDown size={20} color="#57666b" />
        )}
      </button>

      {flightOpen && (
        <>
          {/* Airline Row */}
          <div className="flex items-center gap-4  px-5 py-4.5">
            <div className={iconBadgeClass}>
              <Plane size={15} color="white" strokeWidth={2} />
            </div>
            <div>
              <p className="m-0 text-[12px] uppercase tracking-[0.6px] text-[#57666b]">
                Airline and flight
              </p>
              <p className="m-0 text-sm font-medium text-[#00242f]">
                Lufthansa . LU1422
              </p>
            </div>
          </div>

          {/* Departure/Arrival */}
          <div className="border-b border-[#d5e0e2]">
            <div className="flex items-center gap-4 px-5 py-4.5">
              <div className={iconBadgeClass}>
                <Clock size={15} color="white" strokeWidth={2} />
              </div>
              <div className="flex flex-1 gap-8 ">
                <div className=" w-[50%]">
                  <p className="m-0 text-[12px] uppercase tracking-[0.6px] text-[#57666b]">
                    Departure
                  </p>
                  <p className="m-0 text-sm font-medium text-[#00242f]">
                    2026-06-12 <span className="items-center ">.</span> 09:25
                  </p>
                </div>
                <div className=" w-[50%]">
                  <p className="m-0 text-[12px] uppercase tracking-[0.6px] text-[#57666b]">
                    Arrival
                  </p>
                  <p className="m-0 text-sm font-medium text-[#00242f]">
                    2026-06-12 . 12:55
                  </p>
                </div>
              </div>
            </div>

            {/* Flight Legs */}
            <div className="flex flex-col gap-2 px-9 py-3 border-b border-[#d5e0e2] ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] uppercase tracking-[0.6px] text-[#57666b]">
                    Outbound Flight
                  </span>
                  <span className="text-[12px] text-black/40">. A321</span>
                </div>
                <span className="text-sm font-medium text-[14px] text-[#00242f]">
                  Direct
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex shrink-0 flex-col items-center gap-1">
                  <span className="text-[20px] font-bold text-black">
                    11:20
                  </span>
                  <span className="text-[15px] font-extrabold text-[#FDC725]">
                    AMS
                  </span>
                </div>
                <div className="flex-1 border-t border-[#d5e0e2]" />
                <span className="shrink-0 text-[11px] text-black/45">
                  3h 25m
                </span>
                <div className="flex-1 border-t border-[#d5e0e2]" />
                <div className="flex shrink-0 flex-col items-center gap-1">
                  <span className="text-[20px] font-bold text-black">
                    15:45
                  </span>
                  <span className="text-[15px] font-extrabold text-[#FDC725]">
                    BCN
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 px-9 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] uppercase tracking-[0.6px] text-[#57666b]">
                    Return Flight
                  </span>
                  <span className="text-[12px] text-black/40">. A321</span>
                </div>
                <span className="text-sm font-medium text-[14px] text-[#00242f]">
                  1 Stop
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex shrink-0 flex-col items-center gap-1">
                  <span className="text-[20px] font-bold text-black">
                    11:20
                  </span>
                  <span className="text-[15px] font-extrabold text-[#FDC725]">
                    BCN
                  </span>
                </div>
                <div className="flex-1 border-t border-[#d5e0e2]" />
                <span className="shrink-0 text-[11px] text-black/45">
                  3h 25m
                </span>
                <div className="flex-1 border-t border-[#d5e0e2]" />
                <div className="flex shrink-0 flex-col items-center gap-1">
                  <span className="text-[20px] font-bold text-black">
                    15:45
                  </span>
                  <span className="text-[15px] font-extrabold text-[#FDC725]">
                    AMS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Baggage & Cabin */}
          <div className="flex items-center gap-4 border-b border-[#d5e0e2] px-5 py-4">
            <div className={iconBadgeClass}>
              <Luggage size={15} color="white" strokeWidth={2} />
            </div>
            <div>
              <p className="m-0 text-[11px] uppercase tracking-[0.6px] text-[#57666b]">
                Baggage
              </p>
              <p className="m-0 text-sm font-medium text-[#00242f]">
                1 cabin + 1 checked bag (23kg) included
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-5 py-4.5">
            <div className={iconBadgeClass}>
              <ShieldCheck size={15} color="white" strokeWidth={2} />
            </div>
            <div>
              <p className="m-0 text-[11px] uppercase tracking-[0.6px] text-[#57666b]">
                Cabin class
              </p>
              <p className="m-0 text-sm font-medium text-[#00242f]">Economy</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
