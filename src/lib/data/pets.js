
export const getAllPets = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`);
    return await res.json();
}

export const getPetById = async (petId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${petId}`);
    return await res.json();
}