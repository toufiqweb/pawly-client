import PetCard from "@/components/ui/PetCard";
import PetSearchSection from "@/components/ui/PetSearchSection";
import { getAllPets } from "@/lib/data/pets";
import React from "react";

const AllPetsPage = async ({searchParams}) => {
   const sParams = await searchParams;

  const pets = await getAllPets(sParams?.search || "");


  return (
    <section className="bg-background ">
      <div className="max-w-7xl mx-auto">
        <PetSearchSection />

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-6 p-6">
        {pets.map((pet) => (
          <PetCard key={pet?._id} pet={pet} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default AllPetsPage;
