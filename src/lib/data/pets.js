
export const getAllPets = async (searchTerm = "") => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets?search=${searchTerm}`);
    return await res.json();
}

export const getPetById = async (petId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${petId}`);
    return await res.json();
}

export const getFeaturedPets = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured-pets`);
    return await res.json();
}