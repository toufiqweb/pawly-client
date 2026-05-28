import { Eye, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DeleteListingModal from "./DeleteListingModal";
import { RequestsModal } from "./RequestsModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getPetRequestsByPetId } from "@/lib/data/requests";

const ListingCard = async ({ pet }) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const petRequests = await getPetRequestsByPetId(pet?._id, token);
  return (
    <div className="bg-card text-card-foreground rounded-2xl overflow-hidden border border-border shadow-sm hover:-translate-y-1 transition-all duration-300 group">
      {/* IMAGE */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={pet?.image}
          alt={pet?.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* STATUS */}
        <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm backdrop-blur">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          {pet?.status}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-4">
        {/* TOP */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold leading-tight text-foreground">
              {pet?.petName}
            </h3>

            <p className="text-sm text-muted-foreground">
              {pet?.species} • {pet?.breed}
            </p>
          </div>

          <div className="text-right">
            <h4 className="text-xl font-bold text-primary">
              ${pet?.adoptionFee}
            </h4>

            <span className="inline-block mt-1 bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md font-medium">
              {petRequests?.length || 0} requests
            </span>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-2 gap-3">
          {/* VIEW */}
          <Link
            href={`/all-pets/${pet?._id}`}
            className="border border-border hover:bg-muted cursor-pointer transition-all rounded-xl py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Eye size={18} />
            View
          </Link>

          {/* EDIT */}
          <Link
            href={`/dashboard/my-listings/edit/${pet._id}`}
            className="border cursor-pointer border-border hover:bg-muted transition-all rounded-xl py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Pencil size={18} />
            Edit
          </Link>

          <div className="col-span-2">
            <RequestsModal petId={pet._id} />
          </div>

          <div className="col-span-2">
            <DeleteListingModal petId={pet._id} petName={pet?.petName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
