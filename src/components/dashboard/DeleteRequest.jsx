"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function DeleteRequest({ request }) {
  const id = request?._id;
  const handleCancel = async () => {
    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/requests/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
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
      <Button variant="outline" className="bg-destructive text-destructive-foreground rounded-lg px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90">
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete {request?.petName}?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p className="text-muted-foreground">
                This will permanently delete <strong>{request?.petName}</strong>{" "}
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
