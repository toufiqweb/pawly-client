import { getPetById } from "@/lib/data/pets";
import PetDetailAdoptForm from "@/components/ui/PetDetailAdoptForm";
import PetDetailPageContent from "@/components/ui/PetDetailPageContent";
import Link from "next/link";

const PetDetailsPage = async ({ params }) => {
  const { petId } = await params;
  const pet = await getPetById(petId);

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 bg-background">
      
      {/* BACK BUTTON */}
      <div className="mb-6">
        <Link
          href="/all-pets"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
        >
          ← Back
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT SIDE */}
        <PetDetailPageContent pet={pet} />

        {/* RIGHT SIDE */}
        <PetDetailAdoptForm pet={pet} />
      </div>
    </main>
  );
};

export default PetDetailsPage;