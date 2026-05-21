export const getAllPets = async (queryString = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pets?${queryString}`,
    { cache: "no-store" },
  );
  return await res.json();
};

export const getPetById = async (petId, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${petId}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  return await res.json();
};

export const getFeaturedPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured-pets`);
  return await res.json();
};

export const getUserListing = async (email, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/listings?email=${email}`,
    {
      cache: "no-store",
      headers: { authorization: `Bearer ${token}` },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch listings");
  }

  return await res.json();
};
