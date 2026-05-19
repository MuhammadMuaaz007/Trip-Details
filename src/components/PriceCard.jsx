export default function PriceCard() {
  return (
    <aside className="sticky top-20 w-full max-w-[376px] shrink-0 self-start px-4 sm:px-0">
      <div className="flex w-full flex-col gap-4 rounded-[22px] border border-[#d5e0e2] bg-white p-5 sm:p-7 shadow-[0px_8px_24px_rgba(0,27,37,0.08)]">
        
        <div className="flex items-start justify-between">
          <span className="text-sm text-[#57666b]">Total</span>
          <span className="font-['Fraunces',serif] text-3xl sm:text-[36px] leading-[46px] tracking-[-0.5px] text-[#00242f] [text-shadow:0px_3px_4px_rgba(0,56,71,0.25)]">
            €568
          </span>
        </div>

        <p className="-mt-2 text-right text-xs text-[#57666b]">
          all taxes &amp; fees included
        </p>

        <div className="w-full sm:w-[326px] flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.05)] px-3 py-2">
          <span className="text-sm font-normal leading-5 text-black text-center">
            Revalidating Price ...
          </span>
        </div>

        <button
          type="button"
          className="w-full sm:w-[326px] h-10 cursor-pointer flex items-center justify-center rounded-full border border-[#3a5f8e] bg-linear-to-b from-[#2f5f97] to-[#214676] shadow-[0px_8px_12px_rgba(0,33,71,0.2)] transition-opacity hover:opacity-90 active:opacity-80"
        >
          <span className="text-sm font-medium text-[#f8fdfd]">
            Continue to booking
          </span>
        </button>

        <p className="text-center w-full sm:w-[326px] text-xs leading-[16.5px] text-[#57666b]">
          You&apos;ll complete booking securely via airline/partner.
        </p>
      </div>
    </aside>
  );
}