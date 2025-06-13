import React from "react";
import {
  MsalAuthenticationTemplate,
} from "@azure/msal-react";

import { columns, type Tickets } from "../components/admin-table/columns.tsx";
import { DataTable } from "../components/admin-table/data-table.tsx";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { InteractionType } from "@azure/msal-browser";
import { Toaster } from "../components/ui/sonner.tsx";

function ErrorComponent({ error }) {
  return <p>An Error Occurred: {error.errorMessage}</p>;
}

function LoadingComponent() {
  return <p>Authentication in progress...</p>;
}

function getData(): Tickets[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "82f3a4b5",
      status: "approved",
      email: "m1@example.com",
    },
    {
      id: "328ed52f",
      status: "approved",
      email: "m2@example.com",
    },
    {
      id: "5b2f3a4b5",
      status: "approved",
      email: "m3@example.com",
    },
    // ...
  ];
}

export default function Main() {
  const data = getData();
   const authRequest = {
        scopes: ["openid", "profile"]
    };
    

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="p-5">
          <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
            errorComponent={ErrorComponent}
            loadingComponent={LoadingComponent}>
            <div className="container mx-auto">
              <DataTable
                columns={columns}
                data={data}
              />
            </div>
          </MsalAuthenticationTemplate>
        </main>
      </SidebarInset>
      <Toaster closeButton duration={6000} position="top-right"  swipeDirections={["bottom","left"]}/>
    </SidebarProvider>

  );
}
