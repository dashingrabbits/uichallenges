import axios from "axios";
import { User, UserStatus } from "../components/User/types/User.types";

const addStatusToUser = (user: Omit<User, "status">): User => ({
  ...user,
  status: [UserStatus.AVAILABLE, UserStatus.BUSY, UserStatus.AWAY][
    Math.floor(Math.random() * 3)
  ],
});

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data.map(addStatusToUser);
};
