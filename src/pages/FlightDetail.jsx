import FlightHeader from "../components/FlightHeader";
import FlightFooter from "../components/FlightFooter";
import FlightContent from "../components/FlightContent";
import PriceCard from "../components/PriceCard";

export default function FlightDetail() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-full flex-col bg-[#f6fbfb] font-sans">
      <FlightHeader />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-wrap items-start justify-center gap-6 px-6 py-10">
        <FlightContent />
        <PriceCard />
      </main>

      <FlightFooter />
    </div>
  );
}
