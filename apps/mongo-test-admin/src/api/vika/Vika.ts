import { User } from "../user/User";

export type Vika = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  mor: string | null;
};
