import AddPetForm from "@/components/dashboard/AddPetForm";
import React from "react";

export const metadata = {
  title: "Add Pet | Pawly",
  description:
    "Add a new pet for adoption on Pawly. Share pet details, images, and adoption information to help pets find a loving home.",
};

const AddPetPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8 space-y-3">
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          Pet Adoption Dashboard
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Add a New Pet Listing
        </h1>

        <p className="max-w-2xl text-muted-foreground text-base leading-relaxed">
          Fill in your pet’s information including breed, health, vaccination
          status, adoption fee, and location to help potential adopters learn
          more before sending a request.
        </p>
      </div>

      <AddPetForm />
    </section>
  );
};

export default AddPetPage;
