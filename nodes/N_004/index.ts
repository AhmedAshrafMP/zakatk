import { BotkitConversation } from "botkit";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_004";
export default function NODE_004(convo: BotkitConversation): string {
  const CurrencyList = [
    "EGP",
    "USD",
    "EUR",
    "SAR",
    "AED",
    "KWD",
    "OMR",
    "IQD",
    "JOD",
    "BHD",
    "QAR",
    "TND",
  ];

  bkQRAsk(
    convo,
    NODE_ID + ".title",
    CurrencyList.map((crs) => ({
      title: NODE_ID + ".currency." + crs,
      payload: NODE_ID + "." + crs,
      onChoose: async (answer, convo, bot, msg) => {
        convo.gotoThread("t_NODE_006");
      },
    })),
    NODE_ID
  );

  return `t_${NODE_ID}`;
}
