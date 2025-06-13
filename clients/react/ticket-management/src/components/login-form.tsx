import { GalleryVerticalEnd } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router";
import { configuration,scopes } from "../msalConfiguration.ts";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { instance } = useMsal();
  const navigate = useNavigate();

  return (
    <div
      className={cn("flex flex-col gap-6", className)}
      {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium">
              <div className="flex items-center justify-center rounded-md size-8">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Events Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Event Management Admin Page</h1>
            <div className="text-sm text-center">
              Please sign in to your account to continue.
            </div>
          </div>

          <div>
            <Button
              onClick={async () => {
                await instance.loginRedirect({
                  scopes: scopes,
                  redirectUri: '/',
                });
              }}
              variant="outline"
              type="button"
              className="w-full">
              <svg
                className="size-6"
                width="800px"
                height="800px"
                viewBox="0 -28.5 256 256"
                version="1.1">
                <title>path21</title>
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd">
                  <path
                    d="M118.431947,187.698037 C151.322003,181.887937 178.48731,177.08008 178.799309,177.013916 L179.366585,176.893612 L148.31513,139.958881 C131.236843,119.644776 117.26369,102.945381 117.26369,102.849118 C117.26369,102.666861 149.32694,14.3716012 149.507189,14.057257 C149.567455,13.952452 171.38747,51.62411 202.400338,105.376064 C231.435152,155.699606 255.372949,197.191547 255.595444,197.580359 L255.999996,198.287301 L157.315912,198.274572 L58.6318456,198.261895 L118.431947,187.698073 L118.431947,187.698037 Z M-4.03864498e-06,176.434723 C-4.03864498e-06,176.382721 14.631291,150.983941 32.5139844,119.992969 L65.0279676,63.6457518 L102.919257,31.8473052 C123.759465,14.3581634 140.866667,0.0274832751 140.935253,0.00062917799 C141.003839,-0.0247829554 140.729691,0.665213042 140.326034,1.53468179 C139.922377,2.40415053 121.407304,42.1170321 99.1814268,89.7855264 L58.7707514,176.455514 L29.3853737,176.492355 C13.2234196,176.512639 -4.03864498e-06,176.486664 -4.03864498e-06,176.434703 L-4.03864498e-06,176.434723 Z"
                    fill="#0089D6"
                    fill-rule="nonzero"></path>
                </g>
              </svg>
              Continue with Azure AD
            </Button>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
