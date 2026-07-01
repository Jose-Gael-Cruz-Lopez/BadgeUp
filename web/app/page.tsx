import { ConferenceTable } from "@/components/ConferenceTable";
import { SECTIONS, conferencesBySection } from "@/lib/conferences";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          🎟️ Undergrad Tech Conferences
        </h1>
        <p className="mt-2 text-neutral-400">
          Tech conferences undergrads can actually get into — attend free, win a
          scholarship, or find the student rate.
        </p>
        <p className="mt-4 text-sm text-neutral-500">
          This is a scaffold rendering a subset of the list. The canonical,
          full list lives in{" "}
          <a
            href="https://github.com/Jose-Gael-Cruz-Lopez/conferences#readme"
            className="text-sky-400 hover:underline"
          >
            README.md
          </a>
          . Always verify dates and deadlines on each conference&apos;s official
          site.
        </p>
      </header>

      <div className="space-y-12">
        {SECTIONS.map((section) => {
          const rows = conferencesBySection(section);
          if (rows.length === 0) return null;
          return (
            <section key={section}>
              <h2 className="mb-3 text-xl font-semibold">{section}</h2>
              <ConferenceTable rows={rows} />
            </section>
          );
        })}
      </div>
    </main>
  );
}
