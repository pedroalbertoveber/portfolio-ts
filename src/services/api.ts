import axios from "axios";
import { IFilter } from "interface/Filter";
import { IProject } from "interface/Project";

export const api = axios.create({
  baseURL: "https://api.github.com/users/PedroAlbertoVeber",
});

export const search = async (url: string, setState: React.Dispatch<React.SetStateAction<IProject[]>>) => {
  const response = await api.get(url);
  const newArray: IProject[] = response.data;
  
  setState(newArray.filter(item => item.id !== 553184544 && item.id !== 556304565));
};

export const handleFilterList = async (url: string, setState: React.Dispatch<React.SetStateAction<IProject[]>>, filter: IFilter) => {
  const response = await api.get(url);
  const newArray: IProject[] = response.data;

  if (filter.id === 'All') {
    setState(newArray.filter(item => item.id !== 553184544 && item.id !== 556304565));
    return;
  }

  setState(newArray.filter(item => item.id !== 553184544 && item.id !== 556304565 && item.language === filter.id));
};