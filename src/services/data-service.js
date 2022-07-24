import { BASE_URL } from "./config";

export async function getData() {
  const options = { method: "GET" };
  fetch(`${BASE_URL}/?page=1&results=10&inc=gender%2Cname%2Cna`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  // return response.data;
}
