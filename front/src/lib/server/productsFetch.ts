import axios from "axios";

export default async function fetchProducts() {
  const response = await axios.get("http://localhost:5000/products");
  return response.data;
}
