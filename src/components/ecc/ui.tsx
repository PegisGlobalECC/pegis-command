import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Severity, Health } from "@/data/ecc";

export function SectionHeader({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? (
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-1 text-lg font-semibold">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export function Card({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "brand" | "info";
}) {
  return (
    <div
      className={cn(
        "ecc-card p-5",
        tone === "brand" && "border-orange-200 bg-orange-50",
        tone === "info" && "border-blue-100 bg-blue-50",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SummaryCard({
  label,
  value,
  note,
  tone = "default",
}: {
  label: string;
  value: string;
  note?: string;
  tone?: "default" | "brand" | "critical" | "warning" | "info";
}) {
  const accent = {
    default: "bg-border",
    brand: "bg-brand",
    critical: "bg-critical",
    warning: "bg-warning",
    info: "bg-primary",
  }[tone];

  return (
    <div className="ecc-card relative overflow-hidden p-5">
      <span className={cn("absolute inset-y-0 left-0 w-[3px]", accent)} />
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
      {note ? <p className="mt-2 text-sm text-muted-foreground">{note}</p> : null}
    </div>
  );
}

const severityStyles: Record<Severity, string> = {
  critical: "bg-critical-soft text-critical border-critical/25",
  high: "bg-orange-50 text-brand border-orange-200",
  medium: "bg-warning-soft text-warning border-warning/25",
  low: "bg-blue-50 text-primary border-blue-200",
};

export function SeverityTag({ severity }: { severity: Severity }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em]",
        severityStyles[severity],
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {severity}
    </span>
  );
}

const healthStyles: Record<Health, { label: string; className: string }> = {
  "on-track": { label: "On track", className: "bg-success-soft text-success border-success/25" },
  "at-risk": { label: "At risk", className: "bg-warning-soft text-warning border-warning/30" },
  "off-track": { label: "Off track", className: "bg-critical-soft text-critical border-critical/25" },
  "on-hold": { label: "On hold", className: "bg-muted text-muted-foreground border-border" },
  completed: { label: "Completed", className: "bg-blue-50 text-primary border-blue-200" },
};

export function HealthTag({ health }: { health: Health }) {
  const s = healthStyles[health];
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium", s.className)}>
      {s.label}
    </span>
  );
}

export function StatusPill({ label }: { label: string }) {
  const l = label.toLowerCase();
  const tone = l.includes("overdue") || l.includes("blocked")
    ? "bg-critical-soft text-critical border-critical/25"
    : l.includes("awaiting") || l.includes("not started")
      ? "bg-warning-soft text-warning border-warning/25"
      : l.includes("progress")
        ? "bg-blue-50 text-primary border-blue-200"
        : "bg-muted text-muted-foreground border-border";
  return (
    <span className={cn("inline-flex rounded-full border px-2.5 py-1 text-xs font-medium", tone)}>
      {label}
    </span>
  );
}

export function Meter({ value, tone = "default" }: { value: number; tone?: "default" | "warn" | "bad" }) {
  const bar = tone === "bad" ? "bg-critical" : tone === "warn" ? "bg-brand" : "bg-primary";
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
      <div className={cn("h-full rounded-full", bar)} style={{ width: `${value}%` }} />
    </div>
  );
}

export function AiNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">Why this matters</p>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{children}</p>
    </div>
  );
}

export function ActionButton({
  children,
  variant = "primary",
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" | "brand" }) {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "brand" && "bg-brand text-brand-foreground hover:bg-brand/90",
        variant === "ghost" && "border border-border bg-card text-foreground hover:bg-accent",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function Table({ head, children }: { head: string[]; children: ReactNode }) {
  return (
    <div className="ecc-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-sm">
          <thead>
            <tr className="border-b border-border bg-surface">
              {head.map((h) => (
                <th
                  key={h}
                  className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">{children}</tbody>
        </table>
      </div>
    </div>
  );
}
