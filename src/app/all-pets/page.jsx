import PetCard from "@/components/ui/PetCard";
import PetSearchSection from "@/components/ui/PetSearchSection";
import { getAllPets } from "@/lib/data/pets";
import { Link, Search } from "lucide-react";
import React from "react";

const AllPetsPage = async ({ searchParams }) => {
  const sParams = await searchParams;
  const queryString = new URLSearchParams(sParams).toString();
  const pets = await getAllPets(queryString);

  return (
    <section className="bg-background ">
      <div className="max-w-7xl mx-auto">
        <PetSearchSection />

        {pets.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 mb-10 px-6 text-center">
            {/* IMAGE / ICON */}
            <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Search className="w-14 h-14 text-primary" />
            </div>

            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              No Pets Found
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              We couldn’t find any pets matching your search or filters. Try
              adjusting your filters or searching with a different keyword.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-6 p-6">
            {pets.map((pet) => (
              <PetCard key={pet?._id} pet={pet} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllPetsPage;
