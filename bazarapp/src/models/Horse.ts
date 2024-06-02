export const createHorse = async (formData) => {
  const res = await fetch("http://localhost:3000/api/v1/horse", {
    body: formData,
    method: "POST",
  });
  const data = await res.json();
  return {
    status: res.status,
    msg: data.msg,
  };
};

export const getHorses = async () => {
  const req = await fetch("http://localhost:3000/api/v1/horse", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
  
  export type Horse = {
    id?: string;
    name?: string;
    phonenumber?: number;
    location?: string;
    price?: number;
    description?: string;
    postname?: string;
    //pridani obrazku
  };
  