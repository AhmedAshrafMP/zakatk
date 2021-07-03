import moment from "moment";

interface getYearsDiffResult {
  from: string;
  to: string;
  fromMoment: moment.Moment;
  toMoment: moment.Moment;
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

  const from = moment(lastZakatDay).add(TotalNoOfZakatYears - 1, "years");

  const to = moment(lastZakatDay)
    .add(TotalNoOfZakatYears, "years")
    .subtract(1, "days");

  return {
    from: from.format("ll"),
    to: to.format("ll"),
    fromMoment: from,
    toMoment: to,
  };
}
