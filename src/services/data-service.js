import { BASE_URL } from "./config";

export async function getData(page, fields) {
  const options = { method: "GET" };
  const response = await fetch(
    `${BASE_URL}?page=${page || 1}&results=5&${
      fields || "inc=name,dob,gender,email,nat,picture"
    }&seed=abc`,
    options
  );
  const data = await response.json();

  return data;
}

export function downloadData(page) {
  fetch(`${BASE_URL}?page=${page || 1}&results=5&seed=abc`)
    .then(function (t) {
      return t.blob().then((b) => {
        let a = document.createElement("a");
        a.href = URL.createObjectURL(b);
        a.setAttribute("download", "users-page-" + page + ".csv");
        a.click();
      });
    })
    .catch(function (err) {
      console.log(err);
      alert("Error with API server, please try again");
    });
}
