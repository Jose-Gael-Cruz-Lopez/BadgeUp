import { ACCESS_LABEL, STATUS_LABEL, type Conference } from "@/lib/conferences";

/**
 * Renders one section's conferences as a table. Server component — no client
 * interactivity yet. Add filtering/sorting as a client component later.
 */
export function ConferenceTable({ rows }: { rows: Conference[] }) {
  if (rows.length === 0) {
    return <p className="text-sm text-neutral-500">No conferences listed yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-700 text-neutral-400">
            <th className="py-2 pr-4 font-medium">Status</th>
            <th className="py-2 pr-4 font-medium">Conference</th>
            <th className="py-2 pr-4 font-medium">Focus</th>
            <th className="py-2 pr-4 font-medium">Dates &amp; Location</th>
            <th className="py-2 pr-4 font-medium">Access</th>
            <th className="py-2 pr-4 font-medium">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr key={c.name} className="border-b border-neutral-800 align-top">
              <td className="py-2 pr-4 whitespace-nowrap">{STATUS_LABEL[c.status]}</td>
              <td className="py-2 pr-4">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-sky-400 hover:underline"
                >
                  {c.name}
                </a>
              </td>
              <td className="py-2 pr-4 text-neutral-300">{c.focus}</td>
              <td className="py-2 pr-4 text-neutral-300">{c.datesLocation}</td>
              <td className="py-2 pr-4 whitespace-nowrap">
                {c.access.map((a) => ACCESS_LABEL[a]).join(" · ")}
              </td>
              <td className="py-2 pr-4 text-neutral-300">{c.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
