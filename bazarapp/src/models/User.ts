export const signUp = async (formData: User) => {
    const res = await fetch("http://localhost:3000/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      method: "POST"
    });
    const data = await res.json();
    return {
      status: res.status,
      msg: data.msg
    }
  };
  
  export const signIn = async (formData: User) => {
    const res = await fetch("http://localhost:3000/login")
  }
  
  export type User = {
    id?: string;
    email?: string;
    password?: string;
  };
  