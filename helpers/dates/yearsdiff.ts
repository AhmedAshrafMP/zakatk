import moment from "moment";

interface getYearsDiffResult {
  from: string;
  to: string;
}

export function getYearsDiff(
  lastZakatDay: string,
  TotalNoOfZakatYears: number
): getYearsDiffResult {
  const NoOFYears = Math.floor(
    moment()
      .startOf("D")
      .diff(moment(moment(lastZakatDay)), "days") / 365
  );

  /**
   * get the current period in the period loop
   * if the period consists of 5 years so this period
   *  ex1: 5-5 = 0 => first year (from = start year + 0, to: start year + 0 + 1)
   *  ex2: 5-4 = 1 => second year (from = start year + 1, to: start year + 1 + 1)
   */
  const YearDiff = NoOFYears - TotalNoOfZakatYears;

  const from = moment(lastZakatDay).add(YearDiff, "years").format("ll");
  const to = moment(lastZakatDay)
    .add(YearDiff + 1, "years")
    .format("ll");

  return {
    from,
    to,
  };
}
