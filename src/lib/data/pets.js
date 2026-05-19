export const getAllPets = async (queryString = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pets?${queryString}`,
  );
  return await res.json();
};

export const getPetById = async (petId) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${petId}`);
  return await res.json();
};


export const getFeaturedPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured-pets`);
  return await res.json();
};

export const getUserListing = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pets?email=${email}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch listings");
  }

  return await res.json();
};