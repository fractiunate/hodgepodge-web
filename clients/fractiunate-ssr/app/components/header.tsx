import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { Github, Linkedin, MessageCircle, Rss, Star } from "lucide-react";
import logo from "@/assets/logo.svg";
import qr from "@/assets/fractiunate-qr-mail.png";
import { Button } from "./ui/button";
import CopyParagraph from "./ui/copyParagraph";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useIsClient } from "@/hooks/useIsClient";


export default function Header({
  projectsRef,
}: {
  projectsRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const isClient = useIsClient();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const iconSize = !(isClient && isMobile) ? 16 : 22;

  function scrollToProjects(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void {
    event.preventDefault();
    if (projectsRef && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div
      className={cn(
        "flex items-center w-full p-15 px-30",
        !(isClient && isMobile) ? "flex-row min-h-18 max-h-18" : "flex-col"
      )}>
      <a
        href="/"
        className="pr-5 text-gray-400">
        <img
          src={logo}
          alt="Logo"
          className="transition-transform duration-300 scale-100 min-w-30 w-60 filterit hover:scale-110 hover:drop-shadow"
        />
      </a>
      <div
        className={cn(
          "flex gap-8  text-lg",
          !(isClient && isMobile) ? "m-w-500 ml-auto" : "pt-10 flex-col"
        )}>
        <a 
        className="flex items-center gap-1 text-white transition-transform duration-300 cursor-pointer hover:text-pink-800 hover:scale-110 hover:drop-shadow">
          <Rss size={iconSize} />
          Blog
        </a>
        <a
          onClick={scrollToProjects}
          className="flex items-center gap-1 text-white transition-transform duration-300 cursor-pointer hover:text-pink-800 hover:scale-110 hover:drop-shadow">
          <Star size={iconSize} />
          Showcase
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
                      <CopyParagraph label="Name">David Rahäuser</CopyParagraph>
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
  );
}
