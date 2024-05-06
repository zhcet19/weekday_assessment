import { API_ENDPOINT } from "../utils/constants";

async function JobList(limit, offset) {
  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    limit: limit,
    offset: offset,
  });

  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: body,
  };

  try {
    const response = await fetch(API_ENDPOINT, requestOptions);
    console.log("response", response);

    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the JSON response
    const json = await response.json();
    console.log("json", json);

    return json; // Return the parsed JSON data
  } catch (error) {
    console.error(error);
    // Make sure to throw the error so that the caller knows there was an issue
    throw error;
  }
}

export default JobList;
