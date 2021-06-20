import { BotkitConversation } from "botkit";
import I18n from "i18n-js";
import bkQRAsk from "../../bot_nodes/ask_qr";

const NODE_ID = "NODE_000";
export default function NODE_000(convo: BotkitConversation): void {
  bkQRAsk(
    convo,
    NODE_ID + ".title",
    [
      {
        title: NODE_ID + ".opt1",
        payload: NODE_ID + ".choice0",
        onChoose: async (answer, convo, bot, msg) => {
          I18n.locale = "en";
        },
      },
      {
        title: NODE_ID + ".opt2",
        payload: NODE_ID + ".choice1",
        onChoose: async (answer, convo, bot, msg) => {
          I18n.locale = "ar";
        },
      },
    ],
    NODE_ID
  );
}
