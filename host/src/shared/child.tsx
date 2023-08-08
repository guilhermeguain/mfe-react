import dynamic from "next/dynamic";

import { Loading } from "@/components/Loading";

export const ChildNavbar = dynamic(
  async () =>
    import("child/Navbar").catch((e) => import("@/components/ImportError/")),
  { ssr: false, loading: () => <Loading /> }
);

export const DelayedChildNavbar = dynamic(
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return import("child/Navbar").catch(
      () => import("@/components/ImportError/")
    );
  },
  { ssr: false, loading: () => <Loading /> }
);
