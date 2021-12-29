import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { numberWithCommas, safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_041";

function setZakatPerYear(vars, leftYears) {
  const diff = getYearsDiff(vars.LAST_ZAKAT_DAY, leftYears + 1);

  const zakat_per_years = vars.zakat_per_years || {};
  const zkataValues = {
    money:
      safeParseFloat(vars.NODE_029) -
      safeParseFloat(vars.totalDebit) +
      safeParseFloat(vars.totalCredit),
    savings: safeParseFloat(vars.NODE_066) + safeParseFloat(vars.NODE_065) * 4,
    stocks: safeParseFloat(vars.NODE_070) * 4 + safeParseFloat(vars.NODE_071),
    gold_gram: safeParseFloat(vars.totalGold),
    silver_gram: safeParseFloat(vars.totalSilver),
    gold_money: safeParseFloat(vars.totalGold) * vars.gold_prices.gold,
    silver_money: safeParseFloat(vars.totalSilver) * vars.gold_prices.silver,
    resolved: false,
  };
  console.log(zkataValues, vars.gold_prices);
  // add this year if it passed silver threshold
  if (
    zkataValues.money +
      zkataValues.savings +
      zkataValues.stocks +
      zkataValues.gold_money +
      zkataValues.silver_money >
    vars.gold_prices.sThreshold
  ) {
    // add year to years object
    zakat_per_years[diff.toMoment.toISOString()] = zkataValues;
  }

  return zakat_per_years;
}

function clearYearsValue(convo, leftYears) {
  // TODO: reset resettable variables
  convo.setVar("doneMoneyOptions", []);
  convo.setVar("NODE_031", "");
  convo.setVar("totalDebit", 0);
  convo.setVar("totalCredit", 0);
  convo.setVar("totalGold", 0);
  convo.setVar("totalSilver", 0);
  convo.setVar("NODE_038", "");
  convo.setVar("NO_OF_YEARS_LEFT", leftYears);

  /// set period current value
  convo.setVar("zakat_per_years", setZakatPerYear(convo.vars, leftYears));
}

export function NODE_041(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (_tmp, vars) => {
      let leftYears = parseFloat(vars.NO_OF_YEARS_LEFT) - 1;
      if (leftYears > 0) {
        return [
          {
            title: translate(NODE_ID + ".opt1"),
            payload: NODE_ID + ".choice0",
            onChoose: async (_answer, convo, _bot, _msg) => {
              clearYearsValue(convo, leftYears);
              convo.gotoThread("t_NODE_023");
            },
          },
          {
            title: translate(NODE_ID + ".opt3"),
            payload: NODE_ID + ".choice2",
            onChoose: async (_answer, convo, _bot, _msg) => {
              clearYearsValue(convo, leftYears);
              convo.stop();
            },
          },
        ];
      } else {
        return [
          {
            title: translate(NODE_ID + ".opt2"),
            payload: NODE_ID + ".choice0",
            onChoose: async (_answer, convo, bot, _msg) => {
              /// set period current value
              const zakat_per_years = setZakatPerYear(convo.vars, leftYears);
              convo.setVar("zakat_per_years", zakat_per_years);

              console.log(zakat_per_years);
              await bot.say("TODO: TOTAL ZAKAT CARD");
              return bot.cancelAllDialogs();
            },
          },
        ];
      }
    },
    NODE_ID,
    {},
    (_tmp, vars) => {
      const text: string[] = [];
      const currency = convertVarToCurrency(vars.NODE_004);

      // money
      const NODE_029 = safeParseFloat(vars.NODE_029);
      if (NODE_029 > 0) {
        text.push(
          translate(NODE_ID + ".NODE_029", {
            value: numberWithCommas(NODE_029),
            currency,
          })
        );
      }

      // money
      const TOTAL_DEBIT = safeParseFloat(vars.totalDebit);
      if (TOTAL_DEBIT > 0) {
        text.push(
          translate(NODE_ID + ".NODE_DEBIT", {
            value: numberWithCommas(TOTAL_DEBIT),
            currency,
          })
        );
      }

      // money
      const TOTAL_CREDIT = safeParseFloat(vars.totalCredit);
      if (TOTAL_CREDIT > 0) {
        text.push(
          translate(NODE_ID + ".NODE_CREDIT", {
            value: numberWithCommas(TOTAL_CREDIT),
            currency,
          })
        );
      }

      //savings
      const NODE_025 =
        safeParseFloat(vars.NODE_066) + safeParseFloat(vars.NODE_065) * 4;
      if (NODE_025 > 0) {
        text.push(
          translate(NODE_ID + ".NODE_025", {
            value: numberWithCommas(NODE_025),
            currency,
          })
        );
      }

      //stocks
      const NODE_024 =
        safeParseFloat(vars.NODE_070) * 4 + safeParseFloat(vars.NODE_071);
      if (NODE_024 > 0) {
        text.push(
          translate(NODE_ID + ".NODE_024", {
            value: numberWithCommas(NODE_024),
            currency,
          })
        );
      }

      // gold
      const NODE_026 = safeParseFloat(vars.totalGold);
      if (NODE_026 > 0) {
        text.push(
          translate(NODE_ID + ".NODE_026", {
            value: NODE_026,
          })
        );
      }

      // silver
      const NODE_026_1 = safeParseFloat(vars.totalSilver);
      if (NODE_026_1 > 0) {
        text.push(
          translate(NODE_ID + ".NODE_026_1", {
            value: NODE_026_1,
          })
        );
      }

      const diff = getYearsDiff(vars.LAST_ZAKAT_DAY, vars.NO_OF_YEARS_LEFT);
      text.push(
        translate(NODE_ID + ".NODE_PERIOD", { from: diff.from, to: diff.to })
      );

      return " - " + text.join("\n - ");
    }
  );

  return `t_${NODE_ID}`;
}
