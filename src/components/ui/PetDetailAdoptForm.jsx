import { CalendarDays } from "lucide-react";
import React from "react";

const PetDetailAdoptForm = ({pet}) => {
  return (
    <aside className="lg:col-span-4 lg:sticky lg:top-24">
      <div className="bg-card rounded-[24px] border border-border p-6 md:p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-foreground mb-6">Adopt {pet.petName}</h2>

        <form className="space-y-4">
          {/* PET NAME */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Pet Name
            </label>

            <input
              type="text"
              value={pet.petName}
              readOnly
              className="w-full h-12 rounded-xl border border-border bg-muted px-4 text-muted-foreground outline-none"
            />
          </div>

          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Your Name
            </label>

            <input
              type="text"
              value={"John Doe"}
              readOnly
              className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground outline-none focus:ring-2 focus:ring-ring focus:border-primary"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Your Email
            </label>

            <input
              type="text"
              value={"john.doe@example.com"}
              readOnly
              className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground outline-none focus:ring-2 focus:ring-ring focus:border-primary"
            />
          </div>

          {/* DATE */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Pickup Date
            </label>

            <div className="relative">
              <input
                type="date"
                className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground outline-none focus:ring-2 focus:ring-ring focus:border-primary"
              />

              <CalendarDays className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>

            <textarea
              rows={5}
              placeholder="Tell Rahim about your home and why you'd like to adopt Bella..."
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none resize-none focus:ring-2 focus:ring-ring focus:border-primary"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full h-14 rounded-2xl bg-primary text-primary-foreground font-bold shadow-md hover:opacity-90 hover:scale-[0.99] transition-all duration-200"
          >
            Send Adoption Request
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Usually responds within 24 hours
          </p>
        </form>
      </div>
    </aside>
  );
};

export default PetDetailAdoptForm;
