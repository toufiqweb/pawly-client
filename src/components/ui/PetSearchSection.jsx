"use client";

import { Search, FilterX } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PetSearchSection = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");

  // 🔥 SINGLE SOURCE OF TRUTH FOR QUERY
  const buildAndPush = (next = {}) => {
    const params = new URLSearchParams();
    const finalSearch = next.search ?? search;
    const finalSpecies = next.species ?? species;
    const finalAge = next.age ?? age;
    const finalSize = next.size ?? size;

    if (finalSearch) params.set("search", finalSearch);
    if (finalSpecies) params.set("species", finalSpecies);
    if (finalAge) params.set("age", finalAge);
    if (finalSize) params.set("size", finalSize);

    router.push(`/all-pets?${params.toString()}`);
  };

  
  // ENTER + BUTTON SEARCH
  const handleSearch = () => {
    buildAndPush();
  };

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADING */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground">
            Find Your New Best Friend
          </h1>

          <p className="mt-4 text-muted-foreground">
            Browse through pets waiting for adoption.
          </p>
        </div>

        {/* SEARCH BOX */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          {/* SEARCH INPUT */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                placeholder="Search pets by name or breed..."
                className="w-full h-14 pl-14 pr-5 rounded-2xl border border-border bg-background"
              />
            </div>

            <button
              onClick={handleSearch}
              className="h-14 px-7 rounded-2xl bg-primary text-white"
            >
              <Search className="w-4 h-4 inline mr-2" />
              Search
            </button>
          </div>

          {/* FILTERS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* SPECIES */}
            <div>
              <label>Species</label>
              <div className="relative">
                <select
                  value={species}
                  onChange={(e) => {
                    setSpecies(e.target.value);
                    buildAndPush({ species: e.target.value });
                  }}
                  className="w-full h-12 border rounded-xl px-4"
                >
                  <option value="">All Species</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                  <option value="Small Animal">Small Animal</option>
                </select>
              </div>
            </div>

            {/* AGE */}
            <div>
              <label>Age</label>
              <div className="relative">
                <select
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                    buildAndPush({ age: e.target.value });
                  }}
                  className="w-full h-12 border rounded-xl px-4"
                >
                  <option value="">Any Age</option>
                  <option value="Puppy / Kitten">Puppy / Kitten</option>
                  <option value="Adult">Adult</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>
            </div>

            {/* SIZE */}
            <div>
              <label>Size</label>
              <div className="relative">
                <select
                  value={size}
                  onChange={(e) => {
                    setSize(e.target.value);
                    buildAndPush({ size: e.target.value });
                  }}
                  className="w-full h-12 border rounded-xl px-4"
                >
                  <option value="">Any Size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
            </div>
          </div>

          {/* CLEAR */}
          <div className="mt-5">
            <button
              onClick={() => {
                setSearch("");
                setSpecies("");
                setAge("");
                setSize("");
                router.push("/all-pets");
              }}
              className="flex items-center gap-2 text-sm font-semibold text-red-500"
            >
              <FilterX className="w-4 h-4" />
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetSearchSection;
