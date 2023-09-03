import { JsonValue } from "type-fest";
import { Vika } from "../vika/Vika";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  vikas?: Array<Vika>;
};
