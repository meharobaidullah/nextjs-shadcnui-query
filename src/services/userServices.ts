import axios from "axios";
import { User, UserResponse } from "@/types/users";

const apiClient = axios.create({
  baseURL: "https://randomuser.me/api",
  headers: {
    "Content-type": "application/json",
  },
});

const getAllUsers = async () => {
  const response = await apiClient.get<UserResponse>(
    "/?inc=id,name,email,gender&results=100"
  );
  return response.data?.results;
};

export { getAllUsers };
