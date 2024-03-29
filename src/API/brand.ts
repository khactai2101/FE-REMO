import axios from "axios";

const token = localStorage.getItem("accessToken");

export const getAllBrands = (data: any, dataToken: any) => {
  return axios
    .get("http://localhost:9000/api/v1/brands", {
      params: data,
      headers: {
        Authorization: `Bearer ${dataToken}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
      return error;
    });
};
export const createBrands = (data: any) => {
  return axios
    .post(
      `http://localhost:9000/api/v1/brands`,
      { name: data },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
      return error;
    });
};

export const updateBrands = (id: number, data: any) => {
  return axios
    .put(
      `http://localhost:9000/api/v1/brands/${id}`,
      { name: data },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
      return error;
    });
};

export const deleteBrand = (id: any) => {
  return axios
    .delete(`http://localhost:9000/api/v1/brands/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
      return error;
    });
};

// export const getOneBrand = (id: number) => {
//   return axios
//     .get(`http://localhost:9000/api/v1/brands/${id}`)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.error("Error!!!!", error);
//       throw error;
//     });
// };
