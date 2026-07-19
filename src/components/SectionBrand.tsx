export default function SectionBrand({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 mt-3 ${className}`}>
      <span className="h-px w-6 bg-red/60" />
      <span
        className="font-condensed text-red text-sm sm:text-base uppercase tracking-[0.35em]"
      >
        BODY GARAGE FITNESS CLUB
      </span>
      <span className="h-px w-6 bg-red/60" />
    </div>
  );
}
