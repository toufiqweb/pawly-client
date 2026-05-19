
export const getAllPets = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`);
    return res.json();
}