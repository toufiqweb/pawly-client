import UpdatePetForm from "@/components/dashboard/UpdatePetForm";
import { getPetById } from "@/lib/data/pets";
import { ArrowLeft, Pencil } from "lucide-react";
import Link from "next/link";

const MyListingEditPage = async ({ params }) => {
  const { id } = await params;
  const pet = await getPetById(id);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 space-y-8 bg-background text-foreground">
      {/* HEADER */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* LEFT */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/dashboard/my-listings"
              className="flex items-center gap-1 hover:text-primary transition"
            >
              <ArrowLeft size={16} />
              Back to Listings
            </Link>

            <span>/</span>
            <span className="text-primary font-medium">Edit Pet</span>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Edit
            <span className="text-primary"> Pet Listing</span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground max-w-xl">
            Update your pet’s details, health status, pricing, and visibility
            for adoption seekers.
          </p>
        </div>

        {/* RIGHT BADGE */}
        <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium w-fit">
          <Pencil size={16} />
          Editing Mode
        </div>
      </div>

      {/* FORM WRAPPER CARD */}
      <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
        <UpdatePetForm pet={pet} />
      </div>
    </div>
  );
};

export default MyListingEditPage;
