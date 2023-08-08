import dynamic from "next/dynamic";

export const ChildNavbar = dynamic(
  async () => import("child/Navbar").catch(() => <span>Error</span>),
  { ssr: false, loading: () => <span>Loading</span> }
);
