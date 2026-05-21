"use client";

import { useState } from "react";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { Users } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export function RequestsModal({ petId }) {
  const sizes = ["lg"];

  const [petRequests, setPetRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  // GET PET REQUESTS
  const getPetRequests = async (id) => {
    try {
      setLoading(true);

      const { data: tokenData } = await authClient.token();
      const token = tokenData?.token;
      // console.log(token);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/requests?petId=${id}`,
        {
          headers: { authorization: `Bearer ${token}` },
        },
      );
      const data = await res.json();

      setPetRequests(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  // UPDATE REQUEST STATUS
  const handleStatus = async (id, status) => {
    try {
      const { data: tokenData } = await authClient.token();
      const token = tokenData?.token;
      // console.log(token);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/requests/${id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status }),
        },
      );

      const data = await res.json();

      // if (res.ok) {
      //   setPetRequests((prev) =>
      //     prev.map((request) =>
      //       request._id === id ? { ...request, status } : request,
      //     ),
      //   );

      //   toast.success(`Request ${status}`);
      // }

      if (res.ok) {
        // আবার সব request fetch করো
        await getPetRequests(petId);

        toast.success(`Request ${status}`);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <Modal key={size}>
          {/* REQUESTS */}
          <Button
            onPress={() => getPetRequests(petId)}
            variant="outline"
            className="col-span-2 border border-primary/40 text-primary cursor-pointer hover:bg-primary/10 transition-all rounded-xl py-2.5 flex items-center justify-center gap-2 text-sm font-semibold"
          >
            <Users size={18} />
            Manage Requests
          </Button>

          <Modal.Backdrop>
            <Modal.Container size={size}>
              <Modal.Dialog>
                <Modal.CloseTrigger />

                <Modal.Header>
                  <Modal.Icon className="bg-default text-foreground">
                    <Rocket className="size-5" />
                  </Modal.Icon>

                  <Modal.Heading>Adoption Requests</Modal.Heading>
                </Modal.Header>

                <Modal.Body>
                  {loading ? (
                    <p>Loading...</p>
                  ) : petRequests.length === 0 ? (
                    <p>No requests found.</p>
                  ) : (
                    <div className="space-y-4">
                      {/* TITLE */}
                      <h2 className="text-lg font-bold mb-4">
                        Adoption Requests
                      </h2>

                      {petRequests.map((request) => (
                        <div
                          key={request._id}
                          className="border rounded-xl p-4 space-y-2"
                        >
                          {/* USER INFO */}
                          <h2 className="font-semibold text-lg">
                            {request.userName}
                          </h2>

                          <p className="text-sm text-default-500">
                            {request.userEmail}
                          </p>

                          {/* PICKUP DATE */}
                          <p className="text-sm">
                            <span className="font-medium">Pickup Date:</span>{" "}
                            {request.pickupDate || "Not set"}
                          </p>

                          {/* STATUS */}
                          <p className="text-sm">
                            Status:{" "}
                            <span className="font-medium capitalize">
                              {request.status}
                            </span>
                          </p>

                          {/* ACTIONS */}
                          <div className="flex gap-3 mt-4">
                            {request.status === "pending" ? (
                              <>
                                <button
                                  onClick={() =>
                                    handleStatus(request._id, "approved")
                                  }
                                  className="px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:opacity-90 transition"
                                >
                                  Approve
                                </button>

                                <button
                                  onClick={() =>
                                    handleStatus(request._id, "rejected")
                                  }
                                  className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:opacity-90 transition"
                                >
                                  Reject
                                </button>
                              </>
                            ) : (
                              <div
                                className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                                  request.status === "approved"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                }`}
                              >
                                {request.status === "approved"
                                  ? "Approved"
                                  : "Rejected"}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Modal.Body>

                <Modal.Footer>
                  <Button slot="close" variant="secondary">
                    Close
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      ))}
    </div>
  );
}
