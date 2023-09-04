import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VikaWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  mor?: StringNullableFilter;
  tick?: StringNullableFilter;
};
