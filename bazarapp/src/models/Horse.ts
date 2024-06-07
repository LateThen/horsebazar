export const createHorse = async (formData) => {
  const res = await fetch("http://localhost:3000/api/v1/horses", {
    body: formData,
    method: "POST",
  });
  const data = await res.json();
  return {
    status: res.status,
    msg: data.msg,
  };
};

export const getUploads = async () => {
  const req = await fetch("http://localhost:3000/api/v1/horses", {
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
export const getUpload = async (id) => {
  const req = await fetch(`http://localhost:3000/api/v1/horses/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
export const deleteUpload = async (id, formData) => {
  console.log(formData);
  const res = await fetch(`http://localhost:3000/api/v1/horses/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: formData.password,
    }),
  });
}
export const updateUpload = async (id, formData) => {
  console.log(...formData);
  const req = await fetch(`http://localhost:3000/api/v1/horses/${id}`, {
    method: "PUT",
    body: formData,
  });
  const data = await req.json();
  return createUploadPayload(req, data);
};
  export type Horse = {
    id?: string;
    name?: string;
    phonenumber?: number;
    location?: string;
    price?: number;
    description?: string;
    postname?: string;
    photo? : string;
    password? : string;
    category? : string;
    //pridani obrazku
  };
  
  const createUploadPayload = (req, data) => {
    return {
      msg: data.msg,
      data: data.payload,
      status: req.status,
    };
  };
  