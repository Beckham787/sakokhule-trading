import CompanyNav from "@/components/CompanyNav";

/** Company section. Services, Projects and Credentials are subpages of it. */
export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-[4.5rem]" />
      <CompanyNav />
      {children}
    </>
  );
}
