export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function numberToViFormat(value: number) {
    return value.toLocaleString("vi-VN");
}