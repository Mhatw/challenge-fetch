import { BASE_URL } from "./config";

export async function getData(page, fields) {
  const options = { method: "GET" };
  const response = await fetch(
    `${BASE_URL}?page=${page || 1}&results=5&${
      fields || "inc=name,dob,gender,email,nat,picture"
    }`,
    options
  );
  const data = await response.json();

  return data;

  // return response.data;
}
