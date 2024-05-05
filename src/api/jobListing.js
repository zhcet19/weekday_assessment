import { API_ENDPOINT } from "../utils/constants";
const axios = require("axios");

function JobList() {
  const headers = {
    "Content-Type": "application/json",
  };
  const data = {
    limit: 10,
    offset: 0,
  };

  axios
    .post(API_ENDPOINT, data, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export default JobList;
