import axios from "axios";
import { IProject } from "interface/Project";

export const api = axios.create({
  baseURL: "https://api.github.com/users/PedroAlbertoVeber",
});

export const handleFilterList = async (url: string):Promise<IProject[]> => {
  const response = await api.get(url);
  return response.data;
};