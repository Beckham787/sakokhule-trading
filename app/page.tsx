import FactList from "@/components/FactList";
import StoryScroll from "@/components/StoryScroll";
import { credentials, company, DISCIPLINES } from "@/lib/content";

const REGISTRATION: { label: string; value: string; note?: string }[] = [
  {
    label: "CIDB grading",
    value: credentials.cidb.grading,
    note: `${credentials.cidb.detail} CRS number ${credentials.cidb.crsNumber}.`,
  },
  {
    label: "Company registration",
    value: credentials.cipc.regNo,
    note: `${credentials.cipc.enterpriseType}, registered ${credentials.cipc.registered}.`,
  },
  { label: "Ownership", value: credentials.bbbee.ownership, note: credentials.bbbee.detail },
  { label: "Tax compliance", value: credentials.sars.status, note: credentials.sars.detail },
  { label: "Registered office", value: company.address, note: `Operating across ${company.region}.` },
];

/** One discipline, as its own beat — see the note on the "what-we-do"
 * steps below for why there are now two of these instead of one. */
function DisciplineCard({ d, index }: { d: (typeof DISCIPLINES)[number]; index: number }) {
  return (
    <div className="shell w-full">
      <p className="label text-fg-mute">
        <span className="mr-4 text-accent">{String(index + 1).padStart(2, "0")}</span>
        What we do
      </p>
      <div className="mt-5 max-w-[38rem]">
        <h3 className="font-display text-[length:var(--step-head)] leading-snug">{d.name}</h3>
        <p className="mt-2.5 max-w-[38ch] text-[0.9375rem] leading-relaxed text-fg-soft">{d.body}</p>
        <ul className="mt-4 space-y-2">
          {d.points.map((pt) => (
            <li key={pt} className="flex gap-3.5 text-[0.9375rem] text-fg-soft">
              <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-hair-strong" />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * The whole homepage, told as one held photograph — see StoryScroll for the
 * mechanism, checked directly against olsonkundig.com's own front page.
 * Five beats now, not four: "What we do" used to run both disciplines
 * through a single two-column beat, which was the one place on the page
 * where a caption could run taller than one screen (in a single column,
 * below the lg breakpoint, comfortably taller). Splitting it into
 * "Earth moving" and "Plant hire" — same picture held across both, same
 * copy, same bullets, just one discipline per screen instead of two —
 * means no caption on this page is longer than a client reads in one
 * held frame. Wordless beats stay wordless (the hero, and the pause
 * before Registration — the picture is the whole sentence). No separate
 * fleet grid, enquiries block or project list on the homepage — the full
 * contract record already lives on /company/projects; both are a click
 * away in the header and footer.
 */
export default function HomePage() {
  return (
    <StoryScroll
      steps={[
        {
          key: "arrival",
          image: "story/mine-yard",
          alt: "A wheel loader tipping coal into a line of red side-tipper trailers at a stockpile, another stockpile in the foreground.",
          focus: "object-[52%_58%]",
          dwell: 85,
        },
        {
          key: "earth-moving",
          image: "story/grading",
          alt: "A Caterpillar backhoe loader laying and shaping a gravel road behind a wire fence.",
          focus: "object-[62%_40%]",
          dwell: 120,
          content: <DisciplineCard d={DISCIPLINES[0]} index={0} />,
        },
        {
          key: "plant-hire",
          image: "story/grading",
          alt: "A Caterpillar backhoe loader laying and shaping a gravel road behind a wire fence.",
          focus: "object-[62%_40%]",
          dwell: 120,
          content: <DisciplineCard d={DISCIPLINES[1]} index={1} />,
        },
        {
          key: "done-the-work",
          image: "story/veteran",
          alt: "A well-used JCB excavator standing on a gravel yard under a tall cumulus cloud.",
          focus: "object-[38%_58%]",
          dwell: 85,
        },
        {
          key: "registration",
          image: "story/delivery",
          alt: "A new Caterpillar excavator secured on a blue abnormal-load lowbed trailer.",
          focus: "object-[54%_46%]",
          dwell: 180,
          content: (
            <div className="shell w-full">
              <p className="label text-fg-mute">
                <span className="mr-4 text-accent">03</span>Registration
              </p>
              <div className="mt-7 grid gap-x-[var(--gutter)] lg:grid-cols-12">
                <div className="lg:col-span-3" />
                <div className="lg:col-span-9">
                  <FactList facts={REGISTRATION} />
                </div>
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
