import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { translate } from "../../helpers";
import { getZakatForThisYear } from "../N_040_1";

const NODE_ID = "NODE_046";
export function NODE_046(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (tmp, vars) => {
      return [
        {
          title: translate(NODE_ID + ".opt1"),
          payload: NODE_ID + ".choice0",
          onChoose: async (answer, convo, bot, msg) => {
            const threshould =
              convo.vars.NODE_045 === "NODE_045.choice0"
                ? convo.vars.gold_prices.gThreshold
                : convo.vars.gold_prices.sThreshold;
            const calculatedZakat = getZakatForThisYear(convo.vars);
            const paperZakat =
              calculatedZakat.money +
              calculatedZakat.savings +
              calculatedZakat.stocks;
            console.log("tafr2a", threshould, calculatedZakat);
            if (
              calculatedZakat.gold_money +
                paperZakat +
                calculatedZakat.silver_money >
              threshould
            ) {
              convo.gotoThread("t_NODE_050");
            } else {
              convo.gotoThread("t_NODE_049");
            }
          },
        },
        {
          title:
            vars.NODE_045 === "NODE_045.choice0"
              ? translate(NODE_ID + ".opt3")
              : translate(NODE_ID + ".opt2"),
          payload: NODE_ID + ".choice1",
          onChoose: async (answer, convo, bot, msg) => {
            const threshould =
              convo.vars.NODE_045 === "NODE_045.choice0"
                ? convo.vars.gold_prices.gThreshold
                : convo.vars.gold_prices.sThreshold;
            const thresholdMetal =
              convo.vars.NODE_045 === "NODE_045.choice0" ? "GOLD" : "SILVER";
            const calculatedZakat = getZakatForThisYear(convo.vars);
            const paperZakat =
              calculatedZakat.money +
              calculatedZakat.savings +
              calculatedZakat.stocks;
            console.log("tagme3", threshould, calculatedZakat, thresholdMetal);

            if (thresholdMetal === "GOLD") {
              if (calculatedZakat.gold_money + paperZakat > threshould) {
                convo.gotoThread("t_NODE_050");
              } else {
                convo.gotoThread("t_NODE_049");
              }
            } else {
              if (calculatedZakat.silver_money + paperZakat > threshould) {
                convo.gotoThread("t_NODE_050");
              } else {
                convo.gotoThread("t_NODE_049");
              }
            }
          },
        },
      ];
    },
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
