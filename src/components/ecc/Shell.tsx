import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Bell, Menu, Search, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/pegis-logo.png.asset.json";

export type NavItem = { label: string; to: string };

export type PortalConfig = {
  key: string;
  name: string;
  subtitle: string;
  user: string;
  role: string;
  nav: NavItem[];
  density: "curated" | "operational" | "simple";
};

function Sidebar({ portal, onNavigate }: { portal: PortalConfig; onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex h-full flex-col bg-[var(--surface-strong)] text-white/85">
      <div className="flex items-center gap-3 px-6 py-6">
        <img src={logo.url} alt="Pegis Global" className="size-9 rounded-md bg-white p-1" />
        <div>
          <p className="text-sm font-semibold tracking-tight text-white">Pegis Global</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
            {portal.name}
          </p>
        </div>
        {onNavigate ? (
          <button onClick={onNavigate} className="ml-auto text-white/60 lg:hidden" aria-label="Close menu">
            <X className="size-5" />
          </button>
        ) : null}
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 pb-4">
        {portal.nav.map((item) => {
          const active = pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className={cn(
                "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                active
                  ? "bg-white/10 font-medium text-white shadow-[inset_2px_0_0_0_var(--orange-500)]"
                  : "text-white/65 hover:bg-white/5 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 px-6 py-5">
        <p className="text-sm font-medium text-white">{portal.user}</p>
        <p className="text-xs text-white/50">{portal.role}</p>
        <Link to="/" className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-white/55 hover:text-white">
          Switch portal
        </Link>
      </div>
    </div>
  );
}

export function Shell({ portal, children }: { portal: PortalConfig; children?: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 lg:block">
        <Sidebar portal={portal} />
      </aside>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-72">
            <Sidebar portal={portal} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
          <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-5 py-3.5 sm:px-8">
            <button
              onClick={() => setOpen(true)}
              className="rounded-md border border-border p-2 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </button>

            <label className="relative hidden flex-1 max-w-md items-center sm:flex">
              <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search projects, clients, decisions…"
                className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-ring/30"
              />
            </label>

            <div className="ml-auto flex items-center gap-2">
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:inline">
                Sat 15 Aug · 08:12 WAT
              </span>
              <button
                className="inline-flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-sm font-medium text-brand"
                type="button"
              >
                <Sparkles className="size-4" />
                <span className="hidden sm:inline">AI Assistant</span>
              </button>
              <button className="relative rounded-lg border border-border p-2" aria-label="Notifications">
                <Bell className="size-4" />
                <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-brand" />
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8">{children ?? <Outlet />}</main>
      </div>
    </div>
  );
}
