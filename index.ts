import { Botkit } from "botkit";
import { D_000_003 } from "./dialogues";
import "./helpers/i18n/i18n";
export const botCtrl = new Botkit({
  webhook_uri: "/api/messages",
});

D_000_003(botCtrl);

botCtrl.hears(["hello"], "message", async (bot, message) => {
  return bot.beginDialog("d_000_003");
});
