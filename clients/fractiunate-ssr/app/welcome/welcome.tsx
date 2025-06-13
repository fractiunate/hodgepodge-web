import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button.tsx";
import logo from "./logo.svg";
import qr from "./fractiunate-qr-mail.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose, DialogFooter } from "../components/ui/dialog.tsx";
import { Copy } from "lucide-react";
import useTypewriter from "../hooks/use-typewriter.ts";
import { Toaster, toast } from "sonner";
import { cn } from "@/lib/utils.ts";

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

const Typewriter = ({
  className,
  text,
  speed,
}: {
  className?: string;
  text: string;
  speed?: number;
}) => {
  const [typewriterText, setTypewriterText] = useState(text);
  const [displayText, isDone] = useTypewriter(typewriterText, speed);
  const [isHighlighted, setIsHighlighted] = useState(false);

  async function typeWriterTextList() {
    console.log("Typewriter effect started");
    while (!isDone) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (isDone) await new Promise((resolve) => setTimeout(resolve, 100));
    setIsHighlighted(true);
    if (isDone) await new Promise((resolve) => setTimeout(resolve, 1500));
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  useEffect(() => {
    typeWriterTextList();
  }, []);

  return (
    <p className={cn(className, isHighlighted ? "bg-purple-600" : "")}>
      {displayText}
    </p>
  );
};

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

  return (
    <main className="flex flex-col h-screen text-white selection:bg-purple-600">
      <Toaster
        duration={1000}
        position="top-center"
      />

      <div className="flex items-center w-full h-10 p-8">
        <a
          href="/"
          className="text-gray-400">
          <img
            src={logo}
            alt="Logo"
            className="w-48 p-4 transition-transform duration-300 scale-105 filterit hover:scale-110 hover:drop-shadow"
          />
        </a>
        <div className="flex gap-4 ml-auto">
          <a
            href="https://github.com/fractiunate"
            className="text-white transition-transform duration-300 hover:text-gray-400 hover:scale-110 hover:drop-shadow">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/fractiunate/"
            className="text-white transition-transform duration-300 hover:text-gray-400 hover:scale-110 hover:drop-shadow">
            Linked.in
          </a>
          <Dialog>
            <DialogTrigger>
              {" "}
              <a
                href="#"
                className="text-white transition-transform duration-300 hover:text-gray-400 hover:scale-110 hover:drop-shadow">
                Contact
              </a>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>FRACTIUNATE // Virtual business card</DialogTitle>
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
                            className="hover:underline text-purple-700"
                            href="www.fractiunate.me">
                            www.fractiunate.me
                          </a>
                        </p>
                      </span>
                      <span className="flex items-center w-full gap-1">
                        <p>
                          Whatsapp:{" "}
                          <a 
                            className="hover:underline text-purple-700"
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
                      alt="Logo"
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
      <div className="flex flex-col items-center justify-center flex-grow mb-20 content">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl">
            <div className="flex font-mono items-center">
              <p className="flex ml-0 min-w-fit pr-4">This is</p>
              {/* <p className=""> */}
              <div className="flex items-center justify-start w-full h-12 bg-muted p-2 border-2 rounded-lg border-gray-600">
              <Typewriter
                className=" overflow-hidden text-4xl font-bold text-left border-r whitespace-nowrap typewriter"
                text={typewriterText}
                speed={100}
              />

              </div>
              <div className="flex-grow"></div>
            </div>
          </h1>
          <div className="mx-4">
            <p className="mt-4 text-md">
              <span>Quality Software Engineering & Cloud Architecture</span>{" "}
              made in Berlin.
            </p>
            <p className="mt-1 text-md">
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
    </main>
  );
}

const resources = [];
