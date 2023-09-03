import { Vika as TVika } from "../api/vika/Vika";

export const VIKA_TITLE_FIELD = "mor";

export const VikaTitle = (record: TVika): string => {
  return record.mor || String(record.id);
};
