"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function DeleteRequest({ request }) {
  const id = request?._id;
  const handleCancel = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/requests/${id}`,
      {
        method: "DELETE",
      },
    );

    const data = await res.json();

    // console.log(data);

    if (data.deletedCount) {
      toast.success("Request Cancelled");
    }
    window.location.reload();
  };

  return (
    <AlertDialog>
      <Button className="rounded-lg bg-destructive px-4 py-2 text-sm font-semibold text-destructive-foreground transition-opacity hover:opacity-90">
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p className="text-muted-foreground">
                This will permanently delete <strong>My Awesome Project</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Keep request
              </Button>
              <Button slot="close" variant="danger" onClick={handleCancel}>
                Yes , Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
