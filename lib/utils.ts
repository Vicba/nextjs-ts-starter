import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export function shortUUID(uuid: string) {
  return `${uuid.slice(0, 4)}...${uuid.slice(-4)}`;
}

export function onCopy(toCopy: string) {
  return () => {
    copyToClipboard(toCopy);
    // toast.success("Copied to clipboard");
  };
}
