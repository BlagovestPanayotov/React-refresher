import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    // 'api-ket':'...'
  },
});

export { CanceledError };
