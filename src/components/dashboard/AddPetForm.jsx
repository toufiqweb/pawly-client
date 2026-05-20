"use client";

import { authClient } from "@/lib/auth-client";
import { PawPrint, MapPin, ImageIcon, CheckCircle } from "lucide-react";

export default function AddPetForm() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const petData = {
      petName: data.petName,
      species: data.species,
      breed: data.breed,
      age: parseInt(data.age),
      gender: data.gender,
      image: data.image,
      healthStatus: data.healthStatus,
      vaccinationStatus: data.vaccinationStatus,
      location: data.location,
      adoptionFee: parseFloat(data.adoptionFee),
      description: data.description,

      ownerName: user?.name || user?.displayName,
      ownerEmail: user?.email,

      status: "available",

      createdAt: new Date(),
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(petData),
      });

      const result = await res.json();



      e.target.reset();
    } catch (error) {
;
    }
  };

  return (
    <div className="bg-background container mx-auto rounded-xl border border-border shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-muted px-6 py-5 border-b border-border flex items-center gap-3">
        <PawPrint className="w-5 h-5 text-primary fill-primary" />

        <h3 className="text-2xl font-semibold text-foreground">
          Pet Information
        </h3>
      </div>

      {/* Form */}
      <form className="p-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          {/* LEFT COLUMN */}
          <div className="space-y-5">
            {/* Pet Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Pet Name *
              </label>

              <input
                type="text"
                name="petName"
                required
                placeholder="e.g. Buddy"
                className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>

            {/* Breed */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Breed
              </label>

              <input
                type="text"
                name="breed"
                placeholder="e.g. Labrador Retriever"
                className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground placeholder:text-muted-foreground outline-none"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Gender
              </label>

              <select
                name="gender"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground outline-none"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Health */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Health Status *
              </label>

              <select
                name="healthStatus"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground outline-none"
              >
                <option value="Healthy">Healthy</option>
                <option value="Minor Treatment Needed">
                  Minor Treatment Needed
                </option>
                <option value="Under Medication">Under Medication</option>
              </select>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-5">
            {/* Species */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Species *
              </label>

              <select
                name="species"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground outline-none"
              >
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>

            {/* Age */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Age (years)
              </label>

              <input
                type="number"
                name="age"
                required
                placeholder="e.g. 2"
                className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground placeholder:text-muted-foreground outline-none"
              />
            </div>

            {/* Vaccination */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Vaccination Status
              </label>

              <select
                name="vaccinationStatus"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground outline-none"
              >
                <option value="Vaccinated">Vaccinated</option>
                <option value="Partially Vaccinated">
                  Partially Vaccinated
                </option>
                <option value="Not Vaccinated">Not Vaccinated</option>
              </select>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Location *
              </label>

              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />

                <input
                  type="text"
                  name="location"
                  required
                  placeholder="e.g. Dhaka, Bangladesh"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-input-background text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
            </div>
          </div>

          {/* FULL WIDTH */}
          <div className="md:col-span-2 space-y-5">
            {/* Image URL */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Pet Image URL
              </label>

              <div className="relative">
                <ImageIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />

                <input
                  type="url"
                  name="image"
                  required
                  placeholder="https://..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-input-background text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
            </div>

            {/* Fee + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">
                  Adoption Fee ($)
                </label>

                <input
                  type="number"
                  name="adoptionFee"
                  required
                  placeholder="0"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">
                  Owner Email
                </label>

                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground outline-none"
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Description *
              </label>

              <textarea
                rows={4}
                name="description"
                required
                placeholder="Write pet details..."
                className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground placeholder:text-muted-foreground resize-none outline-none"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row gap-4 justify-end">
          <button
            type="button"
            className="order-2 md:order-1 px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-all"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="order-1 md:order-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-md hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Add Pet Listing
          </button>
        </div>
      </form>
    </div>
  );
}
