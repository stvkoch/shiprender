import { hashCode } from "hashcode";

export const hash = (x) => {
  return hashCode().value(JSON.stringify(x))
};
