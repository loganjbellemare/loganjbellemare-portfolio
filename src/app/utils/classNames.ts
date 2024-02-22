import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ClassValue } from "clsx";

/** util function for easily changing class names on reused components as necessary, takes an array of class name values as an argument and appends them to the class attribute of the selected element */
export default function classNames(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
