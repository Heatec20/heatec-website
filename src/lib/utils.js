import { classNames } from "classnames";
import { twMerge } from "twind-merge";

export function cn(...inputs) {
  return twMerge(classnames(inputs));
}
