import React, { useEffect, useRef, useState } from "react";

import { Button } from "../components/ui/button.tsx";
import logo from "./logo.svg";
import qr from "./fractiunate-qr-mail.png";
// import { useMediaQuery } from "react-responsive";
import { useIsClient } from "../hooks/useIsClient";
import { useMediaQuery } from "../hooks/useMediaQuery";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose, DialogFooter } from "../components/ui/dialog.tsx";
import { Copy, Github, Linkedin, MessageCircle } from "lucide-react";
import useTypewriter from "../hooks/use-typewriter.ts";
import { Toaster, toast } from "sonner";
import { cn } from "@/lib/utils.ts";
import Typewriter from "@/components/ui/typewriter.tsx";

let typewriterInputTexts = [
  { text: "Fractiunate.me", weight: 1 },
  { text: "engineering.", weight: 0 },
  { text: "up and running.", weight: 0 },
  { text: "quality.", weight: 0 },
  { text: "architecture.", weight: 0 },
  { text: "software.", weight: 0 },
  { text: "coding.", weight: 0 },
  { text: "your next level.", weight: 0 },
  { text: "the Cloud.", weight: 0 },
];



const CopyParagraph = ({
  children,
  label = "",
}: {
  children: React.ReactNode;
  label: string;
}) => {
  const handleCopy = () => {
    if (typeof children === "string") {
      navigator.clipboard.writeText(children as string);
      toast(`Copied ${label}`, {});
    }
  };

  return (
    <span className="flex items-center w-full gap-1">
      <p>{children}</p>
      <Copy
        className="ml-2 cursor-pointer text-white/40 hover:text-purple-600 active:text-purple-800"
        size={14}
        onClick={handleCopy}
      />
    </span>
  );
};

export function Welcome({ message }: { message: string }) {
  const [typewriterText, setTypewriterText] = useState("Fractiunate.me");

  const isClient = useIsClient();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const section2Ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    section2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // if (!isClient) return null;
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 1224px)'
  // })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // console.log("isDesktopOrLaptop", isDesktopOrLaptop);
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const iconSize = !(isClient && isMobile) ? 16 : 22;
  return (
    <main className="flex flex-col h-screen p-4 text-white selection:bg-purple-600">
      <Toaster
        duration={1000}
        position="top-center"
      />

      <div
        className={cn(
          "flex items-center w-full p-8",
          !(isClient && isMobile) ? "flex-row" : "flex-col"
        )}>
        <a
          href="/"
          className="text-gray-400">
          <img
            src={logo}
            alt="Logo"
            className="transition-transform duration-300 scale-105 w-58 filterit hover:scale-110 hover:drop-shadow"
          />
        </a>
        <div
          className={cn(
            "flex gap-8  text-lg",
            !(isClient && isMobile) ? "ml-auto" : "pt-10 flex-col"
          )}>
          <a
            onClick={handleScroll}
            className="flex items-center gap-1 text-white transition-transform duration-300 hover:text-pink-800 hover:scale-110 hover:drop-shadow">
            <Github size={iconSize} />
            Projects
          </a>
          <a
            href="https://github.com/fractiunate"
            className="flex items-center gap-1 text-white transition-transform duration-300 hover:text-pink-800 hover:scale-110 hover:drop-shadow">
            <Github size={iconSize} />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/fractiunate/"
            className="flex items-center gap-1 text-white transition-transform duration-300 hover:text-pink-800 hover:scale-110 hover:drop-shadow">
            <Linkedin size={iconSize} />
            Linked.in
          </a>
          <Dialog>
            <DialogTrigger className="flex items-center gap-1 text-white transition-transform duration-300 cursor-pointer hover:text-pink-800 hover:scale-110 hover:drop-shadow">
              <MessageCircle size={iconSize} />
              Contact
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-primary">
                  FRACTIUNATE // Virtual business card
                </DialogTitle>
                <DialogDescription>
                  <div className="flex pt-4">
                    <div className="flex flex-col items-start justify-center flex-1 gap-1 text-primary/95">
                      <span className="flex items-center w-full gap-1">
                        <p>Name:</p>
                        <CopyParagraph label="Name">
                          David Rahäuser
                        </CopyParagraph>
                      </span>
                      <span className="flex items-center w-full gap-1">
                        <span className="min-w-12">E-Mail:</span>
                        <CopyParagraph label="E-Mail">
                          d.rahaeuser@gmail.com
                        </CopyParagraph>
                      </span>
                      <span className="flex items-center w-full gap-1">
                        <p>
                          Web:{" "}
                          <a
                            className="text-purple-700 hover:underline"
                            href="https://fractiunate.me">
                            fractiunate.me
                          </a>
                        </p>
                      </span>
                      <span className="flex items-center w-full gap-1">
                        <p>
                          Whatsapp:{" "}
                          <a
                            className="text-purple-700 hover:underline"
                            href="https://wa.me/qr/AN4AZN4NBDWUN1">
                            Contact me
                          </a>
                        </p>
                      </span>
                      <span className="flex items-center w-full gap-1">
                        <p>Mobile:</p>
                        <CopyParagraph label="Mobile">
                          +49 15209261143
                        </CopyParagraph>
                      </span>
                    </div>

                    <img
                      src={qr}
                      alt="qr-code"
                      className="w-48 ml-auto transition-transform duration-300 scale-100 bg-white select-none filterit hover:scale-105 hover:drop-shadow"
                    />
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="select-none sm:justify-start">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col items-center flex-grow mb-20 content",
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
                      text={typewriterText}
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
      
      {/* on mobil version add another viewport hight as dummy page */}
      <div
        className={cn(
          "flex flex-col items-center justify-center",
          isClient && isMobile ? "h-[100vh]" : "h-0"
        )}>
           <div ref={section2Ref} style={{ height: "100vh", background: "#c0ffee" }}>
        <h2>Section 2</h2>
        <p>This is where we scroll to!</p>
      </div>
        </div>

      <footer  className="w-full h-10 p-8 text-muted-foreground">
        <div className="flex justify-between max-w-3xl">
          {/* <a
            href="/impressum"
            className="flex transition-transform duration-300 text-muted-foreground hover:text-pink-800 hover:scale-110 hover:drop-shadow">
            Impressum
          </a> */}
        </div>
      </footer>
    </main>
  );
}

const resources = [];
