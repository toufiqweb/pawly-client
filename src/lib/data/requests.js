// export const getMyRequests = async (email) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/requests/${email}`,
//   );

//   const data = await res.json();

//   return data;
// };
export const getMyRequests = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/requests?userEmail=${encodeURIComponent(email)}`
  );

  if (!res.ok) {
    throw new Error("Failed to load requests");
  }

  const data = await res.json();
  return data;
};
export const getRequestByPetId = async (petId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/requests?petId=${encodeURIComponent(petId)}`
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
