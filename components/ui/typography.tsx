import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  contain?: boolean;
}

export function Typography({ children, contain }: Props) {
  return (
    <div className={`typography ${contain ? "max-w-xl mx-auto" : ""}`}>
      {children}
    </div>
  );
}
