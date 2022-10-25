import axios from "axios";
import { IProject } from "interface/Project";

export const api = axios.create({
  baseURL: "https://api.github.com/users/PedroAlbertoVeber",
});

export const search = async (url: string, setState: React.Dispatch<React.SetStateAction<IProject[]>>) => {
  const response = await api.get(url);
  const newArray: IProject[] = response.data;
  
  setState(newArray.filter(item => item.id !== 553184544 && item.id !== 556304565));
};