import { ReactNode } from "react";

export default function GridList({ children }: { children: ReactNode }) {
  return (
    <section className="">
      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5">
        {children}
      </div>
    </section>
  );
}
