import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export function Containment({ children }: PropsWithChildren) {
  return <div className={"max-w-xl mx-auto"}>{children}</div>;
}
