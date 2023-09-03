import { InputJsonValue } from "../../types";
import { VikaUpdateManyWithoutUsersInput } from "./VikaUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  vikas?: VikaUpdateManyWithoutUsersInput;
};
