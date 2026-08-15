import { createFileRoute } from "@tanstack/react-router";
import { Card, HealthTag, Meter, SectionHeader, SummaryCard, Table } from "@/components/ecc/ui";
import { projects } from "@/data/ecc";

export const Route = createFileRoute("/executive/projects")({
  component: Projects,
});

const riskRegister = [
  { project: "Chevron Offshore Support", risk: "Subsea tooling unavailable until 22 Aug", cat: "Equipment", sev: "Critical", owner: "Operations Manager" },
  { project: "Onshore Pipeline Integrity", risk: "Vendor manning below contracted ratio", cat: "Vendor", sev: "High", owner: "Projects Director" },
  { project: "Rig 4 Crew Mobilisation", risk: "HSE clearance outstanding for 4 crew", cat: "HSE", sev: "High", owner: "HSE Manager" },
  { project: "Escravos Terminal Maintenance", risk: "Weather window narrowing for barge move", cat: "Weather", sev: "Medium", owner: "Logistics Lead" },
];

function Projects() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Project portfolio</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Delivery by exception</h1>
        <p className="mt-2 text-muted-foreground">
          Executive view of the portfolio. Detail remains with the accountable project manager.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard label="Active projects" value="18" note="5 shown in executive scope" />
        <SummaryCard label="At risk" value="2" note="Equipment & weather driven" tone="warning" />
        <SummaryCard label="Off track" value="1" note="Vendor performance" tone="critical" />
        <SummaryCard label="Portfolio value" value="₦5.2bn" note="Contract value under delivery" tone="info" />
      </div>

      <div>
        <SectionHeader eyebrow="Portfolio" title="All executive-visible projects" />
        <Table head={["Project", "Client", "Status", "Progress", "Budget", "Spend", "Deadline", "Primary risk"]}>
          {projects.map((p) => (
            <tr key={p.id} className="hover:bg-surface">
              <td className="px-5 py-4 font-medium">{p.name}</td>
              <td className="px-5 py-4 text-muted-foreground">{p.client}</td>
              <td className="px-5 py-4"><HealthTag health={p.health} /></td>
              <td className="px-5 py-4">
                <div className="flex w-28 items-center gap-2">
                  <Meter value={p.progress} tone={p.health === "off-track" ? "bad" : p.health === "at-risk" ? "warn" : "default"} />
                  <span className="font-mono text-xs text-muted-foreground">{p.progress}%</span>
                </div>
              </td>
              <td className="px-5 py-4 text-muted-foreground">{p.budget}</td>
              <td className="px-5 py-4 text-muted-foreground">{p.spend}</td>
              <td className="px-5 py-4 text-muted-foreground">{p.deadline}</td>
              <td className="px-5 py-4 text-muted-foreground">{p.risk}</td>
            </tr>
          ))}
        </Table>
      </div>

      <div>
        <SectionHeader eyebrow="Risk register" title="Escalated to executive" />
        <div className="grid gap-4 md:grid-cols-2">
          {riskRegister.map((r) => (
            <Card key={r.risk} className={r.sev === "Critical" ? "border-orange-200 bg-orange-50" : ""}>
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {r.cat}
                </p>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand">{r.sev}</span>
              </div>
              <h3 className="mt-2 text-sm font-semibold">{r.risk}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {r.project} · Owner: {r.owner}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
