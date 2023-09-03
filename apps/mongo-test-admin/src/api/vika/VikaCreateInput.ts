import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VikaCreateInput = {
  user?: UserWhereUniqueInput | null;
  mor?: string | null;
};
