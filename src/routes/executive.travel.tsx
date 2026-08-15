import { createFileRoute } from "@tanstack/react-router";
import { Card, SectionHeader, SummaryCard } from "@/components/ecc/ui";
import { travel } from "@/data/ecc";

export const Route = createFileRoute("/executive/travel")({
  component: Travel,
});

function Travel() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Travel</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Upcoming itinerary</h1>
        <p className="mt-2 text-muted-foreground">
          Flights, accommodation, ground transport, meetings and documents consolidated per trip.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard label="Trips (30 days)" value="2" note="1 international" />
        <SummaryCard label="Calendar conflicts" value="1" note="Insufficient travel time, 15 Aug" tone="warning" />
        <SummaryCard label="Documents due" value="2" note="Visa letter, insurance" tone="brand" />
        <SummaryCard label="Meetings while travelling" value="8" note="Across both trips" tone="info" />
      </div>

      <div>
        <SectionHeader eyebrow="Itinerary" title="Scheduled trips" />
        <div className="space-y-4">
          {travel.map((t) => (
            <Card key={t.dest}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold">{t.dest}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{t.dates}</p>
                </div>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-primary">
                  {t.meetings} meetings scheduled
                </span>
              </div>
              <dl className="mt-5 grid gap-5 sm:grid-cols-3">
                {[
                  ["Flight", t.flight],
                  ["Hotel", t.hotel],
                  ["Ground transport", "Assigned driver — confirmed"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{k}</dt>
                    <dd className="mt-1.5 text-sm font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          ))}
        </div>
      </div>

      <Card tone="brand">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">Conflict detected</p>
        <p className="mt-2 text-sm">
          Procurement &amp; Mobilisation Board ends 16:30 and the LOS → PHC flight departs 17:15. ECC estimates
          insufficient travel time to the terminal.
        </p>
      </Card>
    </div>
  );
}
