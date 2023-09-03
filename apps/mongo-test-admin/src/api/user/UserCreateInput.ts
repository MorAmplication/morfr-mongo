import { InputJsonValue } from "../../types";
import { VikaCreateNestedManyWithoutUsersInput } from "./VikaCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  vikas?: VikaCreateNestedManyWithoutUsersInput;
};
