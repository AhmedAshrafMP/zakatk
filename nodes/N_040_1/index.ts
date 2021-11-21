import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { safeParseFloat } from "../../helpers/variables";

const NODE_ID = "NODE_040_1";

interface ZakatForThisYear {
  money: number;
  savings: number;
  stocks: number;
  gold_gram: number;
  silver_gram: number;
  gold_money: number;
  silver_money: number;
  resolved: boolean;
}

export function getZakatForThisYear(vars): ZakatForThisYear {
  const zkataValues: ZakatForThisYear = {
    money:
      safeParseFloat(vars.NODE_029) -
      safeParseFloat(vars.totalDebit) +
      safeParseFloat(vars.totalCredit),
    savings: safeParseFloat(vars.NODE_066) + safeParseFloat(vars.NODE_065) * 4,
    stocks: safeParseFloat(vars.NODE_070) + safeParseFloat(vars.NODE_071),
    gold_gram: safeParseFloat(vars.totalGold),
    silver_gram: safeParseFloat(vars.totalSilver),
    gold_money: safeParseFloat(vars.totalGold) * vars.gold_prices.gold,
    silver_money: safeParseFloat(vars.totalGold) * vars.gold_prices.silver,
    resolved: false,
  };
  // console.log(zkataValues, vars.gold_prices);

  return zkataValues;
}

export function NODE_040_1(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          convo.gotoThread("t_NODE_023");
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          // calc threshold
          const calculatedZakat = getZakatForThisYear(convo.vars);
          const paperZakat =
            calculatedZakat.money +
            calculatedZakat.savings +
            calculatedZakat.stocks;
          const goldZakat = calculatedZakat.gold_money;
          const silverZakat = calculatedZakat.silver_money;
          console.log(
            calculatedZakat,
            paperZakat + goldZakat + silverZakat,
            convo.vars.gold_prices.sThreshold,
            paperZakat + goldZakat + silverZakat <
              safeParseFloat(convo.vars.gold_prices.sThreshold)
          );
          if (
            paperZakat + goldZakat + silverZakat <
            safeParseFloat(convo.vars.gold_prices.sThreshold)
          ) {
            convo.gotoThread("t_NODE_049");
          } else {
            if (
              paperZakat + goldZakat > convo.vars.gold_prices.gThreshold &&
              silverZakat > convo.vars.gold_prices.sThreshold
            ) {
              convo.gotoThread("t_NODE_043");
            } else if (paperZakat > convo.vars.gold_prices.gThreshold) {
              convo.setVar("NODE_045", "NODE_045.choice0");
              convo.gotoThread("t_NODE_046");
            } else {
              convo.gotoThread("t_NODE_045");
            }
          }
        },
      },
    ],
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
