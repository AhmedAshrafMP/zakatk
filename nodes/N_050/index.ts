import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";
import { convertVarToCurrency, translate } from "../../helpers";
import { getYearsDiff } from "../../helpers/dates/yearsdiff";
import { contiuneOrRepeatDialogue } from "../../helpers/dialogue";
import { numberWithCommas } from "../../helpers/variables";
import { getZakatForThisYear } from "../N_040_1";

const NODE_ID = "NODE_050";
export function NODE_050(convo: BotkitConversation): string {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    (_tmp, vars) => {
      return contiuneOrRepeatDialogue(vars, NODE_ID + ".opt1", "t_d_000_009");
    },
    NODE_ID,
    {},
    (_tmp, vars) => {
      const diff = getYearsDiff(vars.LAST_ZAKAT_DAY, vars.NO_OF_YEARS_LEFT);
      const calculatedZakat = getZakatForThisYear(vars);
      const paperZakat =
        calculatedZakat.money +
        calculatedZakat.savings +
        calculatedZakat.stocks;
      const goldZakat = calculatedZakat.gold_money;
      const silverZakat = calculatedZakat.silver_money;

      const threshould =
        vars.NODE_045 === "NODE_045.choice0"
          ? vars.gold_prices.gThreshold
          : vars.gold_prices.sThreshold;
      const thresholdMetal =
        vars.NODE_045 === "NODE_045.choice0" ? "GOLD" : "SILVER";
      const GroupingType =
        vars.NODE_045 === "NODE_046.choice1" ? "GROUP" : "SAPERATE";
      let title = "";
      let groupedZakatFirst,
        groupedZakatSecond = 0;
      if (GroupingType === "GROUP") {
        if (thresholdMetal === "GOLD") {
          groupedZakatFirst = calculatedZakat.gold_money + paperZakat / 40;
          groupedZakatSecond =
            calculatedZakat.silver_money > vars.gold_prices.sThreshold
              ? calculatedZakat.silver_money / 40
              : 0;
        } else {
          groupedZakatFirst = calculatedZakat.silver_money + paperZakat / 40;
          groupedZakatSecond =
            calculatedZakat.silver_money > vars.gold_prices.gThreshold
              ? calculatedZakat.gold_money / 40
              : 0;
        }
        // print money + selected metal to metal
        title = translate(`${NODE_ID}.GROUP.${thresholdMetal}.first`, {
          groupedZakatFirst: numberWithCommas(groupedZakatFirst),
          currency: convertVarToCurrency(vars.NODE_004),
        });
        // print other metal
        title = title + "\n";
        title = translate(`${NODE_ID}.GROUP.${thresholdMetal}.second`, {
          groupedZakatSecond: numberWithCommas(groupedZakatSecond),
          currency: convertVarToCurrency(vars.NODE_004),
        });

        // print total
        title =
          "\n" +
          translate(`${NODE_ID}.TOTAL`, {
            totalZakat: groupedZakatSecond + groupedZakatFirst,
            currency: convertVarToCurrency(vars.NODE_004),
          });
      } else {
        let total = 0;
        let allowZakat =
          paperZakat +
            calculatedZakat.gold_money +
            calculatedZakat.silver_money >
          threshould;
        if (allowZakat) {
          const thisZakat = Math.round(paperZakat / 40);
          total = total + thisZakat;
          title =
            title +
            "\n" +
            translate(`${NODE_ID}.SAPERATED.PAPER`, {
              thisZakat: numberWithCommas(thisZakat),
              currency: convertVarToCurrency(vars.NODE_004),
            });
        }
        if (allowZakat) {
          const thisZakat = Math.round(calculatedZakat.gold_money / 40);
          total = total + thisZakat;
          title =
            title +
            "\n" +
            translate(`${NODE_ID}.SAPERATED.GOLD`, {
              thisZakat: numberWithCommas(thisZakat),
              currency: convertVarToCurrency(vars.NODE_004),
            });
        }
        if (allowZakat) {
          const thisZakat = Math.round(calculatedZakat.silver_money / 40);
          total = total + thisZakat;
          title =
            title +
            "\n" +
            translate(`${NODE_ID}.SAPERATED.SILVER`, {
              thisZakat: numberWithCommas(thisZakat),
              currency: convertVarToCurrency(vars.NODE_004),
            });
        }

        title =
          "\n" +
          translate(`${NODE_ID}.TOTAL`, {
            totalZakat: total,
            currency: convertVarToCurrency(vars.NODE_004),
          });
      }

      return (
        title + translate(NODE_ID + ".title", { from: diff.from, to: diff.to })
      );
    }
  );

  return `t_${NODE_ID}`;
}
