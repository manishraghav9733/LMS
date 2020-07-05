import crmApi from "../apis";

export const adminLogin = async (formValues) => {
  const response = await crmApi().post("/auth/login", formValues);
  return response;
};

export const getManagerList = async () => {
  const response = await crmApi().get("/user/user-list");
  return response;
};

export const addUser = async (formValues) => {
  const response = await crmApi().post("/auth/signup", formValues);
  return response;
};

export const getLeadList = async () => {
  const response = await crmApi().get("/leads/lead/list");
  return response;
};

export const bulkUploadLeads = async (csv) => {
  let formData = new FormData();
  formData.append("file", csv);

  const response = await crmApi().post("/leads/lead/upload", formData);
  return response;
};
