import { Calendar, Clock, Plane, Sparkles } from "lucide-react";
import imgLisbon from "../assets/image.jpg";
import FlightDetails from "./FlightDetails";
import FlightPolicies from "./FlightPolicies";

const flightMeta = [
  { id: 1, Icon: Calendar, text: "2026-06-12 to 2026-06-19" },
  { id: 2, Icon: Clock, text: "3.5h . Direct" },
  { id: 3, Icon: Plane, text: "Lufthansa . LU1422" },
];

export default function FlightContent() {
  return (
    <div className="flex  w-xl flex-col gap-8">
      {/* image container */}
      <div className="overflow-hidden rounded-[26px] border border-[#d5e0e2] p-px">
        <div className="h-72.25 overflow-hidden rounded-[25px]">
          <img
            src={imgLisbon}
            alt="Lisbon"
            className="mt-[-25%] h-[150%] w-full object-cover"
          />
        </div>
      </div>

      {/* flight summary */}
      <div className="flex flex-col gap-2">
        <p className="m-0  w-full text-xs font-medium uppercase tracking-[2.16px] text-[#f6c330]">
          Best value
        </p>

        <h1 className="m-0 font-['Fraunces',serif] text-[48px] leading-12 tracking-[-0.48px] text-[#00242f]">
          Lisbon, Portugal
        </h1>

        <div className="flex flex-wrap items-center gap-5 pt-1">
          {flightMeta.map(({ id, Icon, text }) => (
            <div key={id} className="flex items-center gap-1.5">
              <Icon size={15} color="#57666b" />
              <span className="text-sm text-[#57666b]">{text}</span>
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-3 pt-2 ">
          <span className="font-['Fraunces',serif] text-[30px] tracking-[-0.3px] text-[#00242f]">
            €568
          </span>
          <span className="text-sm text-[#57666b]">total . all-in</span>
        </div>
      </div>

      {/*  recommendation */}

      <div className="rounded-[22px] border border-[#F6C330]/30 bg-[#F6C330]/5 p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
            <Sparkles size={16} color="#FDC725" />
          </div>
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-[1.92px] text-[#FDC725]">
              Why our AI picked this
            </p>
            <p className="m-0 text-base leading-6.5 text-[#00242F]/90">
              Best balance between price and comfort across your shortlist.
            </p>
          </div>
        </div>
      </div>

      <FlightDetails />
      <FlightPolicies />
    </div>
  );
}
