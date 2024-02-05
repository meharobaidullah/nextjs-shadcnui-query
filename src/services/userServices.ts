import axios from "axios";
import { Gender, UserResponse } from "@/types/users";

const apiClient = axios.create({
  baseURL: "https://randomuser.me/api",
  headers: {
    "Content-type": "application/json",
  },
});

const getAllUsers = async (gender?: Gender) => {
  const isHaveValidGender = gender === "female" || gender === "male";
  const filterString = isHaveValidGender ? `&gender=${gender}` : "";

  const response = await apiClient.get<UserResponse>(
    `/?inc=id,name,email,gender&results=100${filterString}`
  );

  return response.data?.results;
};

export { getAllUsers };
