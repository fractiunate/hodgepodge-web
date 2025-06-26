import React, { useEffect, useRef, useState } from "react";
import DesktopLayout from "@/layouts/desktop.tsx";
import Header from "@/components/header.tsx";

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
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useIsClient } from "@/hooks/useIsClient";
import { HomeContent } from "@/components/homeContent";
import { Button } from "@/components/ui/button";
import { ArrowUpFromLine, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

import cloud_server from "../assets/cloud-server-freepik-com.jpg";
import cloud_hodgepodge from "../assets/cloud-hodgepodge.png";
import web_hodgepodge from "../assets/fractiunate-me-ssr-screenshot.png";

export default function FloatingUpButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-50 bottom-4 right-4">
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        variant="outline"
        size="lg"
        className={cn(
          "bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300",
          "transition-opacity fade-in fade-out ease-in-out duration-500",
          visible
            ? "opacity-100 cursor-pointer"
            : "opacity-0 pointer-events-none"
        )}>
        <ArrowUpFromLine size={6} />
        <span className="sr-only">Up</span>
      </Button>
    </div>
  );
}

export function Welcome({ message }: { message: string }) {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isClient = useIsClient();
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <DesktopLayout
        header={<Header projectsRef={projectsRef}></Header>}
        footer={<h1>test</h1>}>
        <div className="flex mt-auto mb-auto h-[calc(100vh-80px)]">
          {HomeContent(isClient, isMobile)}
        </div>
        {/* Projects */}
        <FloatingUpButton />
        <div
          ref={projectsRef}
          className="py-10 overflow-hidden px-30">
          <div className="flex flex-col w-full">
            <h1 className="flex items-center justify-center text-4xl font-bold mb-15">
              Showcase
            </h1>
            <div className="flex flex-col gap-20">
              <div className="flex w-full pl-10 text-lg text-gray-500">
                <div className="w-1/3">
                  <Reveal>
                    <img
                      className="object-cover rounded-lg shadow-lg "
                      src={cloud_hodgepodge}></img>
                  </Reveal>
                </div>
                <div className="w-2/3">
                  <Reveal>
                    <>
                      <h2 className="pt-2 pl-10 text-2xl text-pink-800">
                        Azure Cloud Hodgepodge
                      </h2>

                      <p className="p-10 pt-2 text-primary">
                        This{" "}
                        <a
                          href="https://github.com/fractiunate/hodgepodge-cloud"
                          className="underline hover:text-purple-600">
                          Github project
                        </a>{" "}
                        is a collection of various cloud projects. Integrated
                        with CI/CD and default deployment configs, it servers as
                        my websites infrastructure hosted on Azure container
                        apps as well as an Azure communication service setup
                        that can sent e-mails, a template project for static
                        webhosting, a bootstrapped kubernetes cluster with
                        GitOps ready Argo-CD, fully auttomated TLS certificate
                        management using LetsEncrypt & cert-manager, Istio
                        routing and a lot more. All projects use OpenTofu
                        instead of Hashicorps Terraform to be free and open
                        source. The project is a work in progress and will be
                        updated with more features and projects over time.
                      </p>
                    </>
                  </Reveal>
                </div>
              </div>
              <div className="flex w-full pl-10 text-lg text-gray-500">
                <div className="w-2/3">
                  <Reveal>
                    <>
                      <h2 className="pt-2 pl-10 text-2xl text-pink-800">
                        Fullstack Hodgepodge
                      </h2>

                      <p className="p-10 pt-2 text-primary">
                        Another Hodgepodge, this time for web projects. The{" "}
                        <a
                          href="https://github.com/fractiunate/hodgepodge-web"
                          className="underline hover:text-purple-600">
                          Github project
                        </a>{" "}
                        is devided into client and server projects, although
                        some client projects are server side rendered (SSR) and
                        it could be argued that they belong into the server
                        folder. You can find and inspect this sites source code
                        under{" "}
                        <span className="px-1 mr-1 rounded-sm text-muted bg-amber-50">
                          clients/fractiunate-ssr/app/
                        </span>
                        .
                      </p>
                    </>
                  </Reveal>
                </div>
                <div className="w-1/3">
                  <Reveal>
                    <img
                      className="object-cover rounded-lg shadow-lg "
                      src={web_hodgepodge}></img>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen">content3</div>
        <div className="h-screen">content3</div>
      </DesktopLayout>
    </>
  );
}

const resources = [];
