"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Trash2, X } from "lucide-react";

export default function DeleteListingModal({ petId }) {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pets/${petId}`,
      {
        method: "DELETE",
      },
    );

    if (res.ok) {
      setOpen(false);
      window.location.reload(); // or better: mutate state
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="col-span-2 border border-destructive/30 text-destructive
    hover:bg-destructive/10 transition-all rounded-xl py-2.5 flex items-center 
    justify-center gap-2 text-sm font-semibold"
      >
        <Trash2 size={18} />
        Delete Listing
      </button>

      {/* Modal */}
      {open &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Dialog */}
            <div className="relative w-full max-w-md mx-4 bg-card text-card-foreground rounded-2xl shadow-xl p-6 border border-border animate-fadeIn">
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 p-2 rounded-full hover:bg-muted transition"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-destructive/10 text-destructive">
                  <Trash2 size={18} />
                </div>
                <h2 className="text-lg font-semibold text-foreground">
                  Delete listing permanently?
                </h2>
              </div>

              {/* Body */}
              <p className="mt-4 text-sm text-muted-foreground">
                This action will permanently delete{" "}
                <span className="font-semibold text-foreground">
                  My Awesome Project
                </span>{" "}
                and all its data. You can’t undo this action.
              </p>

              {/* Footer */}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-xl border border-border text-sm 
              hover:bg-muted transition text-foreground"
                >
                  Cancel
                </button>

                <button
                  onClick={handleDelete}
                  className="px-4 py-2 rounded-xl bg-destructive text-destructive-foreground 
              text-sm hover:opacity-90 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
