import { create } from "./http-setvice";

export interface User {
  id: number;
  name: string;
}

export const userService = create("/users/");
