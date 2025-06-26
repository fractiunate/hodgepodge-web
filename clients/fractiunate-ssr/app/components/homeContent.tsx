import { cn } from "@/lib/utils";
import Typewriter from "./ui/typewriter";

export function HomeContent(isClient: boolean, isMobile: boolean) {
  return (
    <div
      className={cn(
        "flex flex-col items-center flex-grow mb-20",
        isClient && isMobile ? "" : "justify-center"
      )}>
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl">
          <div className="flex items-center font-mono">
            {isClient && isMobile ? (
              <></>
            ) : (
              <>
                <p className="flex pr-4 ml-0 min-w-fit">This is</p>
                <div className="flex items-center justify-start w-full h-12 p-2 border-2 border-gray-600 rounded-lg bg-muted">
                  <Typewriter
                    className="overflow-hidden text-4xl font-bold text-left border-r whitespace-nowrap typewriter"
                    text={"Fractiunate.me"}
                    speed={100}
                  />
                </div>
                <div className="flex-grow"></div>
              </>
            )}
          </div>
        </h1>
        <div
          className={cn(
            "flex flex-col   mx-4",
            isClient && isMobile ? "text-2xl gap-10" : "text-md mt-4"
          )}>
          <p className="">
            Quality Software Engineering & Cloud Architecture made in Berlin.
          </p>
          <p className="">
            Currently working for{" "}
            <a href="https://gebit.de">
              <span className="font-semibold hover:underline">
                GEBIT Solutions GmbH
              </span>
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
