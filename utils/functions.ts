import axios from "axios";
const URL_API = "https://jsonplaceholder.typicode.com/posts";

export async function axiosGET() {
  const response = await axios.get(URL_API);
  console.log("GET Response:", response.data);
  return response;
}

export async function axiosPOST() {
  const response = await axios.post(URL_API, {
    title: "test",
    body: "test",
  });
  console.log("POST Response: ", response.data);
  return response.data;
}

export function hexToRgba(hex: string, opacity?: number): string {
  const aux: string[] = hex.split("#")[1].match(/.{1,2}/g) as string[];
  const r = parseInt(aux[0], 16);
  const g = parseInt(aux[1], 16);
  const b = parseInt(aux[2], 16);
  const result = `${r},${g},${b}`;
  return `rgba(${result}, ${opacity ? opacity : 1})`;
}
