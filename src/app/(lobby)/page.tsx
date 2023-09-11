import { type ReactElement } from "react";
import { Announce } from "@/src/components/ui/Announce";
import { Icons } from "@/src/components/icons";
import { Link } from "../../components/ui/Link";
import { Button } from "@/src/components/ui/Button";

export default function Home(): ReactElement {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center space-y-8 p-24 text-center">
      <Announce className="whitespace-nowrap">
        Open source now!{" "}
        <Link
          className="font-semibold"
          href="https://github.com/incpo/data-factory"
        >
          <span className="inline-flex items-center">
            View repo <Icons.arrowLongRight className="ml-1 h-5 w-5" />
          </span>
        </Link>
      </Announce>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Free <span className="text-accent">offline</span> data sorter for your
        business
      </h1>
      <p className="text-lg leading-8 text-gray-600">
        Powerful tool designed to help you manage your data with ease and
        security. Synchronize information between all devices. Any devices, no
        internet.
      </p>
      <Button className="font-medium shadow">
        <span>Get Started</span>
        <Icons.rocket className="h-5 w-5" />
      </Button>
    </main>
  );
}
