import { Clock, CalendarDays } from 'lucide-react';
import SectionBrand from './SectionBrand';

type DayRow = {
  day: string;
  short: string;
  hours: string;
  hoursShort: string;
  closed?: boolean;
};

const SCHEDULE: DayRow[] = [
  { day: 'Sunday', short: 'Sun', hours: '6:00 AM – 9:30 AM', hoursShort: '6:00 AM – 9:30 AM' },
  { day: 'Monday', short: 'Mon', hours: '5:30 AM – 12:00 PM, 4:00 PM – 11:30 PM', hoursShort: '5:30 AM – 12:00 PM' },
  { day: 'Tuesday', short: 'Tue', hours: '5:30 AM – 12:00 PM, 4:00 PM – 11:30 PM', hoursShort: '5:30 AM – 12:00 PM' },
  { day: 'Wednesday', short: 'Wed', hours: '5:30 AM – 12:00 PM, 4:00 PM – 11:30 PM', hoursShort: '5:30 AM – 12:00 PM' },
  { day: 'Thursday', short: 'Thu', hours: '5:30 AM – 12:00 PM, 4:00 PM – 11:30 PM', hoursShort: '5:30 AM – 12:00 PM' },
  { day: 'Friday', short: 'Fri', hours: '5:30 AM – 12:00 PM, 4:00 PM – 11:30 PM', hoursShort: '5:30 AM – 12:00 PM' },
  { day: 'Saturday', short: 'Sat', hours: '5:30 AM – 12:00 PM, 4:00 PM – 9:00 PM', hoursShort: '5:30 AM – 12:00 PM' },
];

// JS getDay(): 0 = Sunday … 6 = Saturday. Our array is already in that order.
const todayIndex = new Date().getDay();

export default function Timings() {
  return (
    <section id="timings" className="relative py-16 sm:py-24 bg-ink-950 overflow-hidden grain">
      {/* Ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-display text-stroke text-[18vw] uppercase leading-none opacity-10 select-none">
          HOURS
        </span>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-red" />
            <span className="font-condensed text-red text-sm tracking-widest uppercase">Open Hours</span>
            <span className="h-px w-10 bg-red" />
          </div>
          <h2 className="reveal delay-1 font-display text-bone-50 text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tightest">
            Gym <span className="text-red">Timings</span>
          </h2>
          <SectionBrand className="reveal delay-2 justify-center" />
          <p className="reveal delay-2 mt-5 text-bone-400 text-base sm:text-lg">
            Plan your training around our weekly schedule. Today's hours are highlighted.
          </p>
        </div>

        {/* Schedule card */}
        <div className="reveal delay-3 bg-ink-900 border border-white/5 rounded-sm overflow-hidden">
          {/* Card header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/5 bg-ink-950/60">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-red/10 border border-red/20 text-red">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-bone-50 text-lg uppercase tracking-tight leading-none">
                  Weekly Schedule
                </h3>
                <p className="text-bone-500 text-[11px] uppercase tracking-wider mt-1">
                  All days · IST
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-bone-400 text-xs uppercase tracking-wider">
              <CalendarDays className="h-4 w-4 text-red" />
              <span>
                Today · <span className="text-red font-medium">{SCHEDULE[todayIndex].day}</span>
              </span>
            </div>
          </div>

          {/* Rows */}
          <ul className="divide-y divide-white/5">
            {SCHEDULE.map((row, i) => {
              const isToday = i === todayIndex;
              return (
                <li
                  key={row.day}
                  className={`reveal delay-${(i % 4) + 1} group relative flex items-center justify-between gap-4 px-6 sm:px-8 py-4 sm:py-5 transition-colors duration-300 ${
                    isToday
                      ? 'bg-red/10 border-l-4 border-red'
                      : 'border-l-4 border-transparent hover:bg-ink-800/60'
                  }`}
                >
                  {/* Day */}
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`font-condensed uppercase tracking-wider text-sm sm:text-base ${
                        isToday ? 'text-red font-bold' : 'text-bone-200 group-hover:text-bone-50'
                      }`}
                    >
                      {row.day}
                    </span>
                    {isToday && (
                      <span className="inline-flex items-center gap-1 bg-red text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                        Today
                      </span>
                    )}
                  </div>

                  {/* Hours */}
                  <div className="text-right min-w-0 flex-shrink-0">
                    <span
                      className={`block text-[11px] sm:text-base font-mono leading-snug text-right ${
                        isToday ? 'text-bone-50 font-bold' : 'text-bone-300'
                      }`}
                    >
                      <span className="sm:hidden flex flex-col items-end gap-1">
                        {row.hours.includes(',') ? (
                          <>
                            <span>{row.hours.split(',')[0].trim()}</span>
                            <span>{row.hours.split(',')[1].trim()}</span>
                          </>
                        ) : (
                          <span>{row.hours}</span>
                        )}
                      </span>
                      <span className="hidden sm:inline">{row.hours}</span>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Footer note */}
          <div className="px-6 sm:px-8 py-4 border-t border-white/5 bg-ink-950/60 flex items-center gap-2 text-bone-500 text-xs uppercase tracking-wider">
            <Clock className="h-3.5 w-3.5 text-red" />
            <span>Hours may vary on public holidays. Call to confirm.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
