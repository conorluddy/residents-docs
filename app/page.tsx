import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { PageRoutes } from "@/lib/pageroutes";
import Mermaid from "mermaid";

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl mb-4 sm:text-7xl flex">
        <Image
          src="/logo.svg"
          alt="Residents Logo"
          width={51}
          height={51}
          className="mt-2"
        />
        Residen<b className="text-lime-400">ts</b>
      </h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        Open source Express 5 boilerplate with a simple Postgres database. Takes
        care of your application residents with user creation, authorisation,
        management, role based access control and more. Fully typed in
        Typescript. Extensive test coverage. Easy to extend to whatever you want
        to build. Host it anywhere you like.
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Lets go
        </Link>
      </div>
    </div>
  );
}
