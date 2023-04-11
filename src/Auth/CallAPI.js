const userKey = localStorage.getItem("key");

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

export const fetchBankDataWithAccountType = async (type) => {
  const req = await fetch(
    "https://wirelessbd.com/api/get-bank-data-with-account-type",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userKey}`,
      },
      body: JSON.stringify({ name: type }),
    }
  );
  return await req.json();
};

export const createAccount = async (body) => {
  const req = await fetch("https://wirelessbd.com/api/save-account-data", {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${userKey}`
    },
    body: JSON.stringify(body),
  });
  return await req.json();
};


export const loadAccountData = async () => {
  const request = await fetch('https://wirelessbd.com/api/get-account-data',{
      method:'GET',
      headers:{
        "Content-Type":"application/json",
        Authorization: `Bearer ${userKey}`,
      }
    });
    return await request.json()
}