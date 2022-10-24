import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/PedroAlbertoVeber/repos",
});

export const search = async (url: string, setState: any) => {
  const response = await api.get(url);

  setState(response.data);
};