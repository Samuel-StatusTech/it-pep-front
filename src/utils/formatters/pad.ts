export const pad = (val: any, length: number, filler: any) =>
  String(val).padStart(length ?? 2, String(filler) ?? "0")
