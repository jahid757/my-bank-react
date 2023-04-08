export const fetchUserData = async (key) => {
    const req = await fetch(`https://wirelessbd.com/api/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
    });
    const response = await req.json();
    return response.userData;
  };