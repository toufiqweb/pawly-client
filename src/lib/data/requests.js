export const getMyRequests = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/my-requests/${email}`,
  );

  const data = await res.json();

  return data;
};
