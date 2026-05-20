import { Lock, RefreshCw, Plane, ShieldCheck } from "lucide-react";

export default function FlightPolicies() {
  const policies = [
    {
      icon: RefreshCw,
      label: "Changes",
      value: "Date changes allowed up to 24h before departure (fee may apply).",
    },
    {
      icon: ShieldCheck,
      label: "Cancellation",
      value:
        "Free cancellation within 24h of booking. After that, partial refund only.",
    },
    {
      icon: Plane,
      label: "Airline reliability",
      value: "Lufthansa . on-time performance: strong (last 12 months).",
    },
    {
      icon: Lock,
      label: "Price guarantee",
      value: "Final price confirmed before checkout.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="m-0 font-['Fraunces',serif] text-xl font-normal tracking-[-0.2px] text-[#00242f]">
        Reliability and policies
      </h2>
      <div className="overflow-hidden rounded-[22px] border border-[#d5e0e2] bg-white">
        {policies.map(({ icon: Icon, label, value }, idx) => (
          <div
            key={label}
            className={`flex items-center gap-4 px-5 py-4.5 ${
              idx < 3 ? "border-b border-[#d5e0e2]" : ""
            }`}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-none bg-linear-to-br from-[#4076bd] to-[#1e3a5f]">
              <Icon size={15} color="white" strokeWidth={2} />
            </div>
            <div>
              <p className="m-0 text-[12px] uppercase tracking-[0.6px] text-[#57666b]">
                {label}
              </p>
              <p className="m-0 text-sm font-medium text-[#00242f]">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
