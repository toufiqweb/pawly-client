import MyAdoptionRequests from "@/components/dashboard/MyAdoptionRequests";
import { auth } from "@/lib/auth";
import { getMyRequests } from "@/lib/data/requests";
import { FileText } from "lucide-react";
import { headers } from "next/headers";
import React from "react";

const MyRequestsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  const requests = await getMyRequests(user?.email);
  // console.log(request.length);
  

  return (
    <div className="relative min-h-screen bg-background overflow-hidden container mx-auto px-4 md:px-6 py-10">
      {/* HEADER */}
      <div className="mb-8 space-y-3">
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          My Requests
        </span>

        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          My Adoption
          <span className="text-primary"> Requests</span>
        </h2>

        <p className="max-w-2xl text-muted-foreground text-base leading-relaxed">
          Track the status of all your adoption requests here. We&apos;re
          helping you find the perfect companion for your home.
        </p>
      </div>

      <MyAdoptionRequests  requests={requests}/>

      {/* BACKGROUND BLURS */}
      <div className="pointer-events-none fixed -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      <div className="pointer-events-none fixed top-32 left-24 h-72 w-72 rounded-full bg-chart-2/10 blur-[100px]" />
    </div>
  );
};

export default MyRequestsPage;
