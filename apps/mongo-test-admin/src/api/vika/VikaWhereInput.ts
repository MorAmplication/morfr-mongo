import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VikaWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
