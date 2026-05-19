"use client";

import { Search, FilterX, ChevronDown } from "lucide-react";

const PetSearchSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADING */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Find Your New Best Friend
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-sm md:text-base leading-relaxed">
            Browse through our lovingly cared-for companions waiting for their
            forever homes. Every adoption starts with a connection.
          </p>
        </div>

        {/* SEARCH CONTAINER */}
        <div className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8">
          {/* SEARCH BAR */}
          <div className="relative mb-8">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search pets by name..."
              className=" w-full h-14 rounded-xl border border-border bg-background pl-14 pr-5  text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 focus:ring-2 focus:ring-ring focus:border-primary "
            />
          </div>

          {/* FILTER ROW */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-5">
            {/* FILTER GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
              {/* SPECIES */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Species
                </label>

                <div className="relative">
                  <select className="appearance-none w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground outline-none transition-all duration-200 focus:ring-2 focus:ring-ring focus:border-primary cursor-pointer">
                    <option>All Species</option>
                    <option>Dogs</option>
                    <option>Cats</option>
                    <option>Birds</option>
                    <option>Small Animals</option>
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* AGE */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Age
                </label>

                <div className="relative">
                  <select className=" appearance-none  w-full h-12 rounded-xl  border border-border bg-background px-4  text-foreground outline-none  transition-all duration-200 focus:ring-2 focus:ring-ring  focus:border-primary cursor-pointer ">
                    <option>Any Age</option>
                    <option>Puppy / Kitten</option>
                    <option>Adult</option>
                    <option>Senior</option>
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* SIZE */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Size
                </label>

                <div className="relative">
                  <select
                    className="  appearance-none w-full h-12 rounded-xl border border-border  bg-background
                      px-4 text-foreground outline-none  transition-all duration-200 focus:ring-2 focus:ring-ring focus:border-primary cursor-pointer "
                  >
                    <option>Any Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            {/* CLEAR FILTER */}
            <button className=" flex items-center gap-2 text-sm font-semibold text-secondary-foreground hover:text-primary  transition-colors  whitespace-nowrap pb-1  ">
              <FilterX className="w-5 h-5" />
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetSearchSection;
