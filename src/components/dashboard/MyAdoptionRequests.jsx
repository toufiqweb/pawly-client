"use client";

import Image from "next/image";
import { Eye, XCircle, Clock3 } from "lucide-react";
import { DeleteRequest } from "./DeleteRequest";
import Link from "next/link";

export default function MyAdoptionRequests({ requests }) {
  const safeRequests = requests || [];

  const stats = [
    {
      title: "Total",
      value: safeRequests.length || 0,
    },
    {
      title: "Pending",
      value: safeRequests.filter((r) => r.status === "pending").length || 0,
    },
    {
      title: "Approved",
      value: safeRequests.filter((r) => r.status === "approved").length || 0,
    },
    {
      title: "Rejected",
      value: safeRequests.filter((r) => r.status === "rejected").length || 0,
    },
  ];

  return (
    <div className="container mx-auto ">
      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-4xl font-bold text-primary leading-none">
              {item.value}
            </h2>

            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden lg:block overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-5 text-left text-xs font-bold tracking-wider text-foreground">
                  PET NAME
                </th>

                <th className="px-6 py-5 text-left text-xs font-bold tracking-wider text-foreground">
                  REQUEST DATE
                </th>

                <th className="px-6 py-5 text-left text-xs font-bold tracking-wider text-foreground">
                  PICKUP DATE
                </th>

                <th className="px-6 py-5 text-left text-xs font-bold tracking-wider text-foreground">
                  STATUS
                </th>

                <th className="px-6 py-5 text-right text-xs font-bold tracking-wider text-foreground">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request, index) => (
                <tr
                  key={request?._id}
                  className={`transition-colors hover:bg-muted/40 ${
                    index !== requests.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  {/* PET */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                        <Image
                          src={request?.petImage}
                          alt={request?.petName}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <h3 className="text-[15px] font-semibold text-foreground">
                        {request?.petName}
                      </h3>
                    </div>
                  </td>

                  {/* REQUEST DATE */}
                  <td className="px-6 py-5 text-sm text-muted-foreground">
                    {new Date(request?.createdAt).toISOString().split("T")[0]}
                  </td>

                  {/* PICKUP DATE */}
                  <td className="px-6 py-5 text-sm text-muted-foreground">
                    {request?.pickupDate}
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-5">
                    {request.status === "rejected" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
                        <XCircle size={13} />
                        Rejected
                      </span>
                    )}
                    {request.status === "pending" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                        <Clock3 size={13} />
                        Pending
                      </span>
                    )}
                    {request.status === "approved" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-500">
                        <Clock3 size={13} />
                        Approved
                      </span>
                    )}
                  </td>
                  {/* ACTIONS */}
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/all-pets/${request?.petId}`}>
                        <button className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                          <Eye size={16} />
                          View
                        </button>
                      </Link>

                      {request.status === "pending" && (
                        <DeleteRequest request={request} />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MOBILE + TABLET */}
      {/* MOBILE + TABLET */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden">
        {requests.map((request) => (
          <div
            key={request?._id}
            className="group rounded-3xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* TOP */}
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-primary/20 shrink-0">
                <Image
                  src={request?.petImage}
                  alt={request?.petName}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-foreground truncate">
                      {request?.petName}
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Requested on{" "}
                      {new Date(request?.createdAt).toISOString().split("T")[0]}
                    </p>
                  </div>

                  {/* STATUS */}
                  {request.status === "rejected" && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive whitespace-nowrap">
                      <XCircle size={13} />
                      Rejected
                    </span>
                  )}

                  {request.status === "pending" && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary whitespace-nowrap">
                      <Clock3 size={13} />
                      Pending
                    </span>
                  )}

                  {request.status === "approved" && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600 whitespace-nowrap">
                      <Clock3 size={13} />
                      Approved
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* DETAILS */}
            <div className="mt-5 rounded-2xl bg-muted/40 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Pickup Date
                </span>

                <span className="text-sm font-medium text-foreground">
                  {request?.pickupDate}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Request Status
                </span>

                <span className="text-sm font-medium capitalize text-foreground">
                  {request?.status}
                </span>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-5 flex gap-3">
              <Link href={`/all-pets/${request?.petId}`} className="flex-1">
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-4 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                  <Eye size={16} />
                  View Details
                </button>
              </Link>

              {request.status === "pending" && (
                <div className="flex-1">
                  <DeleteRequest request={request} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
