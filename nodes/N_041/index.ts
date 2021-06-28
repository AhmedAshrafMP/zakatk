import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_041";
export function NODE_041(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (tmp, vars) => {
      let leftYears = parseFloat(vars.NO_OF_YEARS_LEFT) - 1;
      if (leftYears > 0) {
        return [
          {
            title: translate(NODE_ID + ".opt1"),
            payload: NODE_ID + ".choice0",
            onChoose: async (answer, convo, bot, msg) => {
              // TODO: reset resettable variables
              convo.setVar("doneMoneyOptions", []);
              convo.setVar("NODE_031", "");
              convo.setVar("totalDebit", 0);
              convo.setVar("totalCredit", 0);
              convo.setVar("totalGold", 0);
              convo.setVar("totalSilver", 0);
              convo.setVar("NODE_038", "");
              convo.setVar("NO_OF_YEARS_LEFT", leftYears);
              convo.gotoThread("t_NODE_023");
            },
          },
        ];
      } else {
        return [
          {
            title: translate(NODE_ID + ".opt2"),
            payload: NODE_ID + ".choice0",
            onChoose: async (answer, convo, bot, msg) => {
              await bot.say("TODO: TOTAL ZAKAT CARD");
              return bot.cancelAllDialogs();
            },
          },
        ];
      }
    },
    NODE_ID,
    {},
    (tmp, vars) => {
      const text: string[] = [];
      const currency = convertVarToCurrency(vars.NODE_004);

      // money
      const NODE_029 = safeParseFloat(vars.NODE_029);
      if (NODE_029 > 0) {
        text.push(
          translate(NODE_ID + ".NODE_029", {
            value: NODE_029,
            currency,
          })
        );
      }

      // money
      const TOTAL_DEBIT = safeParseFloat(vars.totalDebit);
      if (TOTAL_DEBIT > 0) {
        text.push(
          translate(NODE_ID + ".NODE_DEBIT", {
            value: TOTAL_DEBIT,
            currency,
          })
        );
      }

      // money
      const TOTAL_CREDIT = safeParseFloat(vars.totalCredit);
      if (TOTAL_CREDIT > 0) {
        text.push(
          translate(NODE_ID + ".NODE_CREDIT", {
            value: TOTAL_CREDIT,
            currency,
          })
        );
      }

      //savings
      const NODE_025 =
        safeParseFloat(vars.NODE_066) + safeParseFloat(vars.NODE_065);
      if (NODE_025 > 0) {
        text.push(
          translate(NODE_ID + ".NODE_025", {
            value: NODE_025,
            currency,
          })
        );
      }

      //stocks
      const NODE_024 =
        safeParseFloat(vars.NODE_070) + safeParseFloat(vars.NODE_071);
      if (NODE_024 > 0) {
        text.push(
          translate(NODE_ID + ".NODE_024", {
            value: NODE_024,
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
