export function safeParseFloat(n: string | number) {
  return parseFloat(
    parseFloat(
      typeof n != "undefined" && n != "undefined" ? `${n}` : "0"
    ).toFixed(2)
  );
}
export function numberWithCommas(x) {
  return (x || 0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
