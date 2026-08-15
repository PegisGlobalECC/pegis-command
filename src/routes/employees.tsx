import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/ecc/Shell";
import { employeesPortal } from "@/components/ecc/portals";

export const Route = createFileRoute("/employees")({
  head: () => ({
    meta: [
      { title: "Employees Portal — Pegis Global ECC" },
      {
        name: "description",
        content:
          "Simple execution surface for Pegis Global employees: assigned tasks, evidence upload, blockers and workflow-routed requests.",
      },
      { property: "og:title", content: "Employees Portal — Pegis Global ECC" },
      { property: "og:description", content: "Your tasks, your evidence, your requests — nothing else." },
    ],
  }),
  component: () => <Shell portal={employeesPortal} />,
});
