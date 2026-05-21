
export const getMyRequests = async (email , token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/requests?userEmail=${encodeURIComponent(email)}` ,
    {
      headers: { authorization: `Bearer ${token}` },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to load requests");
  }

  const data = await res.json();
  return data;
};
export const getRequestByPetId = async (petId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/requests?petId=${encodeURIComponent(petId)}` ,
    {
      headers: { authorization: `Bearer ${token}` },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to load requests");
  }

  const data = await res.json();
  return data;
};

const getPetRequests = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/requests/${id}`);
  const data = await res.json();
  return data;
};
