import { type ReactElement } from "react";
import { Announce } from "@/src/components/ui/Announce";
import { Icons } from "@/src/components/icons";
import { Link } from "../../components/ui/Link";
import { Button } from "@/src/components/ui/Button";
import Step from "@/src/components/lobby/Step";

export default function Home(): ReactElement {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center space-y-8 text-center max-sm:mt-10 sm:space-y-16 sm:p-24 2xl:space-y-32">
      <div className="flex max-w-3xl flex-col items-center space-y-8 ">
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
      </div>

      <section className="relative overflow-hidden rounded-xl border bg-gray-50/50 p-2 text-center font-semibold shadow lg:rounded-2xl lg:p-4">
        <div className="absolute inset-x-0 top-1/3 mx-auto h-1/2 w-1/2 rounded-3xl bg-green-400 opacity-30 blur-3xl" />
        <p className="mb-2 mt-4 text-lg font-semibold text-accent sm:text-xl">
          Everything you need
        </p>
        <p className="text-2xl font-semibold text-black sm:text-3xl">
          <span>Say goodbye 👋 to data clutter. </span>
          <br className="max-sm:hidden" />
          <span>Keep all your client info tidy in one place.</span>
          <img
            src="/static/table.png"
            className="pointer-events-none mt-10 select-none drop-shadow"
            alt="Table"
          />
        </p>
      </section>
      <section className="flex flex-col space-y-6">
        <div className="mx-auto flex max-w-3xl flex-col space-y-4">
          <h3 className="text-2xl font-semibold sm:text-3xl">
            Create storage in minutes
          </h3>
          <p className="text-gray-600">
            Create your storage space with ease. No fuss, no complications - get
            started quickly and efficiently, so you can focus on what matters
            most.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-3 text-left sm:grid-cols-3 sm:gap-10">
          <Step
            number={1}
            title="Add your organization or business"
            description="Name your organization to discern it from others. You can create many of them!"
          />
          <Step
            number={2}
            title="Configure your needs for data base"
            description={
              <>
                Our{" "}
                <Link href="/" className="underline">
                  quick start
                </Link>{" "}
                will guide you step-by-step in less than 2 minutes.
              </>
            }
          />
          <Step
            number={3}
            title="Dashboard Mastery"
            description={
              <>
                Your personal{" "}
                <Link className="underline" href="/">
                  dashboard
                </Link>{" "}
                is ready to be accessed.
              </>
            }
          />
        </div>
      </section>
    </main>
  );
}
