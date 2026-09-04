import { company } from "@/lib/content";
import StudioMark from "@/components/StudioMark";
import HazardDivider from "@/components/HazardDivider";

/** Contact details, the company name, and the sister-company link. */
export default function SiteFooter() {
  const tel = (n: string) => `tel:+27${n.replace(/\s/g, "").slice(1)}`;

  return (
    <footer className="border-t border-[--rule] bg-bitumen text-bone">
      <HazardDivider />
      <div className="shell py-[clamp(3rem,6vw,4.5rem)]">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="wordmark text-[1.0625rem]">{company.legalName}</p>
            <p className="value mt-4 text-steel">{company.address}</p>
            <p className="value mt-5 max-w-[34ch] text-steel/80">
              Sister company to{" "}
              <a
                href="https://izanolihleroads.co.za"
                className="tap link-rule text-bone/80 transition-colors duration-300 hover:text-blue"
              >
                Izanolihle Roads
              </a>{" "}
              — same yard, same fleet, separate registered companies.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            {company.phones.map((p) => (
              <a
                key={p}
                href={tel(p)}
                className="value tap link-rule text-bone transition-colors duration-300 hover:text-blue"
              >
                {p}
              </a>
            ))}
            <a
              href={`mailto:${company.email}`}
              className="value tap link-rule break-all text-bone transition-colors duration-300 hover:text-blue"
            >
              {company.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex justify-center border-t border-[--rule] pt-6">
          <StudioMark />
        </div>
      </div>
    </footer>
  );
}
