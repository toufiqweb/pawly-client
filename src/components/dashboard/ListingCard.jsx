import { Eye, Pencil, Trash2, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const ListingCard = ({ pet }) => {
  return (
    <div className="bg-card text-card-foreground rounded-2xl overflow-hidden border border-border shadow-sm hover:-translate-y-1 transition-all duration-300 group">

      {/* IMAGE */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={pet.image}
          alt={pet.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* STATUS */}
        <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm backdrop-blur">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          {pet.status}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-4">

        {/* TOP */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold leading-tight text-foreground">
              {pet.name}
            </h3>

            <p className="text-sm text-muted-foreground">
              {pet.species} • {pet.breed}
            </p>
          </div>

          <div className="text-right">
            <h4 className="text-xl font-bold text-primary">
              ${pet.adoptionFee}
            </h4>

            <span className="inline-block mt-1 bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md font-medium">
              {pet.requests || 0} requests
            </span>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-2 gap-3">

          {/* VIEW */}
          <button className="border border-border hover:bg-muted transition-all rounded-xl py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Eye size={18} />
            View
          </button>

          {/* EDIT */}
          <button className="border border-border hover:bg-muted transition-all rounded-xl py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Pencil size={18} />
            Edit
          </button>

          {/* REQUESTS */}
          <button className="col-span-2 border border-primary/40 text-primary hover:bg-primary/10 transition-all rounded-xl py-2.5 flex items-center justify-center gap-2 text-sm font-semibold">
            <Users size={18} />
            Manage Requests
          </button>

          {/* DELETE */}
          <button className="col-span-2 border border-destructive/30 text-red-600 dark:text-red-400 hover:bg-destructive/10 transition-all rounded-xl py-2.5 flex items-center justify-center gap-2 text-sm font-semibold">
            <Trash2 size={18} />
            Delete Listing
          </button>

        </div>
      </div>
    </div>
  );
};

export default ListingCard;