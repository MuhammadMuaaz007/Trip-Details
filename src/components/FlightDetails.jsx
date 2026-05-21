import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import {
  flightSummaryRows,
  flightLegs,
  flightInfoRows,
} from "../static-data/data";

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
          {flightSummaryRows.map((row) => {
            const Icon = row.icon;

            if (row.kind === "airline") {
              return (
                <div
                  key={row.kind}
                  className="flex items-center gap-4 px-5 py-4.5"
                >
                  <div className={iconBadgeClass}>
                    <Icon size={15} color="white" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="m-0 text-[12px] uppercase tracking-[0.6px] text-[#57666b]">
                      {row.label}
                    </p>
                    <p className="m-0 text-sm font-medium text-[#00242f]">
                      {row.value}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div key={row.kind} className="border-b border-[#d5e0e2]">
                <div className="flex items-center gap-4 px-5 py-4.5">
                  <div className={iconBadgeClass}>
                    <Icon size={15} color="white" strokeWidth={2} />
                  </div>
                  <div className="flex flex-1 gap-8 ">
                    <div className=" w-[50%]">
                      <p className="m-0 text-[12px] uppercase tracking-[0.6px] text-[#57666b]">
                        {row.labelLeft}
                      </p>
                      <p className="m-0 text-sm font-medium text-[#00242f]">
                        {row.valueLeft}
                      </p>
                    </div>
                    <div className=" w-[50%]">
                      <p className="m-0 text-[12px] uppercase tracking-[0.6px] text-[#57666b]">
                        {row.labelRight}
                      </p>
                      <p className="m-0 text-sm font-medium text-[#00242f]">
                        {row.valueRight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Flight Legs */}
                {flightLegs.map((leg) => (
                  <div
                    key={leg.title}
                    className={`flex flex-col gap-2 px-9 py-3 ${
                      leg.hasBottomBorder ? "border-b border-[#d5e0e2]" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[12px] uppercase tracking-[0.6px] text-[#57666b]">
                          {leg.title}
                        </span>
                        <span className="text-[12px] text-black/40">
                          {leg.badge}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-[14px] text-[#00242f]">
                        {leg.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex shrink-0 flex-col items-center gap-1">
                        <span className="text-[20px] font-bold text-black">
                          {leg.departureTime}
                        </span>
                        <span className="text-[15px] font-extrabold text-[#FDC725]">
                          {leg.departureCode}
                        </span>
                      </div>
                      <div className="flex-1 border-t border-[#d5e0e2]" />
                      <span className="shrink-0 text-[11px] text-black/45">
                        {leg.duration}
                      </span>
                      <div className="flex-1 border-t border-[#d5e0e2]" />
                      <div className="flex shrink-0 flex-col items-center gap-1">
                        <span className="text-[20px] font-bold text-black">
                          {leg.arrivalTime}
                        </span>
                        <span className="text-[15px] font-extrabold text-[#FDC725]">
                          {leg.arrivalCode}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}

          {flightInfoRows.map(({ icon: Icon, label, value }, index) => (
            <div
              key={label}
              className={`flex items-center gap-4 px-5 ${
                index === 0 ? "border-b border-[#d5e0e2] py-4" : "py-4.5"
              }`}
            >
              <div className={iconBadgeClass}>
                <Icon size={15} color="white" strokeWidth={2} />
              </div>
              <div>
                <p className="m-0 text-[11px] uppercase tracking-[0.6px] text-[#57666b]">
                  {label}
                </p>
                <p className="m-0 text-sm font-medium text-[#00242f]">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
