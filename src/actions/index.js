import crmApi from "../apis";

export const adminLogin = async (formValues) => {
  const response = await crmApi().post("/auth/login", formValues);
  return response;
};

export const getManagerList = async () => {
  const response = await crmApi().get("/user/user-list");
  return response;
};

export const getManagerDelete = async (userId) => {
  const response = await crmApi().delete(`/user/user-delete/${userId}`);
  return response;
};

export const addUser = async (formValues) => {
  const response = await crmApi().post("/auth/signup", formValues);
  return response;
};

export const getLeadList = async (limit, offset) => {
  const response = await crmApi().get("/leads/lead/list", {
    params: {
      limit,
      offset,
    },
  });
  return response;
};

export const bulkUploadLeads = async (csv) => {
  let formData = new FormData();
  formData.append("file", csv);

  const response = await crmApi().post("/leads/lead/upload", formData);
  return response;
};

export const getLeadsStatusData = async () => {
  const response = await crmApi().get("/leads/lead/status");
  return response;
};

export const getLeadDelete = async (leadId) => {
  const response = await crmApi().delete(`/leads/lead/${leadId}`);
  return response;
};
