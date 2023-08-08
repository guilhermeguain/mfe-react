import dynamic from "next/dynamic";

import { Loading } from "@/components/Loading";

export const SiblingButton = dynamic(
  async () =>
    import("sibling/Button").catch((e) => import("@/components/ImportError/")),
  { ssr: false, loading: () => <Loading /> }
);

export const DelayedSiblingButton = dynamic(
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return import("sibling/Button").catch(
      () => import("@/components/ImportError/")
    );
  },
  { ssr: false, loading: () => <Loading /> }
);
