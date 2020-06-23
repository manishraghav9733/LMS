import index from "../apis/index";

export const adminLogin = async (email,password) => {
  const response = await adminLogin().get("/auth/login",{email, password });
  return response; 
};