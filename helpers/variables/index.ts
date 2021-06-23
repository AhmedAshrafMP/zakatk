export function safeParseFloat(n: string) {
  return parseFloat(typeof n != "undefined" && n != "undefined" ? `${n}` : "0");
}
